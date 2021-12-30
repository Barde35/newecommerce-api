const mongoose = require("mongoose");
const url = 'mongodb+srv://Barde35:Piojos01.@cluster0.jhegx.mongodb.net/newecommerce?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
});
