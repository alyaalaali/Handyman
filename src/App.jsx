import './App.css'
import { use, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Request from './components/userView/Request'
import { CheckSession } from './services/Auth'
import ProviderDashboard from './components/providerView/ProviderDashboard'
import UserDashboard from './components/userView/UserDashboard'
import ReviewForm from './components/userView/ReviewForm'
import MyProfile from './components/providerView/MyProfile'
import PublicProfile from './components/PublicProfile'
import ProviderCategories from './components/providerView/ProviderCategories'
import CategoryRequests from './components/providerView/CategoryRequests'
import ProRequestDetails from './components/providerView/ProRequestDetials'
import ApplicantsList from './components/userView/ApplicantList'
import ProviderProfile from './components/userView/ProviderProfile'
import ProviderApplications from './components/providerView/ProviderApplications'

const App = () => {
  const [user, setUser] = useState(null)
  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    console.log('user is:', user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
      console.log('user is:', user)
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

          <Route
            path="/requests/:requestId/applicants"
            element={<ApplicantsList user={user} />}
          />

          {user && (
            <>
              <Route path="/requests/*" element={<Request user={user} />} />
            </>
          )}

          {user?.userType === 'user' && (
            <Route path="/dashboard" element={<UserDashboard user={user} />} />
          )}
          {user?.userType === 'provider' && (
            <>
              <Route
                path="/dashboard"
                element={<ProviderDashboard user={user} />}
              />
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
