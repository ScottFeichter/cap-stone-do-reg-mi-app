const express = require("express");
const { Op } = require("sequelize");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Facility } = require("../../db/models");

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello world from route api/facilities/hello/world!");
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
};

// ==================GET ALL FACILITIES==============================
router.get("/", requireAuth, async (req, res, next) => {
  let facilities = await Facility.findAll({
    attributes: [
      "id",
      "name",
      "branch_Id",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ facilities /* page, size */ });
});

// ==================GET A FACILITY BY ID =========================
router.get("/:facilityId", async (req, res, next) => {
  const facility = await Facility.findByPk(req.params.facilityId, {
    attributes: [
      "id",
      "name",
      "branch_Id",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!facility) {
    const err = new Error("Facility couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(facility);
});

// ==================CREATE A FACILITY=============================

router.post("/", requireAuth, async (req, res, next) => {
  const { name, branch_Id } = req.body;

  const exists = await Facility.findAll({
    where: [{ name: name }],
  });

  if (exists.length) {
    const err = new Error("Facility already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuFacility = await Facility.build({
      name: name,
      branch_Id: branch_Id,
    });

    await nuFacility.validate();
    await nuFacility.save();
  }

  const nuFacilityFromDB = await Facility.findAll({
    where: [{ name: name }],
  });

  return res.status(201).json(nuFacilityFromDB);
});

// ==================EDIT A FACILITY===============================

router.put("/:facilityId", requireAuth, async (req, res, next) => {
  const { name, branch_Id, city, state, zip } = req.body;
  const facilityId = req.params.facilityId;

  const facilityToUpdate = await Facility.findByPk(req.params.facilityId);

  if (!facilityToUpdate) {
    const err = new Error("Facility couldn't be found");
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
    err.errors = { name: "Type must be less than 30 characters" };
    err.status = 400;
    return next(err);
  }

  if (name !== undefined) facilityToUpdate.name = name;
  if (branch_Id !== undefined) facilityToUpdate.branch_Id = branch_Id;

  await facilityToUpdate.save();

  res.json(facilityToUpdate);
});

// ==================DELETE A FACILITY=============================

router.delete("/:facilityId", requireAuth, async (req, res, next) => {
  const facilityToDelete = await Facility.findByPk(req.params.facilityId);

  if (!facilityToDelete) {
    const err = new Error("Facility couldn't be found");
    err.status = 404;
    return next(err);
  }

  await facilityToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});

// ===========================================================================

module.exports = router;
