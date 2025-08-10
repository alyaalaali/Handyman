import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <>
      <nav>
        <Link to="/requests/new">Create Request</Link>
        <Link to="/requests/active">Active Requests</Link>
        <Link to="/requests/completed">Completed Requests</Link>
      </nav>
    </>
  ) 
}

export default SideBar
