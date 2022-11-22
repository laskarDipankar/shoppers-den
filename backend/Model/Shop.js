const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ShopSchema = new Schema({
  shopName: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  shopDetails: {
    isActive: {
      type: Boolean,
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
    gallery: [
      {
        type: String,
      },
    ],
    timings: {
      openingTime: {
        type: String,
      },
      closingTIme: {
        type: String,
      },
    },
  },
  type: {
    type: String,
  },
  category: {
    type: String,
  },
  governmentID: {
    type: String,
    required: true,
    trim: true,
  },
  governmentIDImage: {
    type: String,
    required: true,
    trim: true,
  },
  shopImage: {
    type: String,
    required: true,
    trim: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  verified: {
    type: String,
    default: false,
  },
});

const Shop = new model("Shop", ShopSchema);
module.exports = Shop;
