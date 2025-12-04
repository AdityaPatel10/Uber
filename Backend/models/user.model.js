const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      minlength: 3,
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  socketid: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);