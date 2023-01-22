import express from "express"
import log from '@ajar/marker'
import raw from "../../middleware/route.async.wrapper.mjs"
import * as todo_service from "./todo.service.mjs"

const router = express.Router()
router.use(express.json())
   

router.route("/") 
    .post(raw(async (req, res) => { // CREATE A NEW TODO
      const todo = await todo_service.create_todo(req.body);
      res.status(200).json(todo);
    }))
    .get(raw(async ( _ , res) => { // GET ALL TODOS
      const todos = await todo_service.get_all_todos();
      res.status(200).json(todos);
    }))

router.get("/user/:id", raw( async (req, res) => { // GET ALL TODOS OF A USER
  const user = await todo_service.get_user_todos(req.params.id);
  res.status(200).json(user);
})) 


router.route("/:id") 
    .get(raw(async (req, res) => { // GETS TODO BY ID
      const todo = await todo_service.get_todo_by_id(req.params.id)
      if (!todo) return res.status(404).json({ status: "No todo found." });
      res.status(200).json(todo);
    })) 
    .put(raw(async (req, res) => { // UPDATE TODO BY ID 
      const todo = await todo_service.update_todo_by_id(req.params.id,req.body);
      res.status(200).json(todo);
    }))
    .delete(raw(async (req, res) => { // DELETE TODO BY ID
      const todo = await todo_service.delete_todo_by_id(req.params.id);
      if (!todo) return res.status(404).json({ status: "No todo found." });
      res.status(200).json(todo);
    }))

export default router;