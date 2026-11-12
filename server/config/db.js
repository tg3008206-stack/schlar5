const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.log("ℹ️ No MONGO_URI specified — EduPlus initialized in-memory database with preloaded seed data.");
    return;
  }

  try {
    mongoose.set("bufferCommands", false);
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`⚠️ MongoDB Connection Error (${error.message}). EduPlus seamlessly running with in-memory database.`);
  }
};

module.exports = connectDB;
