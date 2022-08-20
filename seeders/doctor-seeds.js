const { Doctor } = require("../models");

const doctorData = [
  {
    doctor_name: " Dr. Samuel Sims",
    doctor_email: "samsims@test.com",
  },
  {
    doctor_name: "Dr. Kailan Harper",
    doctor_email: "kharper@test.com",
  },
];

const seedDoctor = () => Doctor.bulkCreate(doctorData, {});

module.exports = seedDoctor;
