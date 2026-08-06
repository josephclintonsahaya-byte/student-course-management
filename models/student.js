// backend/models/Student.js

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    // Reference to User collection
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // Student ID (College Roll Number)
    studentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
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

    year: {
      type: Number,
      required: true,
      min: 1,
      max: 4,
    },

    semester: {
      type: Number,
      required: true,
      min: 1,
      max: 8,
    },

    section: {
      type: String,
      default: "A",
    },

    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
    },

    profileImage: {
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

// Virtual field for full name
studentSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Include virtuals in JSON response
studentSchema.set("toJSON", {
  virtuals: true,
});

studentSchema.set("toObject", {
  virtuals: true,
});

module.exports = mongoose.model("Student", studentSchema);