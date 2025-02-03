require("dotenv").config();
const express = require("express");
const app = require("./app");
const connectDB = require("./db/connection");

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("connected to the database successful");
    app.listen(PORT, () => {
      console.log(`server is runing on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("failed to connect to the database", err.message);
    process.exit(1);
  }
};

startServer();
// setup server to run = MODEL = CONTROLLER = ROUTER = BACK TO THE APP.JS.. there will be other folders if neccesary
