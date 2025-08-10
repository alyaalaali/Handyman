import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../../services/api"
import { Link } from "react-router-dom"

const CompletedRequests = () => {
  const [CompletedRequests, setCompletedRequests] = useState([])

  useEffect(() => {
    const getCompletedRequsts = async () => {
      const response = await axios.get(`${BASE_URL}/request/completed`)
      setCompletedRequests(response.data)
    }
    getCompletedRequsts()
  }, [])

  return (
    <div className="active-requests">
      <h2>Active Requests</h2>
      {CompletedRequests.length === 0 ? (
        <p>No completed requests found</p>
      ) : (
        <ul className="requestlist">
          {CompletedRequests.map((request) => (
            <Link to={`/requests/${request._id}`} className="request-link">
              <li key={request._id} className="request-item">
                <h3>{request.title}</h3>
                <p>Description: {request.description}</p>
                <p>{new Date(request.createdAt).toLocaleDateString()}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}
export default CompletedRequests
