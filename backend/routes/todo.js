const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const User = require("../models/User");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware);

//get all todos for the logged in user (read)
router.get("/todos",async function(req,res){
    const email = req.email;
    const user = await User.findOne({
        email : email
    })
    const userId = user._id;

    const todos = await Todo.find({
        userId : userId
    })

    res.json({todos});
})

//create a new todo (create)
router.post("/addtodo",async function(req,res){
    const title = req.body.title;
    const email = req.email;
    const user = await User.findOne({
        email : email
    })
    const userId = user._id ; 
    await Todo.create({
        userId : userId,
        title : title,
        done : false
    })
    res.json({message : "Todo added!"});
})


//mark a todo as done (update)
router.put("/updatetodo/:id",async function(req,res){
    const id = req.params.id;
    await Todo.findByIdAndUpdate(id,{done:true});
    res.json({message : "todo successfully updated!"});
})



//delete a todo (delete)
router.delete("/deletetodo/:id",async function(req,res){
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.json({message: "Todo successfully deleted!"});
})


module.exports = router;