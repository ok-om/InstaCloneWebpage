
import {RouterProvider} from "react-router-dom"
import "./Features/shared/global.scss";
import router from "./Routes";
import { Authprovider } from "./Features/auth/auth.context";
import { PostContextProviuder } from "./Features/post/post.context";
function App() {
  
  return (
    <>
    <Authprovider>
      <PostContextProviuder>
    <RouterProvider router={router}/>
      </PostContextProviuder>
    </Authprovider>
    </>
  )
}

export default App
