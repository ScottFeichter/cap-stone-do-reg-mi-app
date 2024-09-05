'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      // define association here
      // Student.belongsTo(models.Household, {
      //   foreignKey: 'household_Id',
      //   // as: ''
      // });
      // Student.belongsTo(models.Level, {
      //   foreignKey: 'level_Id',
      //   constraints: false
      //   // as: ''
      // });
    }
  }
  Student.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      household_Id: {
        allowNull: true,
        unique: false,
        type: DataTypes.INTEGER,
      },
      headOfHousehold: {
        allowNull: false,
        unique: false,
        type: DataTypes.BOOLEAN,
      },
      level_Id: {
        allowNull: true,
        unique: false,
        type: DataTypes.INTEGER,
      },
      firstName: { allowNull: false, unique: false, type: DataTypes.STRING },
      nickName: { allowNull: true, unique: false, type: DataTypes.STRING },
      middleName: { allowNull: true, unique: false, type: DataTypes.STRING },
      lastName: { allowNull: true, unique: false, type: DataTypes.STRING },
      familyName: { allowNull: true, unique: false, type: DataTypes.STRING },
      email: { allowNull: true, unique: false, type: DataTypes.STRING },
      phone: { allowNull: true, unique: false, type: DataTypes.STRING },
      street: { allowNull: true, unique: false, type: DataTypes.STRING },
      city: { allowNull: true, unique: false, type: DataTypes.STRING },
      state: { allowNull: true, unique: false, type: DataTypes.STRING },
      zip: { allowNull: true, unique: false, type: DataTypes.STRING },
      dob: { allowNull: true, unique: false, type: DataTypes.STRING },
      firstLang: { allowNull: false, unique: false, type: DataTypes.STRING },
      secondLang: { allowNull: true, unique: false, type: DataTypes.STRING },
      thirdLang: { allowNull: true, unique: false, type: DataTypes.STRING },
      firstInst: { allowNull: true, unique: false, type: DataTypes.STRING },
      secondInst: { allowNull: true, unique: false, type: DataTypes.STRING },
      thirdInst: { allowNull: true, unique: false, type: DataTypes.STRING },
      yearlyIncome: { allowNull: true, unique: false, type: DataTypes.INTEGER },
      biography: { allowNull: true, unique: false, type: DataTypes.TEXT },
      notes: { allowNull: true, unique: false, type: DataTypes.TEXT },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
