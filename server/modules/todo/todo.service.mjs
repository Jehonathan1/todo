import log from '@ajar/marker'
import Todo from "./todo.model.mjs"
import User from "../user/user.model.mjs"

// post - /api/todos/
export const create_todo = async (payload) => {
    let todo = await Todo.create(payload);
    return todo;
}
// get - /api/todos/
export const get_all_todos = async () => {
    const todos = await Todo.find();//.populate('author')
    return todos;
}
// get - /api/todos/user/:id
export const get_user_todos = async (user_id) => {
    const user_with_Todos = await User.findById(user_id);//.populate('Todos')
    return user_with_Todos;
}
// get - /api/todos/:id
export const get_todo_by_id = async (todo_id) => {
    const todo = await Todo.findById(todo_id)
    return todo;
}
// put - /api/todos/:id
export const update_todo_by_id = async (todo_id, payload) => {
    const todo = await Todo.findByIdAndUpdate(todo_id, payload, {new: true,upsert: true});
    return todo;
}
// delete - /api/Todos/:id
export const delete_todo_by_id = async (todo_id) => {
    const todo = await Todo.findByIdAndRemove(todo_id);
    return todo;
}