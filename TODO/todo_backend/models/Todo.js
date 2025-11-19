<<<<<<< HEAD
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    done:{
      type:Boolean,
      default:false,
    },
   
}, 
{
  timestamps:true,
}
);

const TodoModel = mongoose.model('tasks', todoSchema);

module.exports = TodoModel;
=======
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    done:{
      type:Boolean,
      default:false,
    },
   
}, 
{
  timestamps:true,
}
);

const TodoModel = mongoose.model('tasks', todoSchema);

module.exports = TodoModel;
>>>>>>> a5c48e678dd70407d98af8cebb5272faca1a8a76
