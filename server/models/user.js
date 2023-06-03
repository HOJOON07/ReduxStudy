const { default: userEvent } = require('@testing-library/user-event');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  userPW: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
