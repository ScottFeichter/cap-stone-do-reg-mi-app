'use strict';

const { AcademicDepartment } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await AcademicDepartment.bulkCreate([
      {
        name: 'Voice',
        chair: 'Mariah Carey',
        imageURL: null,
      },
      {
        name: 'Bowed Strings',
        chair: 'Yoyo Ma',
        imageURL: null,
      },
      {
        name: 'Plucked Strings',
        chair: 'Jimmy Hendrix',
        imageURL: null,
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'AcademicDepartments';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Voice', 'Bowed Strings', 'Plucked Strings'] }
    }, {});
  }
};
