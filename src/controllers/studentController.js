/*
// Task 4 Code (POST)
import * as studentModel from '../models/studentModel.js';

export const createStudent = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    if (!name || !email || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newStudent = await studentModel.createStudent({ name, email, department });
    res.status(201).json({
      message: 'Student created successfully',
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/

/*
// Task 5 Code (GET All and GET by ID)
import * as studentModel from '../models/studentModel.js';

export const createStudent = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    if (!name || !email || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newStudent = await studentModel.createStudent({ name, email, department });
    res.status(201).json({
      message: 'Student created successfully',
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.getAllStudents();
    res.status(200).json({
      message: 'Students retrieved successfully',
      data: students,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.getStudentById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({
      message: 'Student retrieved successfully',
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/

/*
// Task 6 Code (PUT Update)
import * as studentModel from '../models/studentModel.js';

export const createStudent = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    if (!name || !email || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newStudent = await studentModel.createStudent({ name, email, department });
    res.status(201).json({
      message: 'Student created successfully',
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.getAllStudents();
    res.status(200).json({
      message: 'Students retrieved successfully',
      data: students,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.getStudentById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({
      message: 'Student retrieved successfully',
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, department } = req.body;
    if (!name || !email || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const updatedStudent = await studentModel.updateStudent(id, { name, email, department });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({
      message: 'Student updated successfully',
      data: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/

// Task 7 Code (DELETE Operation Added)
import * as studentModel from '../models/studentModel.js';

export const createStudent = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    if (!name || !email || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newStudent = await studentModel.createStudent({ name, email, department });
    res.status(201).json({
      message: 'Student created successfully',
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.getAllStudents();
    res.status(200).json({
      message: 'Students retrieved successfully',
      data: students,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.getStudentById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({
      message: 'Student retrieved successfully',
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, department } = req.body;
    if (!name || !email || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const updatedStudent = await studentModel.updateStudent(id, { name, email, department });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({
      message: 'Student updated successfully',
      data: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await studentModel.deleteStudent(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({
      message: 'Student deleted successfully',
      data: deletedStudent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};