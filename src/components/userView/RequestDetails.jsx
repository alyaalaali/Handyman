import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Client, { BASE_URL } from "../../services/api"
import { Link } from "react-router-dom"
import ReviewForm from "./ReviewForm"

const RequestDetails = () => {
  const { requestId } = useParams()
  const navigate = useNavigate()
  const [request, setRequest] = useState(null)

  useEffect(() => {
    const getRequestDetails = async () => {
      const response = await Client.get(`${BASE_URL}/request/${requestId}`)
      console.log(response.data)
      setRequest(response.data)
    }

    getRequestDetails()
  }, [requestId])

  const handleDelete = async () => {
    await Client.delete(`${BASE_URL}/request/${requestId}`)
    navigate("/requests")
  }

  const handleMarkComplete = async () => {
    const response = await Client.put(`${BASE_URL}/request/${requestId}`, {
      status: "closed",
    })
    setRequest(response.data)
  }

  if (!request) return <div className="loading">Loading...</div>

  return (
    <div className="form request-form">
      <div className="form-bubble">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <span className="category">{request.category}</span>
        <span className="pay">${request.pay}</span>
        <div className="request-header">
          <h2>{request.title}</h2>
          <div className="title-info"></div>
        </div>
        <div className="request-body">
          <div className="form-group">
            <h3>Description</h3>
            <p>{request.description}</p>
          </div>
          <div className="form-group">
            <h3 className="form-label">Posted By</h3>
            <div className="user-info">
              <p>{request.userId.name}</p>
              <p>{request.userId.email}</p>
            </div>
          </div>
          <div className="form-group">
            <h3 className="form-label">Posted On</h3>
            <p>{new Date(request.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="request-actions">
          {request.status === "active" &&
            (request.providerId ? (
              <Link to={`/requests/${requestId}/applicants`}>
                {/* change this link to include a link to the provider's profile */}
                <button className="form-button">Contact Provider</button>
              </Link>
            ) : (
              <Link to={`/requests/${requestId}/applicants`}>
                <button className="form-button">
                  View Applicants ({request.appliedBy?.length || 0})
                </button>
              </Link>
            ))}

          {!request.providerId && (
            <button className="form-button delete-btn" onClick={handleDelete}>
              Delete
            </button>
          )}

          {request.status === "active" ? (
            request.providerId && (
              <button
                className="form-button complete-btn"
                onClick={handleMarkComplete}
              >
                Mark as complete
              </button>
            )
          ) : (
            <Link to={`/requests/${request._id}/review/new`}>
              <button className="form-button">Review</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default RequestDetails
