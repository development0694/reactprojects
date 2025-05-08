import axios from 'axios';

// Fetch students
export async function fetchStudents() {
    try {
        const response = await axios.get('/api/students');
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        return [];
    }
}
// Fetch a student by stdid
export async function fetchStudentById(stdid) {
    try {
        const response = await axios.get(`/api/students/${stdid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching student:', error);
        return null;
    }
}

// Add a student
export async function addStudent(student) {
    try {
        const response = await axios.post('/api/students', student);
        return response.data;
    } catch (error) {
        console.error('Error adding student:', error);
        return { error: error.message };
    }
}

// Update student (standard, roll, age)
export async function updateStudent(student) {
    try {
        const response = await axios.put(`/api/students/${student.stdid}`, student);
        return response.data;
    } catch (error) {
        console.error('Error updating student:', error);

        return { 
            error: error.response?.data?.message || 'An unexpected error occurred' 
        };
    }
}

// **Delete a student by stdid**
export async function deleteStudent(stdid) {
    try {
        const response = await axios.delete(`/api/students/${stdid}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { error: 'Student ID not found' };
        }
        console.error('Error deleting student:', error);
        return { error: 'Internal Server Error' };
    }
}