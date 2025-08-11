import SideBar from "../SideBar"
import { Routes, Route } from "react-router-dom"
import RequestForm from "./RequestForm"
import ActiveRequests from "./ActiveRequests"
import CompletedRequests from "./CompletedRequests"
import RequestDetails from "./RequestDetails"

const Request = ({ user }) => {
  return (
    <>
      <SideBar />
      <div>
        <Routes>
          <Route path="/new" element={<RequestForm user={user} />} />
          <Route path="/active" element={<ActiveRequests />} />
          <Route path="/completed" element={<CompletedRequests />} />
          <Route path="/:requestId" element={<RequestDetails />} />
        </Routes>
      </div>
    </>
  )
}
export default Request
