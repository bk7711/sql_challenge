const { Patient } = require("../models");

const patientData = [
  {
    patient_name: " Sarah Smith",
    patient_email: "ssmith@test.com",
  },
  {
    patient_name: "James Ellis",
    patient_email: "james.ellis@test.com",
  },
];

const seedPatient = () => Patient.bulkCreate(patientData, {});

module.exports = seedPatient;
