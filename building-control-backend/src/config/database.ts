import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'building_control',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  multipleStatements: true,
  charset: 'utf8mb4'
});

// Convert pool to use promises
const promisePool = pool.promise();

// Test the connection and create table if it doesn't exist
const initializeDatabase = async () => {
  try {
    // Test connection
    const connection = await promisePool.getConnection();
    console.log('Successfully connected to MySQL database');

    // Create table if it doesn't exist
    await connection.query(`
      CREATE TABLE IF NOT EXISTS buildings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        temperature FLOAT,
        location VARCHAR(255),
        status VARCHAR(50)
      )
    `);
    console.log('Buildings table verified/created');

    connection.release();
  } catch (err) {
    console.error('Database initialization error:', err);
    process.exit(1); // Exit if we can't initialize the database
  }
};

// Run initialization
initializeDatabase();

export default promisePool;
