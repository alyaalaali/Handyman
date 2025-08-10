import { Link, Route, Routes } from 'react-router-dom'

import RequestForm from '../Level 2/RequestForm'
import Requests from '../Level 2/Requests'


const UserDashboard = () => {
    return (
        <>
         <h2>User Dashboard</h2>
        <RequestForm  />
        <Requests />
        </>
    )
}
export default UserDashboard