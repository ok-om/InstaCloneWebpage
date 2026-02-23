import { createContext,useState,useEffect} from "react";

export const authcontext = createContext()


export function Authprovider({ children }) {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    

    return(
          <authcontext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
          </authcontext.Provider>
    )
}