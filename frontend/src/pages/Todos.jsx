import {useState,useEffect} from "react";
import axios from "axios";

function Todos(){

    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    const [refresh,setRefresh] = useState(false);

    useEffect(()=>{
        async function fetchTodos(){
            let response = await axios.get("http://localhost:3000/api/todo/todos",{headers:{authorization : "Bearer " + localStorage.getItem("token")}});
            setTodos(response.data.todos);
        }
        fetchTodos();
    },[refresh])

    async function addTodo(){
        await axios.post("http://localhost:3000/api/todo/addtodo",{title:todo},{headers : {authorization : "Bearer " + localStorage.getItem("token")}});
        setRefresh(!refresh);
    }

    async function markAsDone(id){
        await axios.put("http://localhost:3000/api/todo/updatetodo/"+id,{},{headers : {authorization : "Bearer " + localStorage.getItem("token")}})
        setRefresh(!refresh);
    }

    async function deleteTodo(id){
        await axios.delete("http://localhost:3000/api/todo/deletetodo/"+id,{headers : {authorization : "Bearer " + localStorage.getItem("token")}});
        setRefresh(!refresh);
    }

    return(
        <div>
            <input type="text" placeholder="type your todo..." value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
            <button onClick={()=>addTodo()}> Add todo </button>
            <div>
                {todos.map((todo)=>{
                    return <div key={todo._id} style={{textDecoration: todo.done ? "line-through" : "none"}}>
                        {todo.title}
                        <button onClick={()=>markAsDone(todo._id)}> Mark as done </button>
                        <button onClick={()=>deleteTodo(todo._id)}> Delete </button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Todos;