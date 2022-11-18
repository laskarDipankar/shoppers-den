const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ShopSchema = new Schema({
  shopName: {
    type: String,
    required: true,
    trim: true,
  },
  State: {
    type: String,
    required: true,
    trim: true,
  },
  City: {
    type: String,
    required: true,
    trim: true,
  },
  ShopDetails: {
    isActive: {
      type: String,
    },
    landmark: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    address: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    Gallery: [
      {
        type: String,
      },
    ],
  },
  Type: {
    type: String,
  },
  Category: {
    type: String,
  },
  GovernmentID: {
    type: String,
    required: true,
    trim: true,
  },
  GovernmentIDImage: {
    type: String,
    required: true,
    trim: true,
  },
  ShopImage: {
    type: String,
    required: true,
    trim: true,
  },
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  verified: {
    type: String,
    default: false,
  },
});
