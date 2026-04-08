import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate=useNavigate();

const [form,setForm]=useState({
email:"",
password:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const login=async()=>{

const res=await API.post("/login",form);

localStorage.setItem("token",res.data.token);

alert("Login Successful");

navigate("/dashboard");
};

return(
<div>
<h2>Login</h2>

<input name="email" placeholder="Email" onChange={handleChange}/>
<br/>

<input name="password" type="password" placeholder="Password" onChange={handleChange}/>
<br/>

<button onClick={login}>Login</button>

</div>
);
}

export default Login;