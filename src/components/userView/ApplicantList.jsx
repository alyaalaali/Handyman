import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Client from "../../services/api"

const ApplicantsList = ({ user }) => {
  const { requestId } = useParams()
  const [applicants, setApplicants] = useState([])
  const [request, setRequest] = useState(null)

  useEffect(() => {
    const getApplicants = async () => {
      const response = await Client.get(`/request/${requestId}/applicants`)
      setRequest(response.data)
      setApplicants(response.data.appliedBy)
    }
    getApplicants()
  }, [requestId])

  const handleAccept = async (providerId) => {
    await Client.put(`/request/${requestId}/accept/${providerId}`)
    const response = await Client.get(`/request/${requestId}/applicants`)
    setRequest(response.data)
    console.log(response.data)
    setApplicants(response.data.appliedBy || [])
  }

  return (
    <div>
      <h2>Applicants for: {request?.title}</h2>
      <Link to={`/requests/${requestId}`}>Back</Link>

      {request?.providerId ? (
        <div>
          <h3>Accepted Provider</h3>
          <div>
            <Link to={`/profile/${request.providerId._id}`}>
              <h4>{request.providerId.name}</h4>
            </Link>
            <p>Contact: {request.providerId.contact}</p>
            <p>Location: {request.providerId.location}</p>
          </div>
        </div>
      ) : applicants.length > 0 ? (
        <div>
          {applicants.map((provider) => (
            <div key={provider._id}>
              <div>
                <Link to={`/profile/${provider._id}`}>
                  <h3>{provider.name}</h3>
                </Link>

                <p>Profession: {provider.profession}</p>
                <p>Contact: {provider.contact}</p>
                <p>Location: {provider.location}</p>
              </div>
              {user?.userType === "user" && (
                <button onClick={() => handleAccept(provider._id)}>
                  Accept Provider
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No providers have applied yet.</p>
      )}
    </div>
  )
}

export default ApplicantsList
