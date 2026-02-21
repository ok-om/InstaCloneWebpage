import React, { useState } from 'react'
import { Link } from 'react-router'
import "../styles/form.scss"
import axios from "axios"

const Login = () => {
const [username, setusername] = useState("")
    const [password, setpassword] = useState("")



  function submithandler(e) {
    e.preventDefault()

    
    axios.post("http://localhost:3000/api/auth/login",{
        username,
        password
    },{
        withCredentials:true
    }).then(()=>{
        setusername("");
        setpassword("");
    })
}
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submithandler} >
         <input onInput={(e)=>{
            setusername(e.target.value)
         }} type="text" placeholder='Enter Username' value={username} />
         <input onInput={(e)=>{
            setpassword(e.target.value)
         }} type="text" placeholder='Enter Password' value={password} />
         <button>Submit</button>
        </form>
        <p>Dont have Account <Link to="/register">Click here..</Link></p>
      </div>
    </main>
  )
}

export default Login
