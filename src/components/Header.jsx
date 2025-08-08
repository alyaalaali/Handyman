import { NavLink } from "react-router-dom"

const Header = () => {
    
    return (
        <header>
            
        <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/requests">Requests</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/about">About</NavLink>

        </nav>
        </header>
    )
}
export default Header