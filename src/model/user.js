const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        require: false,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ["Supervisor", "Employee", "Client"],
        required: true,
      },
    },
    { timestamps: true }
  );
  
module.exports = mongoose.model("User", userSchema);