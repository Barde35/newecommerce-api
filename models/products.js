const mongoose = require("mongoose");

const { Schema } = mongoose

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

const Product = mongoose.model("Product", schema);

module.exports = Product