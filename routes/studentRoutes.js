const express = require("express");
const { addStudent, getStudents, getStudentById, deleteStudent } = require("../controllers/studentController");

const router = express.Router();

router.post("/student", addStudent);
router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.delete("/students/:id", deleteStudent);

module.exports = router;