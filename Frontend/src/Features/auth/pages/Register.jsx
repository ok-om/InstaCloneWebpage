import React, { useState } from 'react'
import "../styles/form.scss"
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const {user,loading,handelregister} = useAuth()
  
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate()

const handelSubmit = async (e) =>{
    e.preventDefault()

    await handelregister(username,email,password).then(res=>{
        navigate("/")
            setusername("");
        setemail("");
        setpassword("")
    })
    
    
}

   if (loading) {
    return (<main><h1>Loading...</h1></main>)
   }


  return (
     <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handelSubmit} >
         <input onInput={(e)=>{
            setusername(e.target.value)
         }} type="text" placeholder='Enter Username' name='username' id='username' value={username} />
         <input onInput={(e)=>{
            setemail(e.target.value)
         }} type="email" placeholder='Enter Email' name='email' id='email' value={email} />
         <input onInput={(e)=>{
            setpassword(e.target.value)
         }} type="password" placeholder='Enter Password' name='password' id='password' value={password} />
         <button className='button primary-button'>Submit</button>
        </form>
        <p>Already have an Account ? <Link to="/login">Login.</Link></p>
      </div>
    </main>
  )
}

export default Register
