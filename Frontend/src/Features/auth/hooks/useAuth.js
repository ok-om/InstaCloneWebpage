import { useContext } from "react";
import { authcontext } from "../auth.context";
import { login,register,getme } from "../services/auth.api";


export function useAuth() {
    
    const context = useContext(authcontext)

    const {user,setUser,loading,setLoading} = context


const handellogin = async (username,password)=>{

setLoading(true)
  
const response = await login(username,password)
setUser(response.user)
  
setLoading(false)

}

const handelregister = async (username,email,password) => {
        
setLoading(true)
       
const response = await register(username,email,password)
setUser(response.user)
       
setLoading(false)

}


    return {
         user,
        loading,
        handellogin,
        handelregister
       }
    
}