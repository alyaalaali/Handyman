import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { BASE_URL } from "../../services/api"
import axios from "axios"

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
    const response = await axios.post(`${BASE_URL}/request/new`, {
      ...formValues,
      userId: user.id,
    })

    setFormValues(initialState)
    navigate("/requests/active")
  }

  return (
    <>
      <div className="request-form">
        <div>
          <h2>Create Request</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Category">Category </label>

            <select
              id="category"
              onChange={handleChange}
              value={formValues.category}
              required
            >
              <option value=""></option>
              <option value="plumbing">plumbing</option>
              <option value="electrical">electrical</option>
              <option value="painting">painting</option>
              <option value="cleaning">cleaning</option>
            </select>
            <br />
            <br />

            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              type="text"
              id="title"
              value={formValues.title}
              required
            />
            <br />
            <br />

            <label htmlFor="description">Description</label>
            <input
              onChange={handleChange}
              type="text"
              id="description"
              value={formValues.description}
              required
            />
            <br />
            <br />

            <label htmlFor="pay">Pay</label>
            <input
              type="text"
              onChange={handleChange}
              id="pay"
              value={formValues.pay}
              required
            />
            <br />
            <br />

            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default RequestForm
