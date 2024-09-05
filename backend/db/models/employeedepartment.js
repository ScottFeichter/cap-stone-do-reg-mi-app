'use strict';
const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeDepartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // EmployeeDepartment.hasMany(models.Employee, {
      //   foreignKey: 'employeeDepartment_Id',
      //   // onDelete: 'CASCADE',
      //   // hooks: true
      // });
    }
  }
  EmployeeDepartment.init(
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
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'EmployeeDepartment',
    }
  );
  return EmployeeDepartment;
};
