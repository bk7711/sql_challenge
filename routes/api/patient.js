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
      if (!dbPatientData) {
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
router.delete("/:id", (req, res) => {
  Patient.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPatientData) => {
      if (!dbPatientData) {
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

//create
router.post("/", (req, res) => {
  Patient.create({
    patient_name: req.body.patient_name,
    patient_email: req.body.patient_email,
    doctor_name: req.body.doctor_name,
  })
    .then((dbPatientData) => res.json(dbPatientData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
module.exports = router;
