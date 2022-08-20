const { Model, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/connection.js");

class Doctor extends Model {}

Doctor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    doctor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doctor_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "doctor",
  }
);

module.exports = Doctor;
