'use strict';

const { Facility } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Facility.bulkCreate(
      [
        {
          name: 'Online',
          branch_Id: 1,
          capacity: 99,
        },
        {
          name: 'Auditorium',
          branch_Id: 2,
          capacity: 300,
        },
        {
          name: 'Room 1',
          branch_Id: 2,
          capacity: 3,
        },
      ],
      { validate: true }
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Facilities';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: { [Op.in]: ['Online', 'Auditorium', 'Room 1'] },
      },
      {}
    );

  },
};
