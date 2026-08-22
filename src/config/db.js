/* const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'student_db',
  password: 'mypassword',
  port: 5432,
});

module.exports = pool; */

/* 
const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'student_db',
  password: 'mypassword',
  port: 5432,
});

module.exports = pool; 
*/

import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER || 'admin',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'student_db',
  password: process.env.DB_PASSWORD || 'mypassword',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});
