import { useState, useEffect } from "react"
import { BASE_URL } from "../../services/api"
import { Link } from "react-router-dom"
import Client from "../../services/api"
const ActiveRequests = () => {
  const [activeRequests, setActiveRequests] = useState([])

  useEffect(() => {
    const getActiveRequsts = async () => {
      const response = await Client.get(`${BASE_URL}/request/active`)
      setActiveRequests(response.data)
    }
    getActiveRequsts()
  }, [])

  return (
    <div className="active-requests">
      <h2>Active Requests</h2>
      {activeRequests.length === 0 ? (
        <p>No active requests found</p>
      ) : (
        <ul className="requestlist">
          {activeRequests.map((request) => (
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
export default ActiveRequests
