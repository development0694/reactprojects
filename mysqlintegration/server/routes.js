import express from 'express';
import { getStudents, getStudentById, addStudent, updateStudent, deleteStudent } from './studentController.js';
const router = express.Router();

router.get('/students', getStudents); //fetch all students
router.get('/students/:stdid', getStudentById); // Fetch student by ID
router.post('/students', addStudent); // insert neew student data
router.put('/students/:stdid', updateStudent); //New route for updating a student
router.delete('/students/:stdid', deleteStudent); // Delete student by stdid

export default router;