import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const UserRegister = () => {
  let navigate = useNavigate()

  const initialState = {
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
      email: formValues.email,
      password: formValues.password,
      location: formValues.location,
      contact: formValues.contact
    })

    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div className="col register">
      <h2>Register as a user!</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            autoComplete="email"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Location</label>
          <input
            onChange={handleChange}
            type="location"
            id="location"
            value={formValues.location}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Phone Number</label>
          <input
            onChange={handleChange}
            type="contact"
            id="contact"
            value={formValues.contact}
            required
          />
        </div>

        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.password === formValues.confirmPassword) ||
            !formValues.location ||
            !formValues.contact
          }
        >
          Register
        </button>
      </form>
    </div>
  )
}
export default UserRegister
