const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },

    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product"
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product_Category", productSchema);