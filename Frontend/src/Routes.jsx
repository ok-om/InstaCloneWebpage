import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Register from "./Features/auth/pages/Register"
import Login from './Features/auth/pages/login';
import Feed from './Features/post/pages/Feed';
import CreatePost from './Features/post/pages/CreatePost';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Feed />   
  },
      {
        path:"/login",
        element: <Login/>,
      },{
        path:"/register",
        element:<Register/>
      },
      {
        path:"/create-post",
        element:<CreatePost/>
      }
    ])

export default router
