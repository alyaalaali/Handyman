import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <>
      <nav className="sidebar">
        <Link className="sidebar-link" to="/requests/new">
          Create Request
        </Link>
        <Link className="sidebar-link" to="/requests/active">
          Active Requests
        </Link>
        <Link className="sidebar-link" to="/requests/completed">
          Completed Requests
        </Link>
      </nav>
    </>
  )
}

export default SideBar
