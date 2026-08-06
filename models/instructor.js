// backend/models/Instructor.js

const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    // Reference to User collection
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // Instructor ID (Employee ID)
    instructorId: {
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

    designation: {
      type: String,
      required: true,
      enum: [
        "Professor",
        "Associate Professor",
        "Assistant Professor",
        "Lecturer",
      ],
    },

    qualification: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      default: 0,
      min: 0,
    },

    specialization: {
      type: String,
      required: true,
    },

    joiningDate: {
      type: Date,
      required: true,
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
instructorSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Include virtual fields in JSON response
instructorSchema.set("toJSON", {
  virtuals: true,
});

instructorSchema.set("toObject", {
  virtuals: true,
});

module.exports = mongoose.model("Instructor", instructorSchema);