import { useParams } from "react-router-dom"
import Client from "../../services/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ReviewForm = ({ user, hasReviewed, setHasReviewed}) => {
  const { requestId } = useParams()
  const initialState = {
    rating: 1,
    description: "",
  }

  const [formValues, setFormValues] = useState(initialState)
  const [existingReview, setExistingReview] = useState({ rating: 1, description: ""})


  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const addReview = async (e) => {
    e.preventDefault()
    try {
      const response = await Client.post('http://localhost:3000/review/new', {
        ...formValues,
        requestId,
        userId: user.id
      })

      setHasReviewed(true)
      setExistingReview(response.data)
      setFormValues(initialState)
    } catch (error) {
      console.log("Error submitting review:", error)
    }
  }

  return (
    <>
      <h2>Rate Your Experience</h2>

      {!hasReviewed ? (
        <form onSubmit={addReview}>
          <label>Rating</label>
          <select name="rating" className="rating" onChange={handleChange} value={formValues.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />

          <label>Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={formValues.description}
          ></textarea>
          <br />

          <button type="submit">Send</button>
        </form>
      ) : (
        <>
        <div>
          <p><strong>Your Rating:</strong> {existingReview.rating}</p>
          <p><strong>Your Review:</strong> {existingReview.description}</p>
        </div>

        <Link to={`/requests/${requestId}`}>
        <button>Back</button>
        </Link>
        </>
      )}
    </>
  )
}

export default ReviewForm
