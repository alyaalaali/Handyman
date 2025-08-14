import { useState, useEffect } from "react"
import Client from "../../services/api"
import { BASE_URL } from "../../services/api"
import Reviews from "../Reviews"

const MyProfile = () => {
  const [profile, setProfile] = useState(null)
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    const getProfile = async () => {
      const { data } = await Client.get(`${BASE_URL}/provider/profile/me`)
      setProfile(data)
    }
    getProfile()
  }, [])

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value })
  }

  const handleSave = async (e) => {
    e.preventDefault()
    await Client.put(`${BASE_URL}/provider/profile/me`, profile)
    const { data } = await Client.get(`${BASE_URL}/provider/profile/me`)
    setProfile(data)
    setEdit(false)
  }

  if (!profile) return <div>loading...</div>

  return (
    <div>
      <h2>My Profile</h2>

      {!edit ? (
        <div className="profile-container">
          <div className="profile-header">
            <img
              src="/images/default-pfp.jpg"
              alt={`${profile.name}'s profile`}
              className="profile-image"
            />
            <div className="name-and-edit">
              <h2>{profile.name}'s Profile</h2>
              <button className="edit-button" onClick={() => setEdit(true)}>
                Edit
              </button>
            </div>
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
          {profile._id && <Reviews providerId={profile._id} />}
        </div>
      ) : (
        <div className="form request-form">
          <button
            className="nav-back back-link"
            type="button"
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
          <div className="form-bubble">
            <h2>Edit Profile</h2>

            <form onSubmit={handleSave}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Email
                </label>

                <input
                  id="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>

                <input
                  className="form-input"
                  id="contact"
                  value={profile.contact}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  className="form-input"
                  id="location"
                  value={profile.location}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="profession" className="form-label">
                  Profession
                </label>
                <input
                  className="form-input"
                  id="profession"
                  value={profile.profession}
                  onChange={handleChange}
                />
              </div>
              <button className="form-button" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyProfile
