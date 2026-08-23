const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Attendance = sequelize.define(
  "Attendance",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    studentName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    course: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM("Present", "Absent"),
      allowNull: false
    }
  },
  {
    tableName: "attendance"
  }
);

module.exports = Attendance;