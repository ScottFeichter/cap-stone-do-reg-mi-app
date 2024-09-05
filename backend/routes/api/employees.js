const express = require("express");
const { Op } = require("sequelize");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Employee } = require("../../db/models");

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ==================TEST ROUTES===============================================

router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello world from route api/employees/hello/world!");
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

// ==================GET ALL EMPLOYEES==============================
router.get("/", requireAuth, async (req, res, next) => {
  let employees = await Employee.findAll({
    attributes: [
      "id",
      "employeeDepartment_Id",
      "academicDepartment_Id",
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
      "ssn",
      "firstLang",
      "secondLang",
      "thirdLang",
      "firstInst",
      "secondInst",
      "thirdInst",
      "primaryTitle",
      "primaryStartDate",
      "primaryEndDate",
      "primaryPayRate",
      "secondaryTitle",
      "secondaryStartDate",
      "secondaryEndDate",
      "secondaryPayRate",
      "tertiaryTitle",
      "tertiaryStartDate",
      "tertiaryEndDate",
      "tertiaryPayRate",
      "quarternaryTitle",
      "quarternaryStartDate",
      "quarternaryEndDate",
      "quarternaryPayRate",
      "biography",
      "notes",
      "createdAt",
      "updatedAt",
    ],
    // ...pagination,
  });

  return res.json({ employees /* page, size */ });
});

// ==================GET A EMPLOYEE BY ID =========================
router.get("/:employeeId", async (req, res, next) => {
  const employee = await Employee.findByPk(req.params.employeeId, {
    attributes: [
      "id",
      "employeeDepartment_Id",
      "academicDepartment_Id",
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
      "ssn",
      "firstLang",
      "secondLang",
      "thirdLang",
      "firstInst",
      "secondInst",
      "thirdInst",
      "primaryTitle",
      "primaryStartDate",
      "primaryEndDate",
      "primaryPayRate",
      "secondaryTitle",
      "secondaryStartDate",
      "secondaryEndDate",
      "secondaryPayRate",
      "tertiaryTitle",
      "tertiaryStartDate",
      "tertiaryEndDate",
      "tertiaryPayRate",
      "quarternaryTitle",
      "quarternaryStartDate",
      "quarternaryEndDate",
      "quarternaryPayRate",
      "biography",
      "notes",
      "createdAt",
      "updatedAt",
    ],
  });

  // console.log('EMPLOYEE================================', employee)

  if (!employee) {
    const err = new Error("Employee couldn't be found.");
    err.status = 404;
    return next(err);
  }

  res.json(employee);
  return
});

// ==================CREATE A EMPLOYEE=============================

router.post("/", requireAuth, async (req, res, next) => {
  const {
    employeeDepartment_Id,
    academicDepartment_Id,
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
    ssn,
    firstLang,
    secondLang,
    thirdLang,
    firstInst,
    secondInst,
    thirdInst,
    primaryTitle,
    primaryStartDate,
    primaryEndDate,
    primaryPayRate,
    secondaryTitle,
    secondaryStartDate,
    secondaryEndDate,
    secondaryPayRate,
    tertiaryTitle,
    tertiaryStartDate,
    tertiaryEndDate,
    tertiaryPayRate,
    quarternaryTitle,
    quarternaryStartDate,
    quarternaryEndDate,
    quarternaryPayRate,
    biography,
    notes,
  } = req.body;

  const exists = await Employee.findAll({
    where: [{ ssn: ssn }],
  });

  // console.log("exists ===============================================: ", exists)

  if (exists.length !== 0) {
    const err = new Error("Employee already exists.");
    err.status = 409;
    next(err);
  } else {
    const nuEmployee = await Employee.build({
      employeeDepartment_Id: employeeDepartment_Id,
      academicDepartment_Id: academicDepartment_Id,
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
      ssn: ssn,
      firstLang: firstLang,
      secondLang: secondLang,
      thirdLang: thirdLang,
      firstInst: firstInst,
      secondInst: secondInst,
      thirdInst: thirdInst,
      primaryTitle: primaryTitle,
      primaryStartDate: primaryStartDate,
      primaryEndDate: primaryEndDate,
      primaryPayRate: primaryPayRate,
      secondaryTitle: secondaryTitle,
      secondaryStartDate: secondaryStartDate,
      secondaryEndDate: secondaryEndDate,
      secondaryPayRate: secondaryPayRate,
      tertiaryTitle: tertiaryTitle,
      tertiaryStartDate: tertiaryStartDate,
      tertiaryEndDate: tertiaryEndDate,
      tertiaryPayRate: tertiaryPayRate,
      quarternaryTitle: quarternaryTitle,
      quarternaryStartDate: quarternaryStartDate,
      quarternaryEndDate: quarternaryEndDate,
      quarternaryPayRate: quarternaryPayRate,
      biography: biography,
      notes: notes,
    });

    await nuEmployee.validate();
    await nuEmployee.save();
  }

  const nuEmployeeFromDB = await Employee.findAll({
    where: [{ ssn: ssn }],
  });

  return res.status(201).json(nuEmployeeFromDB);
});

// ==================EDIT A EMPLOYEE===============================

router.put("/:employeeId", requireAuth, async (req, res, next) => {
  const employeeId = req.params.employeeId;
  const employeeToUpdate = await Employee.findByPk(req.params.employeeId);
  const {
    employeeDepartment_Id,
    academicDepartment_Id,
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
    ssn,
    firstLang,
    secondLang,
    thirdLang,
    firstInst,
    secondInst,
    thirdInst,
    primaryTitle,
    primaryStartDate,
    primaryEndDate,
    primaryPayRate,
    secondaryTitle,
    secondaryStartDate,
    secondaryEndDate,
    secondaryPayRate,
    tertiaryTitle,
    tertiaryStartDate,
    tertiaryEndDate,
    tertiaryPayRate,
    quarternaryTitle,
    quarternaryStartDate,
    quarternaryEndDate,
    quarternaryPayRate,
    biography,
    notes,
  } = req.body;

  if (!employeeToUpdate) {
    const err = new Error("Employee couldn't be found");
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

  if (employeeDepartment_Id !== undefined || employeeDepartment_Id !== null) employeeToUpdate.employeeDepartment_Id = employeeDepartment_Id;
  if (academicDepartment_Id !== undefined || academicDepartment_Id !== null) employeeToUpdate.academicDepartment_Id = academicDepartment_Id;
  if (userType_Id !== undefined || userType_Id !== null) employeeToUpdate.userType_Id = userType_Id;
  if (firstName1 !== undefined || firstName1 !== null) employeeToUpdate.firstName1 = firstName1;
  if (firstName2 !== undefined || firstName2 !== null) employeeToUpdate.firstName2 = firstName2;
  if (middleName !== undefined || middleName !== null) employeeToUpdate.middleName = middleName;
  if (lastName1 !== undefined || lastName1 !== null) employeeToUpdate.lastName1 = lastName1;
  if (lastName2 !== undefined || lastName2 !== null) employeeToUpdate.lastName2 = lastName2;
  if (personalEmail !== undefined || personalEmail !== null) employeeToUpdate.personalEmail = personalEmail;
  if (personalPhone !== undefined || personalPhone !== null) employeeToUpdate.personalPhone = personalPhone;
  if (street !== undefined || street !== null) employeeToUpdate.street = street;
  if (city !== undefined || city !== null) employeeToUpdate.city = city;
  if (state !== undefined || state !== null) employeeToUpdate.state = state;
  if (city !== undefined || city !== null) employeeToUpdate.city = city;
  if (state !== undefined || state !== null) employeeToUpdate.state = state;
  if (zip !== undefined || zip !== null) employeeToUpdate.zip = zip;
  if (dob !== undefined || dob !== null) employeeToUpdate.dob = dob;
  if (age !== undefined || age !== null) employeeToUpdate.age = age;
  if (ssn !== undefined || ssn !== null) employeeToUpdate.ssn = ssn;
  if (firstLang !== undefined || firstLang !== null) employeeToUpdate.firstLang = firstLang;
  if (secondLang !== undefined || secondLang !== null) employeeToUpdate.secondLang = secondLang;
  if (thirdLang !== undefined || thirdLang !== null) employeeToUpdate.thirdLang = thirdLang;
  if (firstInst !== undefined || firstInst !== null) employeeToUpdate.firstInst = firstInst;
  if (secondInst !== undefined || secondInst !== null) employeeToUpdate.secondInst = secondInst;
  if (thirdInst !== undefined || thirdInst !== null) employeeToUpdate.thirdInst = thirdInst;
  if (primaryTitle !== undefined || primaryTitle !== null) employeeToUpdate.primaryTitle = primaryTitle;
  if (primaryStartDate !== undefined || primaryStartDate !== null) employeeToUpdate.primaryStartDate = primaryStartDate;
  if (primaryEndDate !== undefined || primaryEndDate !== null) employeeToUpdate.primaryEndDate = primaryEndDate;
  if (primaryPayRate !== undefined || primaryPayRate !== null) employeeToUpdate.primaryPayRate = primaryPayRate;
  if (secondaryTitle !== undefined || secondaryTitle !== null) employeeToUpdate.secondaryTitle = secondaryTitle;
  if (secondaryStartDate !== undefined || secondaryStartDate !== null) employeeToUpdate.secondaryStartDate = secondaryStartDate;
  if (secondaryEndDate !== undefined || secondaryEndDate !== null) employeeToUpdate.secondaryEndDate = secondaryEndDate;
  if (secondaryPayRate !== undefined || secondaryPayRate !== null) employeeToUpdate.secondaryPayRate = secondaryPayRate;
  if (tertiaryTitle !== undefined || tertiaryTitle !== null) employeeToUpdate.tertiaryTitle = tertiaryTitle;
  if (tertiaryStartDate !== undefined || tertiaryStartDate !== null) employeeToUpdate.tertiaryStartDate = tertiaryStartDate;
  if (tertiaryEndDate !== undefined || tertiaryEndDate !== null) employeeToUpdate.tertiaryEndDate = tertiaryEndDate;
  if (tertiaryPayRate !== undefined || tertiaryPayRate !== null) employeeToUpdate.tertiaryPayRate = tertiaryPayRate;
  if (quarternaryTitle !== undefined || quarternaryTitle !== null) employeeToUpdate.quarternaryTitle = quarternaryTitle;
  if (quarternaryStartDate !== undefined || quarternaryStartDate !== null) employeeToUpdate.quarternaryStartDate = quarternaryStartDate;
  if (quarternaryEndDate !== undefined || quarternaryEndDate !== null) employeeToUpdate.quarternaryEndDate = quarternaryEndDate;
  if (quarternaryPayRate !== undefined || quarternaryPayRate !== null) employeeToUpdate.quarternaryPayRate = quarternaryPayRate;
  if (biography !== undefined || biography !== null) employeeToUpdate.biography = biography;
  if (notes !== undefined || notes !== null) employeeToUpdate.notes = notes;


  await employeeToUpdate.save();

  res.json(employeeToUpdate);
});

// ==================DELETE A EMPLOYEE=============================

router.delete("/:employeeId", requireAuth, async (req, res, next) => {
  const employeeToDelete = await Employee.findByPk(req.params.employeeId);

  if (!employeeToDelete) {
    const err = new Error("Employee couldn't be found");
    err.status = 404;
    return next(err);
  }

  await employeeToDelete.destroy();
  res.json({ message: "Successfully Deleted" });
});

// ===========================================================================

module.exports = router;
