const express = require("express");
require("dotenv").config();
const { connectionDB } = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Home Page" });
});

app.listen(process.env.PORT, () => {
  connectionDB();
  console.log(`Server running on port ${process.env.PORT}`);
});
