const db = require("../config/db");

// CREATE student
exports.createStudent = async (student) => {
  const { student_code, name, email, department, semester } = student;

  const [result] = await db.execute(
    `INSERT INTO students
    (student_code, name, email, department, semester)
    VALUES (?, ?, ?, ?, ?)`,
    [student_code, name, email, department, semester]
  );

  return result;
};

// READ all students
exports.getAllStudents = async () => {
  const [rows] = await db.execute(
    "SELECT * FROM students ORDER BY id DESC"
  );

  return rows;
};

// READ student by ID
exports.getStudentById = async (id) => {
  const [rows] = await db.execute(
    "SELECT * FROM students WHERE id = ?",
    [id]
  );

  return rows[0];
};

// UPDATE student
exports.updateStudent = async (id, student) => {
  const { student_code, name, email, department, semester } = student;

  const [result] = await db.execute(
    `UPDATE students
     SET student_code = ?,
         name = ?,
         email = ?,
         department = ?,
         semester = ?
     WHERE id = ?`,
    [student_code, name, email, department, semester, id]
  );

  return result;
};

// DELETE student
exports.deleteStudent = async (id) => {
  const [result] = await db.execute(
    "DELETE FROM students WHERE id = ?",
    [id]
  );

  return result;
};