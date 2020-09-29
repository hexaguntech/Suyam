var nodemailer = require('nodemailer');
// var transport = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'eajaybarath@gmail.com',
//     pass: 'JayShock@1999',
//   },
// });

var transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '610413b695212c',
    pass: '296edce4a11af4',
  },
});

module.exports = transport;
