import React, { useState } from 'react'
import { Link } from 'react-router'
import "../styles/form.scss"
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {
const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
  const navigate = useNavigate();
  const {handellogin,Loading} = useAuth()

  if(Loading){
    return(
      <h1>Loading...</h1>
    )
  }

  function submithandler(e) {
    e.preventDefault()

     handellogin(username,password).then(res=>{
      console.log(res)
           navigate("/");
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
