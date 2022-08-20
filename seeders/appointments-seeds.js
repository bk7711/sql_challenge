const { Appointments } = require("../models");

const appointmentData = [
  {
    date: "2022-12-13T03:30:00.000Z",
    patient_id: 1,
    doctor_id: 2,
  },
  {
    date: "2022-10-01T01:30:00.000Z",
    patient_id: 2,
    doctor_id: 1,
  },
];

const seedAppointments = () => Appointments.bulkCreate(appointmentData);

module.exports = seedAppointments;
