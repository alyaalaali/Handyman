import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const UserRegister = () => {
  let navigate = useNavigate()
  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    valid: "Password must match",
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formValues.password === formValues.confirmPassword) {
      setFormValues({
        ...formValues,
        email: "",
        password: "",
        confirmPassword: "",
        valid: "Successfully Created an account!",
      })
      // await axios.post("http://localhost:3001/auth/register", {
      //   email: formValues.email,
      //   password: formValues.password,
      // })
      navigate("/login")
    } else {
      setFormValues({
        ...formValues,
        valid: "password must match",
      })
    }
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

        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.password === formValues.confirmPassword)
          }
        >
          Register
        </button>
        <p>{formValues.valid}</p>
      </form>
    </div>
  )
}
export default UserRegister
