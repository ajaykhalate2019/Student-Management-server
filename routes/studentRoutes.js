const express = require("express");
const { addStudent, getStudents, getStudentById, updateStudent,deleteStudent } = require("../controllers/studentController");

const router = express.Router();

router.post("/student", addStudent);
router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.put("/students/:id", updateStudent);     //updateStudent
router.delete("/students/:id", deleteStudent);

module.exports = router;