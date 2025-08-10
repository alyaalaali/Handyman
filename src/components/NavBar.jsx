import { Link } from 'react-router-dom'
const Navbar = ({ user, handleLogOut }) => {
  let userOptions

  if (user) {
    userOptions = (
      <nav>
        <Link to="/">home</Link>
        <Link to="/requests">Requests</Link>
        <Link to="/login" onClick={handleLogOut}>
          logout
        </Link>
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
