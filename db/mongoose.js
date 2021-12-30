const mongoose = require("mongoose");

const dbUser = process.env.dbUser
const dbPass = process.env.dbPass

const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.jhegx.mongodb.net/newecommerce?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
});