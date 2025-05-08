import pool from './db.js'; // Import database connection

// Fetch all students
export async function getStudents(req, res) {
    try {
        const [rows] = await pool.query('SELECT * FROM student');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching students:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Fetch a single student by stdid
export async function getStudentById(req, res) {
    const { stdid } = req.params;
    try {
        const [result] = await pool.query('SELECT * FROM student WHERE stdid = ?', [stdid]); 
        
        if (result.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json(result[0]); 
    } catch (err) {
        console.error('Error fetching student:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Add a student
export async function addStudent(req, res) {
    const { stdid, stdname, standard, roll, age } = req.body;

    try {
        const [result] = await pool.query(
            'INSERT INTO student (stdid, stdname, standard, roll, age) VALUES (?, ?, ?, ?, ?)',
            [stdid, stdname, standard, roll, age]
        );

        res.json({ message: 'Student added successfully', insertedId: result.insertId });
    } catch (err) {
        console.error('Error adding student:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Update student details (standard, roll, age)
export async function updateStudent(req, res) {
    const { standard, roll, age } = req.body;
    const { stdid } = req.params; // Get stdid from URL

    try {
        const [result] = await pool.query(
            'UPDATE student SET standard = ?, roll = ?, age = ? WHERE stdid = ?',
            [standard, roll, age, stdid]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `Student with ID ${stdid} not found` });
        }

        res.json({ message: 'Student updated successfully' });
    } catch (err) {
        console.error('Error updating student:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// **Delete student by stdid**
export async function deleteStudent(req, res) {
    const { stdid } = req.params; // Get stdid from request URL
    try {
        const [result] = await pool.query('DELETE FROM student WHERE stdid = ?', [stdid]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student ID not found' });
        }

        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error('Error deleting student:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}