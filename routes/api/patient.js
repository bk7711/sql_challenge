const router = require("express").Router();

const { Doctor, Patient, Appointments } = require("../../models");

//get all patients
router.get("/", (req, res) => {
  Patient.findAll({
    included: [
      {
        model: Doctor,
        attributes: ["id", "doctor_name"],
      },
      {
        model: Appointments,
        attributes: ["date"],
      },
    ],
  })
    .then((dbPatientData) => res.json(dbPatientData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
