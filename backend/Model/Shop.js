const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ShopSchema = new Schema(
  {
    shopName: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
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
      gallery: {
        shopLogo: {
          type: String,
        },
        shopServicesImage: {
          type: String,
        },
      },

      timings: {
        openingTime: {
          type: String,
        },
        closingTime: {
          type: String,
        },
      },
      delivery: {
        type: Boolean,
        default: false,
      },
      location: {
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
      type: {
        type: String,
      },
      category: {
        type: String,
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
      trim: true,
    },
    governmentIDImage: {
      type: String,
      trim: true,
    },
    shopImage: {
      type: String,
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
  },
  { timestamps: true }
);

const Shop = new model("Shop", ShopSchema);
module.exports = Shop;
