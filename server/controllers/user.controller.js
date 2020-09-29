const Applicant = require('../models/user');
const ApplicantImage = require('../models/userImage');
const multer = require('multer');

const DIR = './public/';

exports.create = (req, res) => {
  const applicant = new Applicant({
    course: req.body.course,
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    phone: req.body.phone,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    state: req.body.state,
    pincode: req.body.pincode,
    bloodGroup: req.body.bloodGroup,
    bloodDonorVolunteer: req.body.bloodDonorVolunteer,
    studying: req.body.studying,
    working: req.body.working,
    belongTo: req.body.belongTo,
    verticalReservation: req.body.verticalReservation,
    horizontalReservation: req.body.horizontalReservation,
    dateApplied: req.body.dateApplied,
  });
  applicant
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || 'Some error occurred while creating the Applicant.',
      });
    });
};

exports.findOneWithId = (req, res) => {
  const id = req.params.id;

  Applicant.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: 'Not found Applicant with id ' + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: 'Error retrieving Applicant with id=' + id });
    });
};

exports.deleteApplicantById = (req, res) => {
  const id = req.params.id;

  Applicant.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Applicant with id=${id}. Maybe Applicant was not found!`,
        });
      } else {
        res.send({
          message: 'Appilcant was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Applicant with id=' + id,
      });
    });
};

exports.updateApplicant = (req, res) => {
  const id = req.params.id;
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  Applicant.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Applicant with id=${id}. Maybe Applicant was not found!`,
        });
      } else
        res.send({
          message: 'Appilcant was deleted successfully!',
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Applicant with id=' + id + err,
      });
    });
};

exports.getAllApplicants = (req, res) => {
  //   const name = req.query.name;
  //   var condition = name
  //     ? { name: { $regex: new RegExp(name), $options: 'i' } }
  //     : {};
  Applicant.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Applicants.',
      });
    });
};

exports.getApplicantsByName = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: 'i' } }
    : {};

  Applicant.find(condition)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Applicants.',
      });
    });
};

exports.uploadImge = (req, res) => {
  const img = new ApplicantImage({
    name: req.body.name,
    profileImage: req.body.profileImg,
  });

  console.log(req.body.name);

  img
    .save()
    .then((data) => {
      res.json(data);
      console.log(data.profileImg);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message ||
          'Some error occurred while saving image of the Applicant.',
      });
    });
};

exports.getImage = (req, res) => {
  const id = req.params.id;

  ApplicantImage.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: 'Not found Applicant with id ' + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: 'Error retrieving Applicant with id=' + id });
    });
};
