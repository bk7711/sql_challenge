const router = require("express").Router();

const doctorRoutes = require("./doctor.js");
const appointmentsRoutes = require("./appointments.js");
const patientRoutes = require("./patient.js");

router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);
router.use("/appointments", appointmentsRoutes);

module.exports = router;
