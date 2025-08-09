import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const ProviderRegister = () => {
  let navigate = useNavigate()
  const initialState = {
    CPR: "",
    email: "",
    password: "",
    contact: "",
    location: "",
    categories: [],
    profession: "",
    confirmPassword: "",
    valid: "Password must match",
  }
  const [categories, setCategories] = useState([
    { id: 1, name: "plumbing", checked: false },
    { id: 2, name: "electrical", checked: false },
    { id: 3, name: "carpentry", checked: false },
    { id: 4, name: "painting", checked: false },
    { id: 5, name: "cleaning", checked: false },
  ])

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
      // CPR: formValues.CPR,
      // email: formValues.email,
      // password: formValues.password,
      // location: formValues.location,
      // profession: formValues.profession,
      // contact: formValues.contact,
      // categories: selectedCategories

      // })
      navigate("/login")
    } else {
      setFormValues({
        ...formValues,
        valid: "password must match",
      })
    }
  }

  const clickHandler = ({ target }) => {
    const { checked, id } = target
    setCategories((prev) => {
      const updated = [...prev]
      const clickedItem = updated.find((item) => item.id.toString() === id)
      if (clickedItem) {
        clickedItem.checked = checked
      }
      return updated
    })
  } // for this implementation https://stackoverflow.com/questions/66624289/how-to-handle-the-the-onclick-events-on-checkbox-in-react-js

  const selectedCategories = categories
    .filter((category) => category.checked)
    .map((category) => category.name)

  return (
    <div className="col register">
      <h2>Register as a service provider!</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="CPR">CPR Number</label>
          <input
            type="text"
            id="CPR"
            placeholder="012345678"
            value={formValues.CPR}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            placeholder="+973 XXXX-XXXX"
            value={formValues.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            id="profession"
            placeholder="Your profession"
            value={formValues.profession}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="City or Address"
            value={formValues.location}
            onChange={handleChange}
            required
          />
        </div>

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
        <div className="category-selection">
          <h3>Select Service Categories:</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id}>
                <label>
                  <input
                    type="checkbox"
                    id={category.id}
                    checked={category.checked}
                    onChange={clickHandler}
                  />
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
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
export default ProviderRegister
