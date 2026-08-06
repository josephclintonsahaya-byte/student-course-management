// backend/models/Enrollment.js

const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    // Reference to Student collection
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    // Reference to Course collection
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    enrollmentDate: {
      type: Date,
      default: Date.now,
    },

    semester: {
      type: Number,
      required: true,
      min: 1,
      max: 8,
    },

    academicYear: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Active",
        "Completed",
        "Dropped",
      ],
      default: "Active",
    },

    grade: {
      type: String,
      default: null,
    },

    marks: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    attendancePercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);


// Prevent duplicate course enrollment
enrollmentSchema.index(
  { student: 1, course: 1 },
  { unique: true }
);


// Indexes for faster queries
enrollmentSchema.index({ student: 1 });
enrollmentSchema.index({ course: 1 });


module.exports = mongoose.model(
  "Enrollment",
  enrollmentSchema
);