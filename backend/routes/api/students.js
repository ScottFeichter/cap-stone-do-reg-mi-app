const express = require("express");
const { Op } = require("sequelize");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Student } = require("../../db/models");

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello world from route api/students/hello/world!");
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

// ==================GET ALL STUDENTS==============================
router.get("/", requireAuth, async (req, res, next) => {
  let students = await Student.findAll({
    attributes: [
      "id",
      "household_Id",
      "headOfHousehold",
      "userType_Id",
      "firstName1",
      "firstName2",
      "middleName",
      "lastName1",
      "lastName2",
      "personalEmail",
      "personalPhone",
      "street",
      "city",
      "state",
      "zip",
      "dob",
      "age",
      "firstLang",
      "secondLang",
      "thirdLang",
      "firstInst",
      "secondInst",
      "thirdInst",
      "yearlyIncome",
      "biography",
      "notes",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ students /* page, size */ });
});

// ==================GET A STUDENT BY ID =========================
router.get("/:studentId", async (req, res, next) => {
  const student = await Student.findByPk(req.params.studentId, {
    attributes: [
      "id",
      "household_Id",
      "headOfHousehold",
      "userType_Id",
      "firstName1",
      "firstName2",
      "middleName",
      "lastName1",
      "lastName2",
      "personalEmail",
      "personalPhone",
      "street",
      "city",
      "state",
      "zip",
      "dob",
      "age",
      "firstLang",
      "secondLang",
      "thirdLang",
      "firstInst",
      "secondInst",
      "thirdInst",
      "yearlyIncome",
      "biography",
      "notes",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!student) {
    const err = new Error("Student couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(student);
});

// ==================CREATE A STUDENT=============================

router.post("/", requireAuth, async (req, res, next) => {
  const {
    household_Id,
    headOfHousehold,
    userType_Id,
    firstName1,
    firstName2,
    middleName,
    lastName1,
    lastName2,
    personalEmail,
    personalPhone,
    street,
    city,
    state,
    zip,
    dob,
    age,
    firstLang,
    secondLang,
    thirdLang,
    firstInst,
    secondInst,
    thirdInst,
    yearlyIncome,
    biography,
    notes,
  } = req.body;

  const exists = await Student.findAll({
    where: [{ dob: dob }, { lastName1: lastName1 }, { lastName2: lastName2 }],
  });

  // console.log(
  //   "exists ===============================================: ",
  //   exists
  // );

  if (exists.length !== 0) {
    const err = new Error("Student already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuStudent = await Student.build({
      household_Id: household_Id,
      headOfHousehold: headOfHousehold,
      userType_Id: userType_Id,
      firstName1: firstName1,
      firstName2: firstName2,
      middleName: middleName,
      lastName1: lastName1,
      lastName2: lastName2,
      personalEmail: personalEmail,
      personalPhone: personalPhone,
      street: street,
      city: city,
      state: state,
      zip: zip,
      dob: dob,
      age: age,
      firstLang: firstLang,
      secondLang: secondLang,
      thirdLang: thirdLang,
      firstInst: firstInst,
      secondInst: secondInst,
      thirdInst: thirdInst,
      yearlyIncome: yearlyIncome,
      biography: biography,
      notes: notes,
    });

    await nuStudent.validate();
    await nuStudent.save();
  }

  const nuStudentFromDB = await Student.findAll({
    where: [{ firstName1: firstName1 }, { lastName1: lastName1 }, { personalEmail: personalEmail }],
  });

  return res.status(201).json(nuStudentFromDB);
});

// ==================EDIT A STUDENT===============================

router.put("/:studentId", requireAuth, async (req, res, next) => {
  const studentId = req.params.studentId;
  const studentToUpdate = await Student.findByPk(req.params.studentId);
  const {
    household_Id,
    headOfHousehold,
    userType_Id,
    firstName1,
    firstName2,
    middleName,
    lastName1,
    lastName2,
    personalEmail,
    personalPhone,
    street,
    city,
    state,
    zip,
    dob,
    age,
    firstLang,
    secondLang,
    thirdLang,
    firstInst,
    secondInst,
    thirdInst,
    yearlyIncome,
    biography,
    notes,
  } = req.body;

  if (!studentToUpdate) {
    const err = new Error("Student couldn't be found");
    err.status = 404;
    return next(err);
  }

  // if (
  //   (typeof type !== "string" && type !== undefined) ||
  //   type.length > 30 ||
  //   type === "" ||
  //   type === null
  // ) {
  //   const err = new Error("Bad Request");
  //   err.errors = { type: "Type must be less than 30 characters" };
  //   err.status = 400;
  //   return next(err);
  // }

  if (household_Id !== undefined || household_Id !== null)
    studentToUpdate.household_Id = household_Id;
  if (headOfHousehold !== undefined || headOfHousehold !== null)
    studentToUpdate.headOfHousehold = headOfHousehold;
  if (userType_Id !== undefined || userType_Id !== null)
    studentToUpdate.userType_Id = userType_Id;
  if (firstName1 !== undefined || firstName1 !== null)
    studentToUpdate.firstName1 = firstName1;
  if (firstName2 !== undefined || firstName2 !== null)
    studentToUpdate.firstName2 = firstName2;
  if (middleName !== undefined || middleName !== null)
    studentToUpdate.middleName = middleName;
  if (lastName1 !== undefined || lastName1 !== null)
    studentToUpdate.lastName1 = lastName1;
  if (lastName2 !== undefined || lastName2 !== null)
    studentToUpdate.lastName2 = lastName2;
  if (personalEmail !== undefined || personalEmail !== null)
    studentToUpdate.personalEmail = personalEmail;
  if (personalPhone !== undefined || personalPhone !== null)
    studentToUpdate.personalPhone = personalPhone;
  if (street !== undefined || street !== null) studentToUpdate.street = street;
  if (city !== undefined || city !== null) studentToUpdate.city = city;
  if (state !== undefined || state !== null) studentToUpdate.state = state;
  if (city !== undefined || city !== null) studentToUpdate.city = city;
  if (state !== undefined || state !== null) studentToUpdate.state = state;
  if (zip !== undefined || zip !== null) studentToUpdate.zip = zip;
  if (dob !== undefined || dob !== null) studentToUpdate.dob = dob;
  if (age !== undefined || age !== null) studentToUpdate.age = age;
  if (firstLang !== undefined || firstLang !== null)
    studentToUpdate.firstLang = firstLang;
  if (secondLang !== undefined || secondLang !== null)
    studentToUpdate.secondLang = secondLang;
  if (thirdLang !== undefined || thirdLang !== null)
    studentToUpdate.thirdLang = thirdLang;
  if (firstInst !== undefined || firstInst !== null)
    studentToUpdate.firstInst = firstInst;
  if (secondInst !== undefined || secondInst !== null)
    studentToUpdate.secondInst = secondInst;
  if (thirdInst !== undefined || thirdInst !== null)
    studentToUpdate.thirdInst = thirdInst;
  if (yearlyIncome !== undefined || yearlyIncome !== null)
    studentToUpdate.yearlyIncome = yearlyIncome;
  if (biography !== undefined || biography !== null)
    studentToUpdate.biography = biography;
  if (notes !== undefined || notes !== null) studentToUpdate.notes = notes;

  await studentToUpdate.save();

  res.json(studentToUpdate);
});

// ==================DELETE A STUDENT=============================

router.delete("/:studentId", requireAuth, async (req, res, next) => {
  const studentToDelete = await Student.findByPk(req.params.studentId);

  if (!studentToDelete) {
    const err = new Error("Student couldn't be found");
    err.status = 404;
    return next(err);
  }

  await studentToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});

// ===========================================================================

module.exports = router;
