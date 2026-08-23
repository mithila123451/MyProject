const Attendance = require("../models/Attendance");

// CREATE
const createAttendance = async (req, res) => {
  try {
    const {
      studentName,
      studentId,
      course,
      date,
      status
    } = req.body;

    if (
      !studentName ||
      !studentId ||
      !course ||
      !date ||
      !status
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const attendance = await Attendance.create({
      studentName,
      studentId,
      course,
      date,
      status
    });

    res.status(201).json({
      message: "Attendance created successfully",
      data: attendance
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to create attendance",
      error: error.message
    });
  }
};


// READ ALL
const getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findAll({
      order: [["id", "ASC"]]
    });

    res.status(200).json({
      count: attendance.length,
      data: attendance
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to get attendance",
      error: error.message
    });
  }
};


// READ BY ID
const getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);

    if (!attendance) {
      return res.status(404).json({
        message: "Attendance record not found"
      });
    }

    res.status(200).json({
      data: attendance
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to get attendance",
      error: error.message
    });
  }
};


// UPDATE
const updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);

    if (!attendance) {
      return res.status(404).json({
        message: "Attendance record not found"
      });
    }

    const {
      studentName,
      studentId,
      course,
      date,
      status
    } = req.body;

    await attendance.update({
      studentName: studentName ?? attendance.studentName,
      studentId: studentId ?? attendance.studentId,
      course: course ?? attendance.course,
      date: date ?? attendance.date,
      status: status ?? attendance.status
    });

    res.status(200).json({
      message: "Attendance updated successfully",
      data: attendance
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update attendance",
      error: error.message
    });
  }
};


// DELETE
const deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);

    if (!attendance) {
      return res.status(404).json({
        message: "Attendance record not found"
      });
    }

    await attendance.destroy();

    res.status(200).json({
      message: "Attendance deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete attendance",
      error: error.message
    });
  }
};


module.exports = {
  createAttendance,
  getAllAttendance,
  getAttendanceById,
  updateAttendance,
  deleteAttendance
};