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

//find one appointment
router.get("/:id", (req, res) => {
  Appointments.findOne({
    attributes: { exclude: ["patient_id", "doctor_id"] },
    where: {
      id: req.params.id,
    },
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

//update by id
router.put("/:id", (req, res) => {
  Appointments.update(req.body, {
    where: {
      id: req.params.id,
    },
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
    .then((dbAppointmentsData) => {
      if (!dbAppointmentsData) {
        res.status(404).json({ message: "No appointment found with this id" });
        return;
      }
      res.json(dbAppointmentsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete by id
router.delete("/:id", (req, res) => {
  Appointments.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbAppointmentData) => {
      if (!dbAppointmentData) {
        res.status(404).json({ message: "No appointment found with this id" });
        return;
      }
      res.json(dbAppointmentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//create
router.post("/", (req, res) => {
  Appointments.create({
    date: req.body.date,
    patient_id: req.body.patient_id,
    doctor_id: req.body.doctor_id,
  })
    .then((dbAppointmentData) => res.json(dbAppointmentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
