'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      household_Id: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Households',
          key: 'id',
        },
        // onDelete: 'CASCADE'
      },
      headOfHousehold: {
        allowNull: false,
        unique: false,
        type: Sequelize.BOOLEAN
      },
      level_Id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Levels',
          key: 'id',
        },
        // onDelete: 'CASCADE'
      },
      firstName1: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING
      },
      firstName2: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      middleName: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      lastName1: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      lastName2: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      personalEmail: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      personalPhone: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      street: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      zip: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER
      },
      dob: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      age: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER
      },
      firstLang: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING
      },
      secondLang: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      thirdLang: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      firstInst: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      secondInst: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      thirdInst: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      yearlyIncome: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER
      },
      biography: {
        allowNull: true,
        unique: false,
        type: Sequelize.TEXT
      },
      notes: {
        allowNull: true,
        unique: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Students';
    await queryInterface.dropTable(options);
  }
};
