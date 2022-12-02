const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AdminSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "ADMIN",
    },
  },
  { timestamps: true }
);

const Admin = new model("Admin", AdminSchema);
module.exports = Admin;
