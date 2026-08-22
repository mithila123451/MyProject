/*
import 'dotenv/config';
//require('dotenv').config();
const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
import 'dotenv/config';
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});