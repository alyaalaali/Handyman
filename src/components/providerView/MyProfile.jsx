import { useEffect, useState } from "react"
import Client, { BASE_URL } from "../../services/api"

const MyProfile = () => {
  const [profile, setProfile] = useState(null)
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await Client.get(`${BASE_URL}/provider/profile/me`)
      setProfile(data)
    }
    fetchProfile()
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

  if (!profile) return <div>No profile found</div>

  return (
    <div>
      <h2>My Profile</h2>

      {!edit ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Contact: {profile.contact}</p>
          <p>Location: {profile.location}</p>
          <p>Profession: {profile.profession}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSave}>
          <input id="name" value={profile.name} onChange={handleChange} />
          <input id="contact" value={profile.contact} onChange={handleChange} />
          <input
            id="location"
            value={profile.location}
            onChange={handleChange}
          />
          <input
            id="profession"
            value={profile.profession}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  )
}

export default MyProfile
