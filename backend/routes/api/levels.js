
const express = require('express');
const { Op } = require('sequelize');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Level } = require("../../db/models");


// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello world from route api/levels/hello/world!');
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


// ==================GET ALL LEVELS==============================
router.get("/", requireAuth, async (req, res, next) => {


  let levels = await Level.findAll({
    attributes: [
      "id",
      "type",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ levels, /* page, size */ });

});

// ==================GET A LEVEL BY ID =========================
router.get("/:levelId", async (req, res, next) => {
  const level = await Level.findByPk(req.params.levelId, {
    attributes: [
      "id",
      "type",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!level) {
    const err = new Error("User Type couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(level);
});


// ==================CREATE A LEVEL=============================

router.post("/", requireAuth, async (req, res, next) => {

  const { type } = req.body;


  const exists = await Level.findAll({
    where: [
      { type: type },
    ],
  });

  if (exists.length) {
    const err = new Error("User Type already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuLevel = await Level.build({
      type: type,
    });

    await nuLevel.validate();
    await nuLevel.save();
  }

  const nuLevelFromDB = await Level.findAll({
    where: [
      { type: type },
    ],
  });


  return  res.status(201).json(nuLevelFromDB);


});



// ==================EDIT A LEVEL===============================


router.put("/:levelId", requireAuth, async (req, res, next) => {
  const { type } = req.body;
  const levelId = req.params.levelId;

  const levelToUpdate = await Level.findByPk(req.params.levelId);

  if (!levelToUpdate) {
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


  if (type !== undefined) levelToUpdate.type = type;


  await levelToUpdate.save();

  res.json(levelToUpdate);
});


// ==================DELETE A LEVEL=============================

router.delete("/:levelId", requireAuth, async (req, res, next) => {
  const levelToDelete = await Level.findByPk(req.params.levelId);


  if (!levelToDelete) {
    const err = new Error("User Type couldn't be found");
    err.status = 404;
    return next(err);
  }

  await levelToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});


// ===========================================================================

module.exports = router;
