//import models

const Patient = require("./Patient");
const Doctor = require("./Doctor");
const Appointments = require("./Appointments");

//Doctor has many Patients
Doctor.hasMany(Patient, {
  foreignKey: "patient_id",
});

//A patient can have many doctors
Patient.hasMany(Doctor, {
  foreignKey: "id",
});

//A doctor can have many appointments
Doctor.hasMany(Appointments, {
  foreignKey: "id",
});

//An appointment belongs to a doctor
Appointments.belongsTo(Doctor, {
  foreignKey: "id",
});

//A patient can have many appointments
Patient.hasMany(Appointments, {
  foreignKey: "id",
});

//An appointment belongs to a patient
Appointments.belongsTo(Patient, {
  foreignKey: "id",
});

module.exports = { Doctor, Appointments, Patient };
// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
