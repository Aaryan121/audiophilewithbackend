const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    product: {
      type: String,
      require: [true, "Please add product name"],
    },
    price: {
      type: Number,
      require: [true, "Please add price of product"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
