import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Client, { BASE_URL } from "../../services/api"
const CompletedRequests = () => {
  const [CompletedRequests, setCompletedRequests] = useState([])

  useEffect(() => {
    const getCompletedRequsts = async () => {
      const response = await Client.get(`${BASE_URL}/request/completed`)
      setCompletedRequests(response.data)
    }
    getCompletedRequsts()
  }, [])

  return (
    <div className="request-container">
      <h2>Completed Requests</h2>
      {CompletedRequests.length === 0 ? (
        <p className="no-requests">No completed requests found</p>
      ) : (
        <div className="request-list">
          {CompletedRequests.map((request) => (
            <Link
              key={request._id}
              to={`/requests/${request._id}`}
              className="request-item"
            >
              <img
                src="/images/default-pfp.jpg"
                alt="Profile"
                className="request-pfp"
              />

              <div className="request-content">
                <div className="request-header">
                  <h3 className="request-title">{request.title}</h3>
                  <span className="request-date">
                    {new Date(request.createdAt).toLocaleDateString()}
                  </span>{" "}
                </div>

                <p>Description: {request.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
export default CompletedRequests
