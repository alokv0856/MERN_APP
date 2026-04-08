import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Dashboard(){

const navigate=useNavigate();

const [password,setPassword]=useState({
oldPassword:"",
newPassword:""
});

const [course,setCourse]=useState("");

const updatePassword=async()=>{
await API.put("/update-password",password);
alert("Password Updated");
};

const updateCourse=async()=>{
await API.put("/update-course",{course});
alert("Course Updated");
};

const logout=()=>{
localStorage.removeItem("token");
navigate("/login");
};

return(
<div>

<h2>Dashboard</h2>

<h3>Update Password</h3>

<input
placeholder="Old Password"
onChange={(e)=>setPassword({...password,oldPassword:e.target.value})}
/>
<br/>

<input
placeholder="New Password"
onChange={(e)=>setPassword({...password,newPassword:e.target.value})}
/>
<br/>

<button onClick={updatePassword}>Update Password</button>

<hr/>

<h3>Change Course</h3>

<input
placeholder="New Course"
onChange={(e)=>setCourse(e.target.value)}
/>
<br/>

<button onClick={updateCourse}>Update Course</button>

<hr/>

<button onClick={logout}>Logout</button>

</div>
);
}

export default Dashboard;