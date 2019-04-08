
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/tasks',{useNewUrlParser:true},(err)=>console.log(err?err:"db gucci"));

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        
    },
    description: {
        type: String,
        default: ""
    },
    completed:{
        type: Boolean,
        default: false,
    }

},{timestamps:true})



module.exports = mongoose.model('Task', TaskSchema);