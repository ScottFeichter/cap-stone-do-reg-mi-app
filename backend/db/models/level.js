'use strict';
const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Level.hasMany(models.Employee, {
      //   foreignKey: 'level_Id',
      //   constraints: false
      //   // onDelete: 'CASCADE',
      //   // hooks: true
      // });
      // Level.hasMany(models.Student, {
      //   foreignKey: 'level_Id',
      //   constraints: false
      //   // onDelete: 'CASCADE',
      //   // hooks: true
      // });

    }
  }
  level.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Level',
    }
  );
  return level;
};
