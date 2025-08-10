import "./App.css"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Navbar from "./components/NavBar"
import Home from "./components/Home"
import Request from "./components/userView/Request"

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/requests/*" element={<Request />} />
        </Routes>
      </div>
    </>
  )
}

export default App
