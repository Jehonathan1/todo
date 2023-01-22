import mongoose from 'mongoose'
const { Schema, model } = mongoose;

export const todoSchema = new Schema({
    task: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
}, {timestamps:true});
  
export default model('Todo',todoSchema);

