const router = require("express").Router();

const { Doctor, Patient, Appointments } = require("../../models");

//get all doctors
router.get("/", (req, res) => {
  Doctor.findAll({
    include: [
      {
        model: Patient,
        attributes: ["id", "patient_name"],
      },
      {
        model: Appointments,
        attributes: ["date"],
      },
    ],
  })
    .then((dbDoctorData) => res.json(dbDoctorData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
