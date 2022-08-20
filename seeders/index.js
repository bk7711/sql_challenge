seedDoctor = require("./doctor-seeds.js");
seedPatient = require("./patient-seeds");
seedAppointments = require("./appointments-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedDoctor();
  console.log("--------------");

  await seedPatient();
  console.log("--------------");

  await seedAppointments();
  console.log("--------------");

  process.exit(0);
};

seedAll();
