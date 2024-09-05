
const express = require('express');
const { Op } = require('sequelize');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Household } = require("../../db/models");


// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello world from route api/households/hello/world!');
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


// ==================GET ALL HOUSEHOLDS==============================
router.get("/", requireAuth, async (req, res, next) => {


  let households = await Household.findAll({
    attributes: [
      "id",
      "name",
      "notes",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ households, /* page, size */ });

});

// ==================GET A HOUSEHOLD BY ID =========================
router.get("/:householdId", async (req, res, next) => {
  const household = await Household.findByPk(req.params.householdId, {
    attributes: [
      "id",
      "name",
      "notes",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!household) {
    const err = new Error("Household couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(household);
});


// ==================CREATE A HOUSEHOLD=============================

router.post("/", requireAuth, async (req, res, next) => {

  const { name, notes } = req.body;


  const exists = await Household.findAll({
    where: [
      { name: name },
    ],
  });

  if (exists.length) {
    const err = new Error("Household already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuHousehold = await Household.build({
      name: name,
      notes: notes,
    });

    await nuHousehold.validate();
    await nuHousehold.save();
  }

  const nuHouseholdFromDB = await Household.findAll({
    where: [
      { name: name },
    ],
  });


  return  res.status(201).json(nuHouseholdFromDB);


});



// ==================EDIT A HOUSEHOLD===============================


router.put("/:householdId", requireAuth, async (req, res, next) => {
  const { name, notes } = req.body;
  const householdId = req.params.householdId;

  const householdToUpdate = await Household.findByPk(req.params.householdId);

  if (!householdToUpdate) {
    const err = new Error("Household couldn't be found");
    err.status = 404;
    return next(err);
  }

  if (
    (typeof name !== "string" && name !== undefined) ||
    name.length > 60 ||
    name === "" ||
    name === null
  ) {
    const err = new Error("Bad Request");
    err.errors = { name: "Household name must be less than 60 characters" };
    err.status = 400;
    return next(err);
  }


  if (name !== undefined) householdToUpdate.name = name;
  if (notes !== undefined) householdToUpdate.notes = notes;


  await householdToUpdate.save();

  res.json(householdToUpdate);
});


// ==================DELETE A HOUSEHOLD=============================

router.delete("/:householdId", requireAuth, async (req, res, next) => {
  const householdToDelete = await Household.findByPk(req.params.householdId);


  if (!householdToDelete) {
    const err = new Error("Household couldn't be found");
    err.status = 404;
    return next(err);
  }

  await householdToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});


// ===========================================================================

module.exports = router;
