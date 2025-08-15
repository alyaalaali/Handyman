import "./App.css"
import "./forms.css"
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Navbar from "./components/NavBar"
import Home from "./components/Home"
import Request from "./components/userView/Request"
import { CheckSession } from "./services/Auth"
import ProviderApplications from "./components/providerView/ProviderApplications"
import MyProfile from "./components/providerView/MyProfile"
import ProviderCategories from "./components/providerView/ProviderCategories"
import CategoryRequests from "./components/providerView/CategoryRequests"
import ProRequestDetails from "./components/providerView/ProRequestDetials"
import ProviderProfile from "./components/userView/ProviderProfile"

const App = () => {
  const [user, setUser] = useState(null)
  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
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
          <Route path="/profile/:id" element={<ProviderProfile />} />

          {user?.userType === "user" && (
            <>
              <Route path="/requests/*" element={<Request user={user} />} />
            </>
          )}
          {user?.userType === "provider" && (
            <>
              <Route path="/profile/me" element={<MyProfile />} />
              <Route path="/categories" element={<ProviderCategories />} />
              <Route
                path="/categories/:categoryName"
                element={<CategoryRequests />}
              />
              <Route
                path="/requests/:id"
                element={<ProRequestDetails user={user} />}
              />

              <Route
                path="/applications"
                element={<ProviderApplications user={user} />}
              />
            </>
          )}
        </Routes>
      </div>
    </>
  )
}

export default App
