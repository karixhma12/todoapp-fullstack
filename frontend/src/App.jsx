import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import {BrowserRouter} from "react-router-dom";
import { Routes } from "react-router-dom";
import {Route} from "react-router-dom";
import {Navigate} from "react-router-dom";


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to = "/login"/>}/>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/todos" element={<Todos/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;