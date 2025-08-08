import { Link } from "react-router-dom"

const SideBar = () => {

    return (
        <>
        <nav className="side">
            <br />
        <Link to="/create">Create Request</Link>
        <Link to="/active">Active Requests</Link>
        <Link to="/completed">Completed Requests</Link>
        </nav>
        </>
    )
}
export default SideBar