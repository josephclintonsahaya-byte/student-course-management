// backend/seed/students.js

const students = [
  {
    studentId: "CSE2026001",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    dateOfBirth: new Date("2005-05-20"),
    email: "john.doe@example.com",
    phone: "9000000001",
    department: "Computer Science",
    year: 2,
    semester: 3,
    section: "A",
    address: {
      street: "MG Road",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600002",
    },
  },

  {
    studentId: "CSE2026002",
    firstName: "Anu",
    lastName: "Priya",
    gender: "Female",
    dateOfBirth: new Date("2005-08-10"),
    email: "anu.priya@example.com",
    phone: "9000000002",
    department: "Computer Science",
    year: 2,
    semester: 3,
    section: "A",
    address: {
      street: "Anna Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600040",
    },
  },
];

module.exports = students;