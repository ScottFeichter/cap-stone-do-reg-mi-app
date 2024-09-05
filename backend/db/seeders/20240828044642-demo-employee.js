'use strict';

const { Employee } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Employee.bulkCreate(
      [
        // ============================ SEED 1: =====================================
        {
          employeeDepartment_Id: 3,
          academicDepartment_Id: 1,
          level_Id: 3,
          firstName1: 'Juliette',
          firstName2: 'Nadia',
          middleName: null,
          lastName1: 'Boulanger',
          lastName2: null,
          personalEmail: 'nadia@aa.io',
          personalPhone: '555-555-5555',
          street: '44 Champs Elysess',
          city: 'San Francisco',
          state: 'CA',
          zip: 94123,
          dob: '09/16/1887',
          age: 135,
          ssn: '123-45-7891',
          firstLang: 'French',
          secondLang: 'Russian',
          thirdLang: 'English',
          firstInst: 'piano',
          secondInst: 'voice',
          thirdInst: 'cello',
          primaryTitle: 'Teacher',
          primaryStartDate: '01/01/2010',
          primaryEndDate: null,
          primaryPayRate: 1000,
          secondaryTitle: null,
          secondaryStartDate: null,
          secondaryEndDate: null,
          secondaryPayRate: null,
          tertiaryTitle: null,
          tertiaryStartDate: null,
          tertiaryEndDate: null,
          tertiaryPayRate: null,
          quarternaryTitle: null,
          quarternaryStartDate: null,
          quarternaryEndDate: null,
          quarternaryPayRate: null,
          biography: 'A seasoned veteran her resume speaks for itself',
          notes: 'Fiesty and with a sharp whit',
        },
        // ============================ SEED 2: =====================================
        {
          employeeDepartment_Id: 1,
          academicDepartment_Id: null,
          level_Id: null,
          firstName1: 'Fred',
          firstName2: null,
          middleName: null,
          lastName1: 'Fipel',
          lastName2: null,
          personalEmail: 'fredFipel@aa.io',
          personalPhone: '555-555-5555',
          street: '111 First St',
          city: 'San Francisco',
          state: 'CA',
          zip: 94123,
          dob: '01/01/1975',
          age: 49,
          ssn: '123-45-9876',
          firstLang: 'English',
          secondLang: null,
          thirdLang: null,
          firstInst: null,
          secondInst: null,
          thirdInst: null,
          primaryTitle: 'Maintenence Tech',
          primaryStartDate: '01/01/2010',
          primaryEndDate: null,
          primaryPayRate: 25,
          secondaryTitle: null,
          secondaryStartDate: null,
          secondaryEndDate: null,
          secondaryPayRate: null,
          tertiaryTitle: null,
          tertiaryStartDate: null,
          tertiaryEndDate: null,
          tertiaryPayRate: null,
          quarternaryTitle: null,
          quarternaryStartDate: null,
          quarternaryEndDate: null,
          quarternaryPayRate: null,
          biography: 'Excellent with a wrench and hvac experience',
          notes:
            'He typically departs 30 min early on wednesdays to take care of his mother',
        },

        // ============================ SEED 3: =====================================
        {
          employeeDepartment_Id: 2,
          academicDepartment_Id: null,
          level_Id: 1,
          firstName1: 'Buffy',
          firstName2: null,
          middleName: 'Anne',
          lastName1: 'Summers',
          lastName2: null,
          personalEmail: 'buffVslayer@aa.io',
          personalPhone: '555-555-5555',
          street: '1234 Joan St',
          city: 'San Francisco',
          state: 'CA',
          zip: '94123',
          dob: '01/19/1981',
          age: 42,
          ssn: '123-45-6767',
          firstLang: 'English',
          secondLang: null,
          thirdLang: null,
          firstInst: 'Voice',
          secondInst: 'Flute',
          thirdInst: 'Piano',
          primaryTitle: 'Registrar',
          primaryStartDate: '01/01/2010',
          primaryEndDate: null,
          primaryPayRate: 200,
          secondaryTitle: null,
          secondaryStartDate: null,
          secondaryEndDate: null,
          secondaryPayRate: null,
          tertiaryTitle: null,
          tertiaryStartDate: null,
          tertiaryEndDate: null,
          tertiaryPayRate: null,
          quarternaryTitle: null,
          quarternaryStartDate: null,
          quarternaryEndDate: null,
          quarternaryPayRate: null,
          biography: 'Great with an oak stake, brave, very dilligent',
          notes: 'Originally from LA',
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Employees';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        ssn: { [Op.in]: ['123-45-7891', '123-45-9876', '123-45-6767'] },
      },
      {}
    );
  },
};
