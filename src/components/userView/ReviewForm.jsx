import { useParams } from "react-router-dom"
import Client from "../../services/api"
import { useState, useEffect } from "react"

const ReviewForm = ({ user }) => {
  const { requestId } = useParams()
  const initialState = {
    rating: 1,
    description: "",
  }

  const [formValues, setFormValues] = useState(initialState)
  const [hasReviewed, setHasReviewed] = useState(false)
  const [existingReview, setExistingReview] = useState({
    rating: 1,
    description: "",
  })

  // Fetch existing review on load
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await Client.get(
          `http://localhost:3000/review/user/${user.id}/request/${requestId}`
        )
        if (response.data) {
          setHasReviewed(true)
          setExistingReview(response.data)
        }
      } catch (error) {
        // If no review exists, this is expected — do nothing
        console.log("No existing review found.")
      }
    }

    if (user && requestId) {
      fetchReview()
    }
  }, [user, requestId])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const addReview = async (e) => {
    e.preventDefault()
    try {
      const response = await Client.post("http://localhost:3000/review/new", {
        ...formValues,
        requestId,
        userId: user.id,
      })

      setHasReviewed(true)
      setExistingReview(response.data)
      setFormValues(initialState)
    } catch (error) {
      console.log("Error submitting review:", error)
    }
  }

  return (
    <div className="form request-form">
      <div className="form-bubble">
        <h2>Rate Your Experience</h2>

        {!hasReviewed ? (
          <form onSubmit={addReview} className="form-content">
            <div className="form-group">
              <label className="form-label">Rating</label>
              <select
                name="rating"
                onChange={handleChange}
                value={formValues.rating}
                className="form-input"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                value={formValues.description}
                className="form-input"
              ></textarea>
            </div>
            <button className="form-button" type="submit">
              Send
            </button>
          </form>
        ) : (
          <div>
            <p>
              <strong>Your Rating:</strong> {existingReview.rating}
            </p>
            <p>
              <strong>Your Review:</strong> {existingReview.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewForm
