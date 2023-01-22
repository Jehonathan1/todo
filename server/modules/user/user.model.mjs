import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true // prevent duplicate entries
      },
      password: {
        type: String,
        required: true
      }, 

      Todos: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Todo'
        }
      ]
}, {timestamps:true});
  
export default model('User',UserSchema);