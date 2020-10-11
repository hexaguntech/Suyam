const express = require('express');
const router = express.Router();
const ApplicantImage = require('../models/userImage');
const applicant = require('../controllers/user.controller');
const transport = require('../controllers/mail.controller');
const multer = require('multer');

router.post('/create', applicant.create);

router.get('/get/:id', applicant.findOneWithId);

router.delete('/delete/:id', applicant.deleteApplicantById);

router.put('/update/:id', applicant.updateApplicant);

router.get('/get', applicant.getAllApplicants);

router.get('/get/name/:name', applicant.getApplicantsByName);

// router.post('/upload/image', applicant.uploadImge);

// router.get('/sendmail', transport.sendMail);

var finlenaa = '';

const storage = multer.diskStorage({
  destination: '../public_html/public/applicantphotos/',
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    filenaa = 'IMAGE-' + Date.now() + file.originalname;
    cb(null, filenaa);
    console.log(fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    // rejects storing a file
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: fileFilter,
}).single('profileImg');

const obj = (req, res) => {
  upload(req, res, () => {
    // console.log('Request ---', req);
    // console.log('Request file ---', req.file); //Here you get file.
    const file = new ApplicantImage();
    file.profileImg = req.file.path;
    file.name = req.body.name;
    file
      .save()
      .then((result) => {
        res.status(201).json({
          message: 'Image uploaded successfully!',
          userCreated: {
            imagepath: 'public/applicantphotos/' + filenaa,
          },
        });
        console.log(result.profileImg);
      })
      .catch((err) => {
        console.log(err),
          res.status(500).json({
            error: err,
          });
      });
  });
};

router.post('/upload', obj);

module.exports = router;

// var upload1 = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == 'image/png' ||
//       file.mimetype == 'image/jpg' ||
//       file.mimetype == 'image/jpeg'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     }
//   },
// });

// router.post('/upload/image', upload1.single('profileImg'), (req, res, next) => {
//   const url = req.protocol + '://' + req.get('host');
//   const user = new ApplicantImage({
//     name: req.body.name,
//     profileImg: url + '/public/' + req.file,
//   });
//   user
//     .save()
//     .then((result) => {
//       res.status(201).json({
//         message: 'User registered successfully!',
//         userCreated: {
//           _id: result._id,
//           profileImg: result.profileImg,
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err),
//         res.status(500).json({
//           error: err,
//         });
//     });
// });
