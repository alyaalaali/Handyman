import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { BASE_URL } from "../../services/api"
import axios from "axios"
import Client from "../../services/api"

const RequestForm = ({ user }) => {
  let navigate = useNavigate()

  const initialState = {
    category: "",
    title: "",
    description: "",
    pay: "",
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await Client.post(`${BASE_URL}/request`, {
      ...formValues,
      userId: user.id,
    })

    setFormValues(initialState)
    navigate("/requests/active")
  }

  return (
    <div className="form request-form">
      <div className="form-bubble">
        <h2>Create Request</h2>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="Category">
                Category
              </label>

              <select
                id="category"
                onChange={handleChange}
                value={formValues.category}
                required
                className="form-input"
              >
                <option value=""></option>
                <option value="plumbing">plumbing</option>
                <option value="electrical">electrical</option>
                <option value="painting">painting</option>
                <option value="cleaning">cleaning</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="title"
                value={formValues.title}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <input
                className="form-input"
                onChange={handleChange}
                type="text"
                id="description"
                value={formValues.description}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="pay">
                Pay
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="pay"
                value={formValues.pay}
                required
                className="form-input"
              />
            </div>
            <button className="form-button" type="submit">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default RequestForm
