const db = require("../config/db");

// Create Attendance
exports.createAttendance = async (attendance) => {
  const { student_id, attendance_date, status } = attendance;

  const [result] = await db.execute(
    `INSERT INTO attendance
    (student_id, attendance_date, status)
    VALUES (?, ?, ?)`,
    [student_id, attendance_date, status]
  );

  return result;
};

// Get All Attendance
exports.getAllAttendance = async () => {
  const [rows] = await db.execute(`
    SELECT
      attendance.id,
      attendance.student_id,
      students.student_code,
      students.name,
      attendance.attendance_date,
      attendance.status,
      attendance.created_at
    FROM attendance
    JOIN students
      ON attendance.student_id = students.id
    ORDER BY attendance.id DESC
  `);

  return rows;
};

// Get Attendance By ID
exports.getAttendanceById = async (id) => {
  const [rows] = await db.execute(
    `SELECT
      attendance.id,
      attendance.student_id,
      students.student_code,
      students.name,
      attendance.attendance_date,
      attendance.status,
      attendance.created_at
    FROM attendance
    JOIN students
      ON attendance.student_id = students.id
    WHERE attendance.id = ?`,
    [id]
  );

  return rows[0];
};

// Update Attendance
exports.updateAttendance = async (id, attendance) => {
  const { student_id, attendance_date, status } = attendance;

  const [result] = await db.execute(
    `UPDATE attendance
    SET student_id = ?,
        attendance_date = ?,
        status = ?
    WHERE id = ?`,
    [student_id, attendance_date, status, id]
  );

  return result;
};

// Delete Attendance
exports.deleteAttendance = async (id) => {
  const [result] = await db.execute(
    "DELETE FROM attendance WHERE id = ?",
    [id]
  );

  return result;
};