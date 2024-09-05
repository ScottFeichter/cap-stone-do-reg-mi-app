'use strict';
const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AcademicDepartment extends Model {
    static associate(models) {
      // define association here
      // AcademicDepartment.hasMany(models.Employee, {
      //   foreignKey: 'academicDepartment_Id',
      //   // onDelete: 'CASCADE',
      //   // hooks: true
      // });
    }
  }
  AcademicDepartment.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chair: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'AcademicDepartment',
    }
  );
  return AcademicDepartment;
};
