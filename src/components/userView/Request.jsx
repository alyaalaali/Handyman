import SideBar from "../SideBar"
import { Routes, Route } from "react-router-dom"
import RequestForm from "./RequestForm"
import ActiveRequests from "./ActiveRequests"
import CompletedRequests from "./CompletedRequests"
const Request = () => {
  return (
    <>
      <SideBar />
      <div>
        <Routes>
          <Route path="/new" element={<RequestForm />} />
          <Route path="/active" element={<ActiveRequests />} />
          <Route path="/completed" element={<CompletedRequests />} />
        </Routes>
      </div>
    </>
  )
}
export default Request
