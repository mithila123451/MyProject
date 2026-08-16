const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student Attendance Management System API is running"
  });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    const connection = await db.getConnection();

    console.log("MySQL database connected successfully");

    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
}

startServer();