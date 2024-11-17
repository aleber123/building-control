import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', 
  user: process.env.DB_USER || 'root', 
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'building_control',
});

// Add error handling for connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    console.error('Current connection config:', {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      database: process.env.DB_DATABASE || 'building_control',
    });
    return;
  }
  console.log('Connected to MySQL database');
});

export default connection;
