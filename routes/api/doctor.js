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

//find one doctor
router.get("/:id", (req, res) => {
  Doctor.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Patient,
        attributes: ["patient_id", "patient_name"],
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
//update by id
router.put("/:id", (req, res) => {
  Doctor.update(req.body, {
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Patient,
        attributes: ["patient_id", "patient_name"],
      },
      {
        model: Appointments,
        attributes: ["date"],
      },
    ],
  })
    .then((dbDoctorData) => {
      if (!dbDoctorData[0]) {
        res.status(404).json({ message: "No doctor found with this id" });
        return;
      }
      res.json(dbDoctorData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//delete by id
router.delete("/:id", (req, res) => {
  Doctor.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbDoctorData) => {
      if (!dbDoctorData) {
        res.status(404).json({ message: "No doctor found with this id" });
        return;
      }
      res.json(dbDoctorData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//create
router.post("/", (req, res) => {
  Patient.create({
    doctor_name: req.body.doctor_name,
    doctor_email: req.body.doctor_email,
    patient_id: req.body.patient_id,
  })
    .then((dbDoctorData) => res.json(dbDoctorData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
module.exports = router;
