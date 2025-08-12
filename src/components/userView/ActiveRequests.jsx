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
    <div className="request-container">
      <h2>Active Requests</h2>
      {activeRequests.length === 0 ? (
        <p className="no-requests">No active requests found</p>
      ) : (
        <div className="request-list">
          {activeRequests.map((request) => (
            // <li key={request._id} className="request-item">
            <Link to={`/requests/${request._id}`} className="request-item">
              <img
                src="/images/default-pfp.jpg"
                alt="Profile"
                className="request-pfp"
              />
              <div className="request-content">
                <div className="request-header">
                  <h3 className="request-title">{request.title}</h3>
                  <span className="request-date">
                    <p>{new Date(request.createdAt).toLocaleDateString()}</p>
                  </span>
                </div>

                <p className="request-description">{request.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
export default ActiveRequests
