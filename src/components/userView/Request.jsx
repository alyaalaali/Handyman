import { Route, Routes } from "react-router-dom"
import SideBar from "../SideBar"
import ActiveRequests from "./ActiveRequests"
import CompletedRequests from "./CompletedRequests"
import RequestDetails from "./RequestDetails"
import RequestForm from "./RequestForm"
import ReviewForm from "./ReviewForm"

const Request = ({ user }) => {
  return (
    <>
      <SideBar />
      <div>
        <main className="main-content">
          <Routes>
            <Route path="/new" element={<RequestForm user={user} />} />
            <Route path="/active" element={<ActiveRequests />} />
            <Route path="/completed" element={<CompletedRequests />} />
            <Route path="/:requestId" element={<RequestDetails />} />
            <Route
              path="/:requestId/review/new"
              element={<ReviewForm user={user} />}
            />
          </Routes>
        </main>
      </div>
    </>
  )
}
export default Request
