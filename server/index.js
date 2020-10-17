const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
var json2xls = require('json2xls');

const userRoute = require('./routes/user.routes');

require('dotenv/config');

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(json2xls.middleware);

app.use(cors(corsOptions));
// app.use(fileUpload());
// app.use('/public', express.static(__dirname + '/public'));

const path = require('path');
app.use(
  express.static(path.join(__dirname, '../public_html/public/applicantphotos'))
);

app.use(bodyParser.json());

app.use('/public', express.static('../public_html/public'));

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8081;

app.use('/api/applicant', userRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('db connected');
});

app.listen(port, () => {
  console.log('application connected to port' + port);
});
