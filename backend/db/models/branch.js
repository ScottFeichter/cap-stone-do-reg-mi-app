'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Branch.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      street: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING,
      },
      zip: {
        allowNull: false,
        unique: false,
        type: DataTypes.INTEGER,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Branch',
    }
  );
  return Branch;
};
