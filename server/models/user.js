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
    gender: {
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
      required: false,
    },
    addressLine2: {
      type: String,
      required: false,
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
      required: false,
    },
    bloodDonorVolunteer: {
      type: Boolean,
      required: false,
    },
    studied: {
      type: String,
      required: false,
    },
    studying: {
      type: String,
      required: false,
    },
    additionalQualification: {
      type: String,
      required: false,
    },
    working: {
      type: String,
      required: false,
    },

    verticalReservation: {
      type: String,
      required: false,
    },
    horizontalReservation: {
      type: String,
      required: false,
    },
    dateApplied: {
      type: Date,
      default: Date.now,
    },
    photo: {
      type: String,
      required: false,
    },
    paymentStatus: {
      type: String,
      required: false,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model('Applicant', Applicant);
