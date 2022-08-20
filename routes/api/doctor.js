const router = require("express").Router();

const { Doctor, Patient, Appointments } = require("../../models");

//get all users
router.get("/", (req, res) => {
  Doctor.findAll({
    include: [
      {
        model: Patient,
        attributes: ["id", "name"],
      },
      {
        model: Appointments,
        attributes: ["date"],
      },
    ],
  });
});
module.exports = router;
