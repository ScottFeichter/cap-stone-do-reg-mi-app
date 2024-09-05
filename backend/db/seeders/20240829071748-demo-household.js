'use strict';

const { Household } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Household.bulkCreate(
      [
        {
          name: 'Tom Bueller Household',
          notes: 'Tom husband, Katie wife, Jeanie daughter, Ferris son',
        },
        {
          name: 'Gomez Addams Household',
          notes: 'Gomez husband, Morticia wife, Wednesday daughter, Pugsley son, Fester uncle',
        },
        {
          name: 'Arthur Weasley Household',
          notes: 'Arthur husband, Molly wife, Bill son, Charlie son, Percy son, Fred son, George son, Ron son, Ginny daughter, Hermione daughter-in-law',
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Households';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: { [Op.in]: ['Tom Bueller Household', 'Gomez Addams Household', 'Arthur Weasley Household'] },
      },
      {}
    );
  },
};
