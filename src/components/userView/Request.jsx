import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import SideBar from "../SideBar"
import ActiveRequests from "./ActiveRequests"
import CompletedRequests from "./CompletedRequests"
import RequestDetails from "./RequestDetails"
import RequestForm from "./RequestForm"
import ReviewForm from "./ReviewForm"

const Request = ({ user }) => {
  const [hasReviewed, setHasReviewed] = useState(false)
  
  return (
    <>
      <SideBar />
      <div>

        <main className="main-content">
          <Routes>
          <Route path="/new" element={<RequestForm user={user} />} />
          <Route path="/active" element={<ActiveRequests />} />
          <Route path="/completed" element={<CompletedRequests />} />
          <Route path="/:requestId" element={<RequestDetails hasReviewed={hasReviewed} setHasReviewed={setHasReviewed} user={user}/>} />
           <Route path="/:requestId/review/new" element={<ReviewForm user={user} hasReviewed={hasReviewed} setHasReviewed={setHasReviewed}/>} />

          </Routes>
        </main>
      </div>
    </>
  )
}
export default Request
