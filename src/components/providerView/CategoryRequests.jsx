import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Client from "../../services/api"

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
      <h2>Requests for Category: {decodeURIComponent(categoryName)}</h2>
      {requests.length === 0 ? (
        <p>No active requests in this category</p>
      ) : (
        <ul className="request-list">
          {requests.map((request) => (
            <li key={request._id} className="request-item">
              <h3>{request.title}</h3>
              <p>{request.description}</p>
              <p>Requested by: {request.userId?.email}</p>
            
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CategoryRequests
