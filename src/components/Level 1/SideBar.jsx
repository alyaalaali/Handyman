import { Link } from "react-router-dom"

const SideBar = () => {

    return (
        <>
        <header className="side">
            <br />
        <Link to="/user/dashboard/create">Create Request</Link>
        <Link to="/user/dashboard/requests/active">Active Requests</Link>
        <Link to="/completed">Completed Requests</Link>
        </header>
        </>
    )
}
export default SideBar