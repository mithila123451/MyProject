const attendanceModel = require("../models/attendanceModel");

// Create Attendance
exports.createAttendance = async (req, res) => {
  try {
    const { student_id, attendance_date, status } = req.body;

    if (!student_id || !attendance_date || !status) {
      return res.status(400).json({
        success: false,
        message: "student_id, attendance_date and status are required"
      });
    }

    const result = await attendanceModel.createAttendance({
      student_id,
      attendance_date,
      status
    });

    res.status(201).json({
      success: true,
      message: "Attendance created successfully",
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get All Attendance
exports.getAllAttendance = async (req, res) => {
  try {
    const data = await attendanceModel.getAllAttendance();

    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Attendance By ID
exports.getAttendanceById = async (req, res) => {
  try {
    const data = await attendanceModel.getAttendanceById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Attendance not found"
      });
    }

    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update Attendance
exports.updateAttendance = async (req, res) => {
  try {
    const result = await attendanceModel.updateAttendance(
      req.params.id,
      req.body
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Attendance not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Attendance updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Attendance
exports.deleteAttendance = async (req, res) => {
  try {
    const result = await attendanceModel.deleteAttendance(req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Attendance not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Attendance deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};