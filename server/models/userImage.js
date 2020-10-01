var mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  profileImg: {},
});

module.exports = mongoose.model('ApplicantImage', fileSchema);
