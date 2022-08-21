const router = require("express").Router();

const { Doctor, Patient, Appointments } = require("../../models");

//get all appointments
router.get("/", (req, res) => {
  Appointments.findAll({
    attributes: { exclude: ["patient_id", "doctor_id"] },
    include: [
      {
        model: Doctor,
        attributes: ["id", "doctor_name"],
      },
      {
        model: Patient,
        attributes: ["id", "patient_name"],
      },
    ],
  })
    .then((dbAppointmentData) => res.json(dbAppointmentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
