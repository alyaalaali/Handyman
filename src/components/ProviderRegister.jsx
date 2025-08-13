import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterProvider } from "../services/Auth"

const ProviderRegister = () => {
  let navigate = useNavigate()

  const initialState = {
    name: "",
    CPR: "",
    email: "",
    password: "",
    contact: "",
    location: "",
    categories: [],
    profession: "",
    confirmPassword: "",
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
    await RegisterProvider({
      name: formValues.name,
      CPR: formValues.CPR,
      email: formValues.email,
      password: formValues.password,
      location: formValues.location,
      contact: formValues.contact,
      categories: selectedCategories,
      profession: formValues.profession,
    })
    setFormValues(initialState)
    navigate("/login")
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
    <div className="form">
      <div className="form-bubble">
        {" "}
        <h2>Register as a service provider!</h2>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="CPR" className="form-label">
                CPR Number
              </label>
              <input
                type="text"
                id="CPR"
                placeholder="012345678"
                value={formValues.CPR}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                placeholder="+973 XXXX-XXXX"
                value={formValues.contact}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="profession">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                placeholder="Your profession"
                value={formValues.profession}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="City or Address"
                value={formValues.location}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

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
              <h3 className="form-label">Select Service Categories:</h3>
              <div className="category-list">
                {categories.map((category) => (
                  <label key={category.id} className="category-item">
                    <input
                      type="checkbox"
                      id={category.id}
                      checked={category.checked}
                      onChange={clickHandler}
                      className="category-checkbox"
                    />
                    <span className="category-name">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              className="form-button"
              disabled={
                !formValues.email ||
                !formValues.password ||
                formValues.password !== formValues.confirmPassword ||
                !formValues.location ||
                !formValues.contact ||
                !formValues.CPR ||
                !formValues.name ||
                !formValues.profession
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
export default ProviderRegister
