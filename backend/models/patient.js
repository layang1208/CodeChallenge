const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
});

const Patient = mongoose.model("patients", patientSchema);

exports.Patient = Patient;
