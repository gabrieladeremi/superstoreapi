const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Product_Category",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);