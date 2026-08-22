/*
// Task 4 Code (POST)
import pool from '../config/db.js';

export const createStudent = async (studentData) => {
  const { name, email, department } = studentData;
  const query = `
    INSERT INTO students (name, email, department)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, email, department];
  const { rows } = await pool.query(query, values);
  return rows[0];
};
*/

/*
// Task 5 Code (GET All and GET by ID)
import pool from '../config/db.js';

export const createStudent = async (studentData) => {
  const { name, email, department } = studentData;
  const query = `
    INSERT INTO students (name, email, department)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, email, department];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const getAllStudents = async () => {
  const query = 'SELECT * FROM students ORDER BY id ASC;';
  const { rows } = await pool.query(query);
  return rows;
};

export const getStudentById = async (id) => {
  const query = 'SELECT * FROM students WHERE id = $1;';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};
*/

/*
// Task 6 Code (PUT Update)
import pool from '../config/db.js';

export const createStudent = async (studentData) => {
  const { name, email, department } = studentData;
  const query = `
    INSERT INTO students (name, email, department)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, email, department];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const getAllStudents = async () => {
  const query = 'SELECT * FROM students ORDER BY id ASC;';
  const { rows } = await pool.query(query);
  return rows;
};

export const getStudentById = async (id) => {
  const query = 'SELECT * FROM students WHERE id = $1;';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

export const updateStudent = async (id, studentData) => {
  const { name, email, department } = studentData;
  const query = `
    UPDATE students
    SET name = $1, email = $2, department = $3
    WHERE id = $4
    RETURNING *;
  `;
  const values = [name, email, department, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};
*/

// Task 7 Code (DELETE Operation Added)
import pool from '../config/db.js';

export const createStudent = async (studentData) => {
  const { name, email, department } = studentData;
  const query = `
    INSERT INTO students (name, email, department)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, email, department];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const getAllStudents = async () => {
  const query = 'SELECT * FROM students ORDER BY id ASC;';
  const { rows } = await pool.query(query);
  return rows;
};

export const getStudentById = async (id) => {
  const query = 'SELECT * FROM students WHERE id = $1;';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

export const updateStudent = async (id, studentData) => {
  const { name, email, department } = studentData;
  const query = `
    UPDATE students
    SET name = $1, email = $2, department = $3
    WHERE id = $4
    RETURNING *;
  `;
  const values = [name, email, department, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const deleteStudent = async (id) => {
  const query = 'DELETE FROM students WHERE id = $1 RETURNING *;';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};