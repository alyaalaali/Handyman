import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Client from '../../services/api'

const ProviderApplications = ({ user }) => {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await Client.get('/provider/requests/applied')
        setApplications(response.data)
      } catch (error) {
        console.error('Error fetching applications:', error)
      }
    }

    getApplications()
  }, [])

  return (
    <div className="provider-applications">
      <h2>My Applications</h2>
      {applications.length === 0 ? (
        <p>You haven't applied to any requests yet.</p>
      ) : (
        <ul className="application-list">
          {applications.map((request) => (
            <li key={request._id}>
              <Link to={`/requests/${request._id}`}>
                <h3>{request.title}</h3>
              </Link>
              <p>{request.description}</p>
              <p><strong>Category:</strong> {request.category}</p>
              <p><strong>Pay:</strong> {request.pay}</p>
              <p><strong>Requested by:</strong> {request.userId?.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProviderApplications
