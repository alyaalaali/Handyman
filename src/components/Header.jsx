import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/requests">Requests</NavLink>
      <NavLink to="/Signup">Sign up</NavLink>
      <NavLink to="/Login">Login</NavLink>
    </nav>
  )
}
export default NavBar
