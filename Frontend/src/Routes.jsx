import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Register from "./Features/auth/pages/Register"
import Login from './Features/auth/pages/login';

const router = createBrowserRouter([
  {
    path:"/",
    element: <h1>Welcome to App</h1>
  },
      {
        path:"/login",
        element: <Login/>,
      },{
        path:"/register",
        element:<Register/>
      }
    ])

export default router
