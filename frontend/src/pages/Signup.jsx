import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Signup(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    async function submitform(){
        await axios.post("http://localhost:3000/api/auth/signup",{username,email,password})
        console.log("form submitted to backend");
        navigate("/login");
    }

    return (
        <div>
            <input type="text" placeholder="enter your username" value={username} onChange={(e)=>{setUsername(e.target.value)}} ></input>
            <input type="text" placeholder="enter your email-id" value={email} onChange={(e)=>{setEmail(e.target.value)}} ></input>
            <input type="text" placeholder="enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} ></input>
            <button onClick={()=>{submitform()}}> Submit </button>
        </div>
    )
}

export default Signup;