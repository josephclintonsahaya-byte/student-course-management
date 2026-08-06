// backend/models/Assignment.js

const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    // Reference to Course collection
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    // Instructor who created the assignment
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    assignmentType: {
      type: String,
      enum: [
        "Assignment",
        "Project",
        "Lab Work",
        "Quiz",
      ],
      default: "Assignment",
    },

    totalMarks: {
      type: Number,
      required: true,
      min: 1,
      default: 100,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    attachment: {
      type: String,
      default: "",
    },

    submissionType: {
      type: String,
      enum: [
        "File Upload",
        "Text",
        "Link",
      ],
      default: "File Upload",
    },

    status: {
      type: String,
      enum: [
        "Active",
        "Closed",
      ],
      default: "Active",
    },

    instructions: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);


// Indexes for faster searching
assignmentSchema.index({ course: 1 });
assignmentSchema.index({ dueDate: 1 });


module.exports = mongoose.model(
  "Assignment",
  assignmentSchema
);