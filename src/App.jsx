/* eslint-disable no-unused-vars */
import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/custom/Header";




export default function App() {
 const {user,isSignedIn,isLoaded}=useUser()

 if(!isSignedIn&&isLoaded){
  return <Navigate to={'/auth/sign-in'}></Navigate>
 }
  return (
   <>
   <Header/>
<Outlet/>
   </>
  )
}