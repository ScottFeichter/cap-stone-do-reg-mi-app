'use strict';

const { Student } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Student.bulkCreate(
      [
        // ============================ SEED 1: =====================================
        {
          household_Id: 1,
          headOfHousehold: false,
          level_Id: 5,
          firstName1: 'Ferris',
          firstName2: null,
          middleName: 'Matthew',
          lastName1: 'Bueller',
          lastName2: null,
          personalEmail: 'saveFerris@aa.io',
          personalPhone: '555-555-5555',
          street: '434 Ben Rose Way',
          city: 'Highland Park',
          state: 'IL',
          zip: 75205,
          dob: '03/21/1962',
          age: 17,
          firstLang: 'English',
          secondLang: 'French',
          thirdLang: null,
          firstInst: 'Clarinet',
          secondInst: 'Keyboard',
          thirdInst: null,
          yearlyIncome: null,
          biography: 'Prone to illness he misses class often',
          notes: 'Sister more in to dancing',
        },
        // ============================ SEED 2: =====================================
        {
          household_Id: 2,
          headOfHousehold: false,
          level_Id: 5,
          firstName1: 'Wednesday',
          firstName2: null,
          middleName: 'Christina',
          lastName1: 'Addams',
          lastName2: null,
          personalEmail: 'blackDarkness@aa.io',
          personalPhone: '555-555-5555',
          street: '666 Cemetary Ridge',
          city: 'Bermuda Triangle',
          state: 'MA',
          zip: 11616,
          dob: '08/26/1944',
          age: 6,
          firstLang: 'English',
          secondLang: 'French',
          thirdLang: null,
          firstInst: 'Tuba',
          secondInst: 'Basoon',
          thirdInst: null,
          yearlyIncome: null,
          biography: 'Fondness for spiders',
          notes: 'Macabre but harmless',
        },

        // ============================ SEED 3: =====================================
        {
          household_Id: 3,
          headOfHousehold: false,
          level_Id: 5,
          firstName1: 'Ronald',
          firstName2: null,
          middleName: 'Bilius',
          lastName1: 'Weasley',
          lastName2: null,
          personalEmail: 'ron.weasley@aa.io',
          personalPhone: '555-555-5555',
          street: '1414 Burrow Place',
          city: 'Devon',
          state: 'TX',
          zip: 60523,
          dob: '01/01/1999',
          age: 25,
          firstLang: 'English',
          secondLang: 'Serpent',
          thirdLang: null,
          firstInst: 'Conductor',
          secondInst: 'Drums',
          thirdInst: null,
          yearlyIncome: null,
          biography: 'He works his magic with the conductor wand',
          notes: 'Married to Hermione',
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Students';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        firstName1: { [Op.in]: ['Ferris', 'Wednesday', 'Ronald'] },
      },
      {}
    );
  },
};
