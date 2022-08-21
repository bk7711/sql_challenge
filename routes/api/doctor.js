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
//create
module.exports = router;
