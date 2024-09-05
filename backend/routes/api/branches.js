const express = require("express");
const { Op } = require("sequelize");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Branch } = require("../../db/models");

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello world from route api/branches/hello/world!");
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

// ==================GET ALL BRANCHES==============================
router.get("/", requireAuth, async (req, res, next) => {
  let branches = await Branch.findAll({
    attributes: [
      "id",
      "name",
      "street",
      "city",
      "state",
      "zip",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ branches /* page, size */ });
});

// ==================GET A BRANCH BY ID =========================
router.get("/:branchId", async (req, res, next) => {
  const branch = await Branch.findByPk(req.params.branchId, {
    attributes: [
      "id",
      "name",
      "street",
      "city",
      "state",
      "zip",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!branch) {
    const err = new Error("Branch couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(branch);
});

// ==================CREATE A BRANCH=============================

router.post("/", requireAuth, async (req, res, next) => {
  const { name, street, city, state, zip } = req.body;

  const exists = await Branch.findAll({
    where: [{ name: name }],
  });

  if (exists.length) {
    const err = new Error("Branch already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuBranch = await Branch.build({
      name: name,
      street: street,
      city: city,
      state: state,
      zip: zip,
    });

    await nuBranch.validate();
    await nuBranch.save();
  }

  const nuBranchFromDB = await Branch.findAll({
    where: [{ name: name }],
  });

  return res.status(201).json(nuBranchFromDB);
});

// ==================EDIT A BRANCH===============================

router.put("/:branchId", requireAuth, async (req, res, next) => {
  const { name, street, city, state, zip } = req.body;
  const branchId = req.params.branchId;

  const branchToUpdate = await Branch.findByPk(req.params.branchId);

  if (!branchToUpdate) {
    const err = new Error("Branch couldn't be found");
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

  if (name !== undefined) branchToUpdate.name = name;
  if (street !== undefined) branchToUpdate.street = street;
  if (city !== undefined) branchToUpdate.city = city;
  if (state !== undefined) branchToUpdate.state = state;
  if (zip !== undefined) branchToUpdate.zip = zip;

  await branchToUpdate.save();

  res.json(branchToUpdate);
});

// ==================DELETE A BRANCH=============================

router.delete("/:branchId", requireAuth, async (req, res, next) => {
  const branchToDelete = await Branch.findByPk(req.params.branchId);

  if (!branchToDelete) {
    const err = new Error("Branch couldn't be found");
    err.status = 404;
    return next(err);
  }

  await branchToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});

// ===========================================================================

module.exports = router;
