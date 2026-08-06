// backend/seed/courses.js

const courses = [
  {
    courseCode: "CS301",
    courseName: "Database Management System",
    description:
      "Introduction to database design, SQL, and MongoDB concepts.",
    credits: 4,
    department: "Computer Science",
    semester: 3,
    academicYear: "2026-2027",
    courseType: "Theory",
    maxStudents: 60,

    schedule: [
      {
        day: "Monday",
        startTime: "10:00 AM",
        endTime: "11:00 AM",
      },
      {
        day: "Wednesday",
        startTime: "11:00 AM",
        endTime: "12:00 PM",
      },
    ],
  },

  {
    courseCode: "CS302",
    courseName: "Web Development",
    description:
      "Frontend and backend web application development.",
    credits: 3,
    department: "Computer Science",
    semester: 3,
    academicYear: "2026-2027",
    courseType: "Practical",
    maxStudents: 50,

    schedule: [
      {
        day: "Friday",
        startTime: "2:00 PM",
        endTime: "4:00 PM",
      },
    ],
  },
];

module.exports = courses;