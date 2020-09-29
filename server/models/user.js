const mongoose = require('mongoose');

let Applicant = mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    bloodDonorVolunteer: {
      type: Boolean,
      required: true,
    },
    studying: {
      type: String,
      required: true,
    },
    working: {
      type: String,
      required: true,
    },
    belongTo: {
      type: String,
      required: false,
    },
    verticalReservation: {
      type: String,
      required: true,
    },
    horizontalReservation: {
      type: String,
      required: true,
    },
    dateApplied: {
      type: Date,
      default: Date.now,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model('Applicant', Applicant);
