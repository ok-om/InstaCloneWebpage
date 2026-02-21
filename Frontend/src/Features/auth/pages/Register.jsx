import React, { useState } from 'react'
import "../styles/form.scss"
import { Link } from 'react-router'
import axios from "axios"


const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

function submithandler(e) {
    e.preventDefault()

    
    axios.post("http://localhost:3000/api/auth/register",{
        username,
        email,
        password
    },{
        withCredentials:true
    }).then(()=>{
        setusername("");
        setemail("");
        setpassword("")
    })
}
  return (
     <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={submithandler} >
         <input onInput={(e)=>{
            setusername(e.target.value)
         }} type="text" placeholder='Enter Username' value={username} />
         <input onInput={(e)=>{
            setemail(e.target.value)
         }} type="text" placeholder='Enter Email' value={email} />
         <input onInput={(e)=>{
            setpassword(e.target.value)
         }} type="text" placeholder='Enter Password' value={password} />
         <button>Submit</button>
        </form>
        <p>Already have an Account <Link to="/login">Click here..</Link></p>
      </div>
    </main>
  )
}

export default Register
