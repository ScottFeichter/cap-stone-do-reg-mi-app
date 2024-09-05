'use strict';

const { EmployeeDepartment } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await EmployeeDepartment.bulkCreate([
      {
        name: 'Principles',
        imageURL: null,
      },
      {
        name: 'Registrars',
        imageURL: null,
      },
      {
        name: 'Teachers',
        imageURL: null,
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'EmployeeDepartments';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Principles', 'Registrars', 'Teachers'] }
    }, {});
  }
};
