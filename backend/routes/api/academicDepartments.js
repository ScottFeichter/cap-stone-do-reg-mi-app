
const express = require('express');
const { Op } = require('sequelize');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { AcademicDepartment } = require("../../db/models");


// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello world from route api/academicDepartments/hello/world!');
});

// ==================HELPER FUNCTIONS==========================================

const pagination = (reqQuery) => {

  let { size, page } = req.query;

  if (!page) page = 1;
  if (!size) size = 10;

  if (page < 1 || isNaN(page)) page = 1;
  if (size < 1 || isNaN(size)) size = 10;

  if (size > 10) size = 10;

  const pagination = {};

  if (size > 0 && page > 0) {
    pagination.limit = parseInt(size);
    pagination.offset = parseInt(size) * parseInt(page - 1);
  }

  return pagination;

}


// ==================GET ALL ACADEMIC DEPARTMENTS==============================
router.get("/", requireAuth, async (req, res, next) => {


  let academicDepartments = await AcademicDepartment.findAll({
    attributes: [
      "id",
      "name",
      "chair",
      "imageURL",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ academicDepartments, /* page, size */ });

});

// ==================GET AN ACADEMIC DEPARTMENT BY ID =========================
router.get("/:academicDepartmentId", async (req, res, next) => {
  const academicDepartment = await AcademicDepartment.findByPk(req.params.academicDepartmentId, {
    attributes: [
      "id",
      "name",
      "chair",
      "imageURL",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!academicDepartment) {
    const err = new Error("Academic Department couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(academicDepartment);
});


// ==================CREATE AN ACADEMIC DEPARTMENT=============================

router.post("/", requireAuth, async (req, res, next) => {

  const { name, chair, imageURL } = req.body;


  const exists = await AcademicDepartment.findAll({
    where: [
      { name: name },
    ],
  });

  if (exists.length) {
    const err = new Error("Academic Department already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuAcademicDepartment = await AcademicDepartment.build({
      name: name,
      chair: chair,
      imageURL: imageURL,
    });

    await nuAcademicDepartment.validate();
    await nuAcademicDepartment.save();
  }

  const nuAcademicDepartmentFromDB = await AcademicDepartment.findAll({
    where: [
      { name: name },
    ],
  });


  return  res.status(201).json(nuAcademicDepartmentFromDB);


});



// ==================EDIT AN ACADEMIC DEPARTMENT===============================


router.put("/:academicDepartmentId", requireAuth, async (req, res, next) => {
  const { name, chair, imageURL } = req.body;
  const academicDepartmentId = req.params.academicDepartmentId;

  const academicDepartmentToUpdate = await AcademicDepartment.findByPk(req.params.academicDepartmentId);

  if (!academicDepartmentToUpdate) {
    const err = new Error("Academic Department couldn't be found");
    err.status = 404;
    return next(err);
  }

  if (
    (typeof name !== "string" && name !== undefined) ||
    name.length > 30 ||
    name === "" ||
    name === null
  ) {
    const err = new Error("Bad Request");
    err.errors = { name: "Name must be less than 30 characters" };
    err.status = 400;
    return next(err);
  }

  if (
    (typeof chair !== "string" && (chair !== undefined || chair !== null))

  ) {
    const err = new Error("Bad Request");
    err.errors = { chair: "Chair must be alphabetic." };
    err.status = 400;
    return next(err);
  }

  if (
    (typeof imageURL !== "string" && (imageURL !== undefined || imageURL !== null))
  ) {
    const err = new Error("Bad Request");
    err.errors = { imageURL: "Image URL is invalid" };
    err.status = 400;
    return next(err);
  }


  if (name !== undefined) academicDepartmentToUpdate.name = name;
  if (chair !== undefined) academicDepartmentToUpdate.chair = chair;
  if (imageURL !== undefined) academicDepartmentToUpdate.imageURL = imageURL;


  await academicDepartmentToUpdate.save();

  res.json(academicDepartmentToUpdate);
});


// ==================DELETE AN ACADEMIC DEPARTMENT=============================

router.delete("/:academicDepartmentId", requireAuth, async (req, res, next) => {
  const academicDepartmentToDelete = await AcademicDepartment.findByPk(req.params.academicDepartmentId);


  if (!academicDepartmentToDelete) {
    const err = new Error("Academic Department couldn't be found");
    err.status = 404;
    return next(err);
  }

  await academicDepartmentToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});


// ===========================================================================

module.exports = router;
