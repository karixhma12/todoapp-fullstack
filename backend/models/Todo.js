const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userId : {type: mongoose.Schema.Types.ObjectId , ref:"User" , required:true},
    title : {type:String, required: true},
    done : {type: Boolean, default: false, required: true}
})

const Todo = mongoose.model("Todo",todoSchema);

module.exports = Todo;