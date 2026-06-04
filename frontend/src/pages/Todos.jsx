import {useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "../styles.css";

function Todos(){

    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    const [refresh,setRefresh] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
        }
    },[]);

    useEffect(()=>{
        async function fetchTodos(){
            let response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/todo/todos",{headers:{authorization : "Bearer " + localStorage.getItem("token")}});
            setTodos(response.data.todos);
        }
        fetchTodos();
    },[refresh])

    async function addTodo(){
        await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/todo/addtodo",{title:todo},{headers : {authorization : "Bearer " + localStorage.getItem("token")}});
        setRefresh(!refresh);
    }

    async function markAsDone(id){
        await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/todo/updatetodo/"+id,{},{headers : {authorization : "Bearer " + localStorage.getItem("token")}})
        setRefresh(!refresh);
    }

    async function deleteTodo(id){
        await axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/todo/deletetodo/"+id,{headers : {authorization : "Bearer " + localStorage.getItem("token")}});
        setRefresh(!refresh);
    }

    return(
        <div className="container">
            <h2> My Todos </h2>
            <div className="todo-input-row">
                <input type="text" placeholder="type your todo..." value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
                <button onClick={()=>addTodo()}> Add todo </button>
            </div>
            <div>
                {todos.map((todo)=>{
                    return <div className="todo-item" key={todo._id} style={{textDecoration: todo.done ? "line-through" : "none"}}>
                        <span className="todo-title"> {todo.title} </span>
                        <div className="todo-actions">
                            <button className="btn-done" onClick={()=>markAsDone(todo._id)}> Mark as done </button>
                            <button className="btn-delete" onClick={()=>deleteTodo(todo._id)}> Delete </button>
                        </div>    
                    </div>
                })}
            </div>
        </div>
    )
}

export default Todos;