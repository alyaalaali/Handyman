import { useState, useEffect } from "react"
import Client from "../services/api"
const Reviews = ({ providerId }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await Client.get(`/review/${providerId}`)
      setReviews(data)
    }

    if (providerId) {
      getReviews()
    }
  }, [providerId])

  return (
    <div className="request-container">
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p className="no-requests">No reviews yet</p>
      ) : (
        <div className="request-list">
          {reviews.map((review) => (
            <div key={review._id} className="request-item">
              <img
                src="/images/default-pfp.jpg"
                alt="Profile"
                className="request-pfp"
              />
              <div className="request-content">
                <div className="request-header">
                  <h3 className="request-title">Anonymous</h3>
                  <span className="request-date">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${
                          star <= review.rating ? "filled" : ""
                        }`}
                      >
                        {star <= review.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="request-description">{review.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Reviews
