'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Household extends Model {
    static assocate(models) {
      // define association here
      // Household.hasMany(models.Student, {
      //   foreignKey: 'household_Id',
      //   // onDelete: 'CASCADE',
      //   // hooks: true
      // });
    }
  }
  Household.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      unique: false,
      type: DataTypes.STRING
    },
    notes: {
      allowNull: true,
      unique: false,
      type: DataTypes.TEXT
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Household',
  });
  return Household;
};
