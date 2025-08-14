import { Link } from "react-router-dom"
const Navbar = ({ user, handleLogOut }) => {
  let userOptions

  if (user?.userType === "user") {
    userOptions = (
      <div className="nav-links">
        <Link className="nav-link" to="/requests">
          Requests
        </Link>
        <Link className="nav-link" to="/login" onClick={handleLogOut}>
          logout
        </Link>
      </div>
    )
  }
  if (user?.userType === "provider") {
    userOptions = (
      <div className="nav-links">
        <Link className="nav-link" to="/categories">
          Categories
        </Link>
        <Link className="nav-link" to="/applications">
          Applications
        </Link>
        <Link className="nav-link" to="/login" onClick={handleLogOut}>
          logout
        </Link>
        <Link className="nav-link" to="/profile/me">
          Profile
        </Link>
      </div>
    )
  }

  const publicOptions = (
    <div className="nav-links">
      <Link className="nav-link" to="/">
        home
      </Link>
      <Link className="nav-link" to="/login">
        login
      </Link>
      <Link className="nav-link" to="/register">
        Register
      </Link>
    </div>
  )

  return <nav className="navbar">{user ? userOptions : publicOptions}</nav>
}
export default Navbar
