// backend/models/Announcement.js

const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    // Reference to Course collection
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    // Instructor who created the announcement
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

    message: {
      type: String,
      required: true,
      trim: true,
    },

    announcementType: {
      type: String,
      enum: [
        "General",
        "Exam",
        "Assignment",
        "Important",
        "Event",
      ],
      default: "General",
    },

    attachment: {
      type: String,
      default: "",
    },

    priority: {
      type: String,
      enum: [
        "Low",
        "Medium",
        "High",
      ],
      default: "Medium",
    },

    publishDate: {
      type: Date,
      default: Date.now,
    },

    expiryDate: {
      type: Date,
      default: null,
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


// Indexes for faster queries
announcementSchema.index({ course: 1 });
announcementSchema.index({ publishDate: -1 });


module.exports = mongoose.model(
  "Announcement",
  announcementSchema
);