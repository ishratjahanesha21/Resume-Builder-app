/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Signin from './auth/sign-in/Signin.jsx'

//secreat code for authentication 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
//router
const router= createBrowserRouter([
  {
   
    element:<App/>,
    children:[
     
      {
        path:"/dashboard",
        element:<Dashboard/>
      }
    ]
  },
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/auth/sign-in",
    element:<Signin/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
