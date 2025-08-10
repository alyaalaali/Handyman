import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../../services/api"

const RequestDetails = () => {
  const { requestId } = useParams()
  const navigate = useNavigate()
  const [request, setRequest] = useState(null)

  useEffect(() => {
    const getRequestDetails = async () => {
      const response = await axios.get(`${BASE_URL}/request/${requestId}`)
      setRequest(response.data)
    }
    getRequestDetails()
  }, [requestId])

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
      </div>
    </div>
  )
}

export default RequestDetails
