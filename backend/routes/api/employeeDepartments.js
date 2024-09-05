const express = require('express');
const { Op } = require('sequelize');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { EmployeeDepartment } = require("../../db/models");


// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello world from route api/employeeDepartments/hello/world!');
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


// ==================GET ALL EMPLOYEE DEPARTMENTS==============================
router.get("/", requireAuth, async (req, res, next) => {


  let employeeDepartments = await EmployeeDepartment.findAll({
    attributes: [
      "id",
      "name",
      "imageURL",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });


  return res.json({ employeeDepartments, /* page, size */ });


});

// ==================GET AN EMPLOYEE DEPARTMENT BY ID =========================
router.get("/:employeeDepartmentId", async (req, res, next) => {
  const employeeDepartment = await EmployeeDepartment.findByPk(req.params.employeeDepartmentId, {
    attributes: [
      "id",
      "name",
      "imageURL",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!employeeDepartment) {
    const err = new Error("Employee Department couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(employeeDepartment);
});


// ==================CREATE AN EMPLOYEE DEPARTMENT=============================

router.post("/", requireAuth, async (req, res, next) => {

  const { name, imageURL } = req.body;


  const exists = await EmployeeDepartment.findAll({
    where: [
      { name: name },
    ],
  });

  if (exists.length) {
    const err = new Error("Employee Department already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuEmployeeDepartment = await EmployeeDepartment.build({
      name: name,
      imageURL: imageURL,
    });

    await nuEmployeeDepartment.validate();
    await nuEmployeeDepartment.save();
  }

  const nuEmployeeDepartmentFromDB = await EmployeeDepartment.findAll({
    where: [
      { name: name },
    ],
  });


  return  res.status(201).json(nuEmployeeDepartmentFromDB);


});



// ==================EDIT AN EMPLOYEE DEPARTMENT===============================


router.put("/:employeeDepartmentId", requireAuth, async (req, res, next) => {
  const { name, imageURL } = req.body;
  const employeeDepartmentId = req.params.employeeDepartmentId;

  const employeeDepartmentToUpdate = await EmployeeDepartment.findByPk(req.params.employeeDepartmentId);

  if (!employeeDepartmentToUpdate) {
    const err = new Error("Employee Department couldn't be found");
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
    (typeof imageURL !== "string" && (imageURL !== undefined || imageURL !== null))
  ) {
    const err = new Error("Bad Request");
    err.errors = { imageURL: "Image URL is invalid" };
    err.status = 400;
    return next(err);
  }


  if (name !== undefined) employeeDepartmentToUpdate.name = name;
  if (imageURL !== undefined) employeeDepartmentToUpdate.imageURL = imageURL;


  await employeeDepartmentToUpdate.save();

  res.json(employeeDepartmentToUpdate);
});


// ==================DELETE AN EMPLOYEE DEPARTMENT=============================

router.delete("/:employeeDepartmentId", requireAuth, async (req, res, next) => {
  const employeeDepartmentToDelete = await EmployeeDepartment.findByPk(req.params.employeeDepartmentId);


  if (!employeeDepartmentToDelete) {
    const err = new Error("Employee Department couldn't be found");
    err.status = 404;
    return next(err);
  }

  await employeeDepartmentToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});


// ===========================================================================

module.exports = router;
