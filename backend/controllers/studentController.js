const Student = require("../models/studentModel");

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const { student_code, name, email, department, semester } = req.body;

    if (!student_code || !name || !department || !semester) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing"
      });
    }

    const result = await Student.createStudent(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// READ ALL
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.getAllStudents();

    res.json({
      success: true,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// READ BY ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.getStudentById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// UPDATE
exports.updateStudent = async (req, res) => {
  try {
    const result = await Student.updateStudent(
      req.params.id,
      req.body
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.json({
      success: true,
      message: "Student updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    const result = await Student.deleteStudent(req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.json({
      success: true,
      message: "Student deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};