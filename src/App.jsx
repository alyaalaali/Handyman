
import { useState } from "react" // Hooks import

import { Routes, Route } from "react-router-dom" // Routes & Route branches import  

import "./App.css"// Styling import

// Components imports
import Header from './components/Header'
import Home from './components/Home'
import WorkerType from './components/WorkerType'
import UserSignUp from './components/UserSignUp'
import ProSignUp from './components/ProSignUp'
import SignIn from './components/SignIn'
import UseDashboard from './components/UseDashboard'
import SideBar from "./components/SideBar"
// import ProviderProfile from './components'

const App = () => {
  return (
    <>
    <header>
      <Header />
      <SideBar />
    </header>
    <br />
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worker/type" element={<WorkerType />} />
        <Route path="/user/sign-up" element={<UserSignUp />}/>
        <Route path="/provider/sign-up" element={<ProSignUp />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/dashboard" element={<UseDashboard />}/>

        </Routes>
      </div>

    </>
  )
}

export default App
