import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Client from "../../services/api"
import Reviews from "../Reviews"
const ProviderProfile = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const getProfile = async () => {
      const { data } = await Client.get(`/provider/profile/${id}`)
      setProfile(data)
    }
    getProfile()
  }, [id])

  if (!profile) return <div>Loading profile...</div>

  return (
    <div className="profile-container">
      <button className="back-link" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="profile-header">
        <img
          src="/images/default-pfp.jpg"
          alt={`${profile.name}'s profile`}
          className="profile-image"
        />
        <h2>{profile.name}'s Profile</h2>
      </div>
      <div className="profile-details">
        <div className="detail-item">
          <span className="detail-label">Profession:</span>
          <span className="detail-value">{profile.profession}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Contact:</span>
          <span className="detail-value">{profile.contact}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Location:</span>
          <span className="detail-value">{profile.location}</span>
        </div>
      </div>

      <Reviews providerId={id} />
    </div>
  )
}

export default ProviderProfile
