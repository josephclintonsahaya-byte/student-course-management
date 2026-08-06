// backend/seed/seed.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("../config/db");

const Student = require("../models/Student");
const Instructor = require("../models/Instructor");
const Course = require("../models/Course");

const students = require("./students");
const instructors = require("./instructors");
const courses = require("./courses");


const importData = async () => {
  try {

    await connectDB();


    // Clear existing data
    await Student.deleteMany();
    await Instructor.deleteMany();
    await Course.deleteMany();


    // Insert instructors
    const createdInstructors =
      await Instructor.insertMany(instructors);


    // Attach instructor to courses
    const courseData = courses.map((course) => ({
      ...course,
      instructor: createdInstructors[0]._id,
    }));


    // Insert courses
    await Course.insertMany(courseData);


    // Insert students
    await Student.insertMany(students);


    console.log("✅ Database Seeded Successfully");

    process.exit();

  } catch (error) {

    console.error(
      "❌ Seed Error:",
      error.message
    );

    process.exit(1);
  }
};


importData();