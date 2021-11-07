const mongoose = require("mongoose");

const connectDatabase = async (url) => {
  try {
    const dbconnect = await mongoose.connect(url);
    if (dbconnect) {
      console.log("Database Connected");
    } else {
      console.log("Database Connection failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
