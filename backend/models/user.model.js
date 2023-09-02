const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required },
  email: {
    type: String,
    unique: true,
    required,
  },
  password: { type: String, required },
  course: { type: String, required },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
