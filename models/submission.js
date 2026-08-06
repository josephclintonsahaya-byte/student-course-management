// backend/models/Submission.js

const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    // Reference to Assignment collection
    assignment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },

    // Reference to Student collection
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    submissionDate: {
      type: Date,
      default: Date.now,
    },

    submissionFile: {
      type: String,
      default: "",
    },

    submissionLink: {
      type: String,
      default: "",
    },

    comments: {
      type: String,
      default: "",
    },

    marksObtained: {
      type: Number,
      default: null,
      min: 0,
    },

    feedback: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "Submitted",
        "Late",
        "Pending Review",
        "Reviewed",
      ],
      default: "Submitted",
    },

    gradedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      default: null,
    },

    gradedDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);


// Prevent duplicate submissions for same assignment by same student
submissionSchema.index(
  { assignment: 1, student: 1 },
  { unique: true }
);


// Indexes for faster searching
submissionSchema.index({ student: 1 });
submissionSchema.index({ assignment: 1 });


module.exports = mongoose.model(
  "Submission",
  submissionSchema
);