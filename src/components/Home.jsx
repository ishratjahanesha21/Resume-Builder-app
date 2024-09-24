import { UserButton } from "@clerk/clerk-react"
import Header from "./custom/Header"

const Home = () => {
  return (
    <div>
      <Header/>
      <UserButton/>
      <h1>Landing page</h1> 
    </div>
  )
}

export default Home