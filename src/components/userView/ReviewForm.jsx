import { useParams } from "react-router-dom"
import Client from "../../services/api"
import { useState } from "react"

const ReviewForm = ({ user }) => {
  const {requestId} = useParams()
  const initialState = {
    rating: 1,
    description: "",
  }
  const [formValues, setFormValues] = useState(initialState)
  console.log(formValues)
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const addReview = async (e) => {
    try {
      e.preventDefault()
      const response = await Client.post('http://localhost:3000/review/new', {
        ...formValues,
        requestId
      })
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }

    setFormValues(initialState)
  }

  return (
    <>
      <h2>Rate Your Experience</h2>
      <form onSubmit={addReview}>
        <label>Rating</label>
        <select name="rating" className="rating" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />

        <label>description</label>
        <textarea onChange={handleChange} name="description"></textarea>
        <br />

        <button >send</button>
      </form>
    </>
  )
}
export default ReviewForm
