import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../../services/api'

const CategoryRequests = () => {
  const { categoryName } = useParams()
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const getRequests = async () => {
      const response = await Client.get(
        `/provider/categories/requests?category=${categoryName}`
      )
      setRequests(response.data)
    }

    getRequests()
  }, [categoryName])

  return (
    <div className="category-requests">
      <h2>Requests for: {categoryName}</h2>

      {requests.length === 0 ? (
        <p>No active requests in this category</p>
      ) : (
        <ul className="request-list">
          {requests.map((request) => (
            <li key={request._id}>
              <Link to={`/requests/${request._id}`} className="request-link">
                <div>
                  <h3> {request.title}</h3>

                  <p>{request.pay}BHD</p>
                  <p>By: {request.userId?.email}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CategoryRequests
