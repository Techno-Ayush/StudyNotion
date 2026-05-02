const mongoose = require("mongoose");

mongoose.set("bufferCommands", false);

async function connectDB() {
  const mongoUrl = process.env.MONGODB_URL;

  if (!mongoUrl || mongoUrl.includes("username:password")) {
    console.warn(
      "Database is not connected. Please set a valid MONGODB_URL in backend/.env."
    );
    return false;
  }

  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log("Database connected successfully.");
    return true;
  } catch (error) {
    console.log("Database connection failed:", error.message);
    return false;
  }
}

module.exports = connectDB;
