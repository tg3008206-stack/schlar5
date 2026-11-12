const mongoose = require("mongoose");
const { createModelProxy } = require("./modelHelper");

const examSchema = new mongoose.Schema(
  {
    examName: { type: String, required: true }, // UNIT TEST, MID TERM, etc.
    targetClass: { type: String, required: true },
    examDate: { type: String, required: true },
    description: { type: String, default: "" },
    academicSession: { type: String, default: "2024-2025" },
  },
  { timestamps: true }
);

module.exports = createModelProxy("Exam", examSchema);
