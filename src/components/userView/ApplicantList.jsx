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
    <div className="request-container">
      <Link to={`/requests/${requestId}`} className="back-link">
        Back
      </Link>
      <h2>{request?.title}</h2>

      {request?.providerId ? (
        <div className="request-list">
          <div className="request-item">
            <img
              src="/images/default-pfp.jpg"
              alt="Profile"
              className="request-pfp"
            />
            <div className="request-content">
              <div className="provider-info">
                <Link to={`/profile/${request.providerId._id}`}>
                  <h4>{request.providerId.name}</h4>
                  <p>Profession: {request.providerId.profession}</p>
                  <p>Contact: {request.providerId.contact}</p>
                  <p>Location: {request.providerId.location}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : applicants.length > 0 ? (
        <div className="request-list">
          {applicants.map((provider) => (
            <div className="request-item" key={provider._id}>
              <img
                src="/images/default-pfp.jpg"
                alt="Profile"
                className="request-pfp"
              />

              <div className="request-content">
                <div className="request-header">
                  {" "}
                  <Link to={`/profile/${provider._id}`}>
                    <h3 className="request-title">{provider.name}</h3>
                  </Link>
                </div>
                <div className="provider-info">
                  <p>{provider.profession}</p>
                  <p>Location: {provider.location}</p>
                </div>
              </div>

              {user?.userType === "user" && (
                <div className="accept-container">
                  <button
                    className="accept-button"
                    onClick={() => handleAccept(provider._id)}
                  >
                    Accept Provider
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-requests">No providers have applied yet.</p>
      )}
    </div>
  )
}

export default ApplicantsList
