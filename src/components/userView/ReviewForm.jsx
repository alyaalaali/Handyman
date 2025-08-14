import { useParams } from "react-router-dom"
import Client from "../../services/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ReviewForm = ({ user }) => {
  const { requestId } = useParams()
  const initialState = {
    rating: 1,
    description: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  const [existingReview, setExistingReview] = useState(null)
  const [showForm, setShowForm] = useState(false)

  // Fetch existing review on load
  useEffect(() => {
    const checkReview = async () => {
      try {
        const response = await Client.get(
          `/review/user/${user.id}/request/${requestId}`
        )
        if (response.data) {
          setExistingReview(response.data)
          setShowForm(false)
        } else {
          setShowForm(true)
        }
      } catch (error) {
        console.log("No existing review")
      }
    }

    if (user && requestId) checkReview()
  }, [user, requestId])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const addReview = async (e) => {
    e.preventDefault()
    try {
      const response = await Client.post("/review/new", {
        ...formValues,
        requestId,
        userId: user.id,
      })

      setExistingReview(response.data)
      setFormValues({ rating: 1, description: "" })
      setShowForm(false)
    } catch (error) {
      console.log("Error submitting review:", error)
    }
  }
  const deleteReview = async () => {
    try {
      await Client.delete(`/review/${existingReview._id}`)
      setExistingReview(null)
      setShowForm(true)
    } catch (error) {
      console.log("Error deleting review:", error)
    }
  }
  return (
    <div className="form request-form">
      <div className="form-bubble">
        <Link to={`/requests/${requestId}`}>
          <button className="back-btn">Back</button>
        </Link>
        <h2>Rate Your Experience</h2>

        {showForm ? (
          <form onSubmit={addReview} className="form-content">
            <div className="form-group">
              <label className="form-label">Rating</label>
              <select
                name="rating"
                onChange={handleChange}
                value={formValues.rating}
                className="form-input"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
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
              Submit Review
            </button>
          </form>
        ) : existingReview ? (
          <div className="existing-review">
            <p>
              <strong>Rating:</strong> {existingReview.rating}
            </p>
            <p>
              <strong>Review:</strong> {existingReview.description}
            </p>
            <button onClick={deleteReview} className="form-button">
              Delete Review
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ReviewForm
