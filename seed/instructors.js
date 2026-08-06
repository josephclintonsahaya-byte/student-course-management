// backend/seed/instructors.js

const instructors = [
  {
    instructorId: "INS001",
    firstName: "David",
    lastName: "Kumar",
    email: "david.kumar@example.com",
    phone: "9876543210",
    department: "Computer Science",
    designation: "Assistant Professor",
    qualification: "M.Tech Computer Science",
    experience: 5,
    specialization: "Database Management Systems",
    joiningDate: new Date("2021-06-10"),
    address: {
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600001",
    },
  },

  {
    instructorId: "INS002",
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@example.com",
    phone: "9876543211",
    department: "Information Technology",
    designation: "Associate Professor",
    qualification: "Ph.D Information Technology",
    experience: 8,
    specialization: "Web Technologies",
    joiningDate: new Date("2018-07-15"),
    address: {
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001",
    },
  },
];

module.exports = instructors;