import { useContext } from "react";
import { authcontext } from "../auth.context";

export function useAuth() {
    
    const context = useContext(authcontext)

    return context
}