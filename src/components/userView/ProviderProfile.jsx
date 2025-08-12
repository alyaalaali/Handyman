import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Client from "../../services/api"

const ProviderProfile = () => {
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
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <h2>{profile.name}'s Profile</h2>
      <div>
        <p>
          <strong>Profession:</strong> {profile.profession}
        </p>
        <p>
          <strong>Contact:</strong> {profile.contact}
        </p>
        <p>
          <strong>Location:</strong> {profile.location}
        </p>
      </div>
    </div>
  )
}

export default ProviderProfile
