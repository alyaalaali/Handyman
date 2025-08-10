import ActiveRequests from "./ActiveRequests"
import { Route, Routes } from "react-router-dom"

const Requests = () => {
    return (
        <>
        
        <div className="requests">
        <h2>Requests</h2>
        </div>
        <Routes>
        <Route path="active" element={<ActiveRequests />} /> 
        <Route path="completed" element={<Requests />} /> 
        </Routes>

        </>
        
    )
}
export default Requests