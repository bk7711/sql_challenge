const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Patient extends Model {}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    patient_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patient_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "doctor",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "patient",
  }
);

module.exports = Patient;
