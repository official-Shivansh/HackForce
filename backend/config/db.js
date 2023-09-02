const mongoose = require("mongoose");
require("dotenv").config();

const connectionDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`Connected to Database`);
};

module.exports = { connectionDB };
