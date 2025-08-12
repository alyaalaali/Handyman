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

  if (!request) return <div>Loading...</div>

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <h2>{request.title}</h2>
      <div>
        <p>{request.category}</p>
        <p>${request.pay}</p>
      </div>

      <div>
        <h3>Description</h3>
        <p>{request.description}</p>

        <h3>Posted By</h3>
        <div>
          <p>{request.userId.name}</p>
          <p>{request.userId.email}</p>
        </div>

        <h3>Posted On</h3>
        <p>{new Date(request.createdAt).toLocaleDateString()}</p>

        {request.status === "active" &&
          (request.providerId ? (
            <Link to={`/requests/${requestId}/applicants`}>
              {/* change this link to include a link to the provider's profile */}
              <button>Contact Provider</button>
            </Link>
          ) : (
            <Link to={`/requests/${requestId}/applicants`}>
              <button>
                View Applicants ({request.appliedBy?.length || 0})
              </button>
            </Link>
          ))}

        {!request.providerId && <button onClick={handleDelete}>Delete</button>}

        {request.status === "active" ? (
          request.providerId && (
            <button onClick={handleMarkComplete}>Mark as complete</button>
          )
        ) : (
          <Link to={`/requests/${request._id}/review/new`}>
            <button>Review</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default RequestDetails
