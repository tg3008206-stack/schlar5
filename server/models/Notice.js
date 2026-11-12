const mongoose = require("mongoose");
const { createModelProxy } = require("./modelHelper");

const noticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, default: "General" },
    audience: {
      type: String,
      enum: ["EVERYONE", "STUDENT", "TEACHER"],
      default: "EVERYONE",
    },
    publishedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = createModelProxy("Notice", noticeSchema);
