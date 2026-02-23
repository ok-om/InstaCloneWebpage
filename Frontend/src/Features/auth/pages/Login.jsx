import React, { useState } from 'react'
import { Link } from 'react-router'
import "../styles/form.scss"
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {
  const {user,loading,handellogin} = useAuth()

const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
  const navigate = useNavigate();
  

  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }

  const handelSubmit = async (e) =>{
    e.preventDefault()

    await handellogin(username,password).then(res=>{
           navigate("/");
          setusername("");
        setpassword("");
     })
      
    
    
}
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handelSubmit} >
         <input onInput={(e)=>{
            setusername(e.target.value)
         }} type="text" placeholder='Enter Username' name='username' id='username' value={username} />
         <input onInput={(e)=>{
            setpassword(e.target.value)
         }} type="password" placeholder='Enter Password' name='password' id='password' value={password} />
         <button className='button primary-button'>Submit</button>
        </form>
        <p>Dont have Account ?<Link to="/register"> Create One.</Link></p>
      </div>
    </main>
  )
}

export default Login
