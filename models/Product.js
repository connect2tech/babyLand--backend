const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ratings: {
    count: { type: Number, default: 0 },
    sum: { type: Number, default: 0 },
    average: { type: Number, default: 0 },
  },
  numReviews: { type: Number, default: 0 },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      Comments: String,
      ratings: Number,
    },
  ],
});
module.exports = mongoose.model("Product", productSchema);
