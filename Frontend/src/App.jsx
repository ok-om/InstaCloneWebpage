
import {RouterProvider} from "react-router-dom"
import "./Style.scss";
import router from "./Routes";
import { Authprovider } from "./Features/auth/auth.context";
function App() {
  
  return (
    <>
    <Authprovider>
    <RouterProvider router={router}/>
    </Authprovider>
    </>
  )
}

export default App
