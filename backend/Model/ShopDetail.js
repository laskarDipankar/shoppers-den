const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ShopDetailSchema = new Schema({
//   OwnerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
  ShopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },

  // oherDetails
});
