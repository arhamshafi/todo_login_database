let mongoose = require("mongoose")

let user_schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    password: String,
})

let new_user = mongoose.model(" new_user ", user_schema)

module.exports = new_user