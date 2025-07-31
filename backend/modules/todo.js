let mongoose = require("mongoose")

let todo_schema = new mongoose.Schema({
    todo  : String
})

let list = mongoose.model("todo_list" , todo_schema)

module.exports = list