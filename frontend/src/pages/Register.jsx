import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [form,setForm]=useState({
name:"",
email:"",
password:"",
course:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const register=async()=>{
await API.post("/register",form);
alert("Registration Successful");
navigate("/login");
};

return(
<div>
<h2>Register</h2>

<input name="name" placeholder="Name" onChange={handleChange}/>
<br/>

<input name="email" placeholder="Email" onChange={handleChange}/>
<br/>

<input name="password" type="password" placeholder="Password" onChange={handleChange}/>
<br/>

<input name="course" placeholder="Course" onChange={handleChange}/>
<br/>

<button onClick={register}>Register</button>

</div>
);
}

export default Register;