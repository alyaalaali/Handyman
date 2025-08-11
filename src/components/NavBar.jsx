import { Link } from "react-router-dom"
const Navbar = ({ user, handleLogOut }) => {
  let userOptions

  if (user?.userType === "user") {
    userOptions = (
      <nav>
        <Link to="/dashboard">User Dashboard</Link>
        <Link to="/requests">Requests</Link>
        <Link to="/login" onClick={handleLogOut}>
          logout
        </Link>
      </nav>
    )
  }
  if (user?.userType === "provider") {
    userOptions = (
      <nav>
        <Link to="/dashboard">Provider Dashboard</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/login" onClick={handleLogOut}>
          logout
        </Link>
        <Link to="/profile/me">Profile</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">home</Link>
      <Link to="/login">login</Link>
      <Link to="/register">Register</Link>
    </nav>
  )

  return <nav>{user ? userOptions : publicOptions}</nav>
}
export default Navbar
