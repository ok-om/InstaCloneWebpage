
import {RouterProvider} from "react-router-dom"
import "./Style.scss";
import router from "./Routes";
function App() {
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
