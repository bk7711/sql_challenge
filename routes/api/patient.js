const router = require("express").Router();

const { Doctor, Patient, Appointments } = require("../../models");

//get all patients
router.get("/", (req, res) => {
  Patient.findAll({
    include: [
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

//find one patient
router.get("/:id", (req, res) => {
  Patient.findOne({
    where: {
      id: req.params.id,
    },
    include: [
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
    .then((dbAppointmentData) => res.json(dbAppointmentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//update by id
router.put("/:id", (req, res) => {
  Patient.update(req.body, {
    where: {
      id: req.params.id,
    },
    include: [
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
    .then((dbPatientData) => {
      if (!dbPatientData[0]) {
        res.status(404).json({ message: "No patient found with this id" });
        return;
      }
      res.json(dbPatientData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//delete by id
//create
module.exports = router;
