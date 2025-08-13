import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const UserRegister = () => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    contact: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      location: formValues.location,
      contact: formValues.contact
    })

    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div className="form">
      <div className="form-bubble">
        <h2>Register as a user!</h2>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
                autoComplete="email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formValues.name}
                required
                autoComplete="name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                value={formValues.password}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                id="confirmPassword"
                value={formValues.confirmPassword}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Location
              </label>
              <input
                onChange={handleChange}
                type="location"
                id="location"
                value={formValues.location}
                required
                className="form-input"
                placeholder="Enter your location"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Phone Number</label>
              <input
                onChange={handleChange}
                type="contact"
                id="contact"
                value={formValues.contact}
                required
                className="form-input"
                placeholder="Enter your number"
              />
            </div>

            <button
              className="form-button"
              disabled={
                !formValues.email ||
                !formValues.password ||
                formValues.password !== formValues.confirmPassword ||
                !formValues.location ||
                !formValues.contact
              }
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default UserRegister
