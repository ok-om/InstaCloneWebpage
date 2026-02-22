import { createContext,useState,useEffect} from "react";
import { login,register,getme } from "./services/auth.api";
export const authcontext = createContext()


export function Authprovider({ children }) {


    const [user, setuser] = useState(null)
    const [Loading, setLoading] = useState(false)
    
 const handellogin = async (username,password)=>{

        setLoading(true)
  try{
    const response = await login(username,password)
  setuser(response.user)
  }
  catch(err){
    console.log(err)
  }finally{
    setLoading(false)
  }
    }

    const handelregister = async (username,email,password) => {
        setLoading(true)
        try{
        const response = await register(username,email,password)
        setuser(response.user)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    return(
          <authcontext.Provider value={{user,Loading,handellogin,handelregister}}>
            {children}
          </authcontext.Provider>
    )
}