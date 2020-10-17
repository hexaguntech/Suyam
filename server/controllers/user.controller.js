const Applicant = require('../models/user');
const ApplicantImage = require('../models/userImage');
const multer = require('multer');
var json2xls = require('json2xls');
const fs = require('fs');
const XLSX = require('xlsx');

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
    studied: req.body.studied,
    studying: req.body.studying,
    additionalQualification: req.body.additionalQualification,
    working: req.body.working,
    verticalReservation: req.body.verticalReservation,
    horizontalReservation: req.body.horizontalReservation,
    photo: req.body.photoPath,
    dateApplied: req.body.dateApplied,
    paymentStatus: false,
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

exports.downloadData = (req, res) => {
  // json.forEach(function (instance, indexx, record) {
  //   var tempArry = {
  //     course: record[indexx].course,
  //     name: record[indexx].name,
  //     dob: record[indexx].dob,
  //     email: record[indexx].email,
  //     phone: record[indexx].phone,
  //     address_line1: record[indexx].addressLine1,
  //     address_line2: record[indexx].addressLine2,
  //     state: record[indexx].state,
  //     pincode: record[indexx].pincode,
  //     bloodGroup: record[indexx].bloodGroup,
  //   };
  //   jsonArray.push(tempArry);
  // });

  Applicant.find({})
    .then((data) => {
      // const wb = XLSX.utils.book_new(); // create workbook
      // const ws = XLSX.utils.json_to_sheet(data); // convert data to sheet
      // XLSX.utils.book_append_sheet(wb, ws, 'users_sheet'); // add sheet to workbook

      // const filename = 'users.xlsx';
      // const wb_opts = { bookType: 'xlsx', type: 'binary' }; // workbook options
      // XLSX.writeFile(wb, filename, wb_opts); // write workbook file

      // const stream = fs.createReadStream(filename); // create read stream
      // stream.pipe(res);
      var xls = json2xls(data, {
        fields: {
          course: 'string',
          name: 'string',
          dob: 'string',
          email: 'string',
          phone: 'string',
          addressLine1: 'string',
          addressLine2: 'string',
          state: 'string',
          pincode: 'string',
          bloodGroup: 'string',
          bloodDonorVolunteer: 'string',
          studied: 'string',
          studying: 'string',
          additionalQualification: 'string',
          working: 'string',
          verticalReservation: 'string',
          horizontalReservation: 'string',
          dateApplied: 'string',
          photo: 'string',
        },
      });

      // const stream = fs.createReadStream(xlsvc); // create read stream
      // stream.pipe(res);

      // var xls = json2xls(data);
      // res.xls('data.xlsx', xls);
      // fs.writeFileSync('applicantData.xlsx', xls, 'binary');
      res.file(xls);
      // jsonArray.push(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Applicants.',
      });
    });
  //this code is for sorting  xls with required value
  // jsonArray.sort(function (a, b) {
  //   return parseFloat(b.ColoumnName4) - parseFloat(a.ColoumnName4);
  // });
};
