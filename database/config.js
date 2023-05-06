const mongoose = require("mongoose");

const dbConfigConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // optional timeout for initial connection
    });
    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error initializing the database");
  }
};

module.exports = dbConfigConnection;
