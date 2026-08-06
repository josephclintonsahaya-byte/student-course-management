// backend/models/Course.js

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    // Unique course code
    courseCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },

    courseName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    credits: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },

    department: {
      type: String,
      required: true,
      enum: [
        "Computer Science",
        "Information Technology",
        "Electronics",
        "Mechanical",
        "Civil",
        "Electrical",
      ],
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
      example: "2026-2027",
    },

    // Instructor who teaches the course
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },

    courseType: {
      type: String,
      enum: [
        "Theory",
        "Practical",
        "Project",
      ],
      default: "Theory",
    },

    maxStudents: {
      type: Number,
      default: 60,
    },

    schedule: [
      {
        day: {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },

        startTime: String,

        endTime: String,
      },
    ],

    syllabus: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


// Index for faster searching
courseSchema.index({ courseCode: 1 });
courseSchema.index({ department: 1 });


module.exports = mongoose.model("Course", courseSchema);