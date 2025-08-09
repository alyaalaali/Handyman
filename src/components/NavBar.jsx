import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        {/* <Link to="/register">Register</Link> */}
      </nav>
    </>
  )
}
export default Navbar
