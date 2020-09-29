const transport = require('../mail.config');

var mailOptions = {
  from: '"Ajaybarath" eajaybarath@gmail.com',
  to: 'ajaybarath3@gmail.com',
  subject: 'Registration confirmation mail',
  text: 'Hey there, it’s our first message sent with Nodemailer ',
  html:
    '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
};

var trns = transport
  .sendMail(mailOptions)
  .then((stuff) => {
    console.log(stuff, '---');
  })
  .catch((err) => {
    console.log(err);
  });

// module.exports = transport;
