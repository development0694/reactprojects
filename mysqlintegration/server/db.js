import mysql from 'mysql2/promise';

// Create a MySQL connection pool (better performance than single connection)
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'studentcrudapp',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test database connection
async function testDBConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MySQL');
        connection.release(); // Release connection back to the pool
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

testDBConnection();

export default pool; // Export the connection pool