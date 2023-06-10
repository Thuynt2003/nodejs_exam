const mongoose = require("mongoose");
const user = new mongoose.Schema({
    first_name:String,
    last_name: String,
    mobie_number: Number,
    user_name:String,
    password : Number
});

module.exports = mongoose.model("User",user);