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
    <div className="active-requests">
      <h2>Completed Requests</h2>
      {CompletedRequests.length === 0 ? (
        <p>No completed requests found</p>
      ) : (
        <ul className="requestlist">
          {CompletedRequests.map((request) => (
            <Link key={request._id} to={`/requests/${request._id}`} className="request-link">
              <li className="request-item">
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
