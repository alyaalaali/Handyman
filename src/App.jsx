import "./App.css"
import { use, useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Navbar from "./components/NavBar"
import Home from "./components/Home"
import Request from "./components/userView/Request"
import { CheckSession } from "./services/Auth"

const App = () => {
  const [user, setUser] = useState(null)
  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    console.log("user is:", user)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
      console.log("user is:", user)
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  return (
    <>
      <Navbar user={user} handleLogOut={handleLogOut} />
      <div>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/requests/*" element={<Request user={user} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
