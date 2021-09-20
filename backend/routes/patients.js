const express = require("express");
const { Patient } = require("../models/patient");
const validate = require("../middleware/validator");
const { patientSchema } = require("../validation/patient");
const router = express.Router();

router.get("/", async (req, res) => {
  const patients = await Patient.find({});
  res.send(patients);
});

router.post("/search", validate(patientSchema), async (req, res) => {
  let patientToGet = await Patient.find({ email: req.body.email });
  if (patientToGet == "") return res.status(404).send("Search patient does not exist");
  res.send(patientToGet);
});

router.post("/new", validate(patientSchema), async (req, res) => {
  let patientExist = await Patient.findOne({ email: req.body.email });
  if (patientExist) return res.status(400).send("Patient already exist");
  let patientToAdd = new Patient({
    email: req.body.email,
  });
  patientToAdd = await patientToAdd.save();
  res.send(patientToAdd);
});

router.post("/delete", validate(patientSchema), async (req, res) => {
  let patientExist = await Patient.findOne({ email: req.body.email });
  if (!patientExist) return res.status(400).send("Patient to delete does not exist");
  let patientToDelete = await Patient.findOneAndDelete({
    email: req.body.email,
  });
  res.send(patientToDelete);
});

module.exports = router;
