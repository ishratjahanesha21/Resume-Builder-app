/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sign_in from './auth/sign-in/index.jsx'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx'

//router
const router= createBrowserRouter([
  {
   
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      }
    ]
  },
  {
    path:"/auth/sign-in",
    element:<Sign_in/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
