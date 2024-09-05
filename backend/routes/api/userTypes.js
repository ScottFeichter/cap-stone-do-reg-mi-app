
const express = require('express');
const { Op } = require('sequelize');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { UserType } = require("../../db/models");


// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello world from route api/userTypes/hello/world!');
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


// ==================GET ALL USER TYPES==============================
router.get("/", requireAuth, async (req, res, next) => {


  let userTypes = await UserType.findAll({
    attributes: [
      "id",
      "type",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ userTypes, /* page, size */ });

});

// ==================GET A USER TYPE BY ID =========================
router.get("/:userTypeId", async (req, res, next) => {
  const userType = await UserType.findByPk(req.params.userTypeId, {
    attributes: [
      "id",
      "type",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!userType) {
    const err = new Error("User Type couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(userType);
});


// ==================CREATE A USER TYPE=============================

router.post("/", requireAuth, async (req, res, next) => {

  const { type } = req.body;


  const exists = await UserType.findAll({
    where: [
      { type: type },
    ],
  });

  if (exists.length) {
    const err = new Error("User Type already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuUserType = await UserType.build({
      type: type,
    });

    await nuUserType.validate();
    await nuUserType.save();
  }

  const nuUserTypeFromDB = await UserType.findAll({
    where: [
      { type: type },
    ],
  });


  return  res.status(201).json(nuUserTypeFromDB);


});



// ==================EDIT A USER TYPE===============================


router.put("/:userTypeId", requireAuth, async (req, res, next) => {
  const { type } = req.body;
  const userTypeId = req.params.userTypeId;

  const userTypeToUpdate = await UserType.findByPk(req.params.userTypeId);

  if (!userTypeToUpdate) {
    const err = new Error("User Type couldn't be found");
    err.status = 404;
    return next(err);
  }

  if (
    (typeof type !== "string" && type !== undefined) ||
    type.length > 30 ||
    type === "" ||
    type === null
  ) {
    const err = new Error("Bad Request");
    err.errors = { type: "Type must be less than 30 characters" };
    err.status = 400;
    return next(err);
  }


  if (type !== undefined) userTypeToUpdate.type = type;


  await userTypeToUpdate.save();

  res.json(userTypeToUpdate);
});


// ==================DELETE A USER TYPE=============================

router.delete("/:userTypeId", requireAuth, async (req, res, next) => {
  const userTypeToDelete = await UserType.findByPk(req.params.userTypeId);


  if (!userTypeToDelete) {
    const err = new Error("User Type couldn't be found");
    err.status = 404;
    return next(err);
  }

  await userTypeToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});


// ===========================================================================

module.exports = router;
