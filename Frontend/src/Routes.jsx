import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Register from "./Features/auth/pages/Register"
import Login from './Features/auth/pages/login';

const router = createBrowserRouter([
      {
        path:"/login",
        element: <Login/>,
      },{
        path:"/register",
        element:<Register/>
      }
    ])

export default router
