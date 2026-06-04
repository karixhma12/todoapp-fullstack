import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import "../styles.css";

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function submitform(){
        const response = await axios.post("http://localhost:3000/api/auth/login",{email,password});
        console.log("login form submitted!");
        localStorage.setItem("token",response.data.token);
        navigate("/todos");
        
    }

    return(
        <div className="container">
            <h2> Login </h2>
            <input type="text" placeholder="enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type="text" placeholder="enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={()=>submitform()} className="primary"> Login </button>
            <div className="link">
                Don't have an account? <a href="/signup"> Sign Up </a>
            </div>
        </div>
    )
}

export default Login;