import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../../services/api'

const ProRequestDetails = ({ user }) => {
  const { id } = useParams()
  const [request, setRequest] = useState(null)
  const [apply, setApply] = useState(false)

  useEffect(() => {
    const getRequest = async () => {
      const response = await Client.get(`/provider/requests/${id}`)
      const providerId = user.id
      if (response.data.appliedBy.includes(providerId)) {
        setApply(true)
      }
      setRequest(response.data)
    }
    console.log('On mount')
    getRequest()
  }, [apply])

  const handleApply = async () => {
    await Client.post(`/provider/requests/${id}/apply`)
    setApply(true)
  }

  const handleWithdraw = async () => {
    await Client.delete(`/provider/requests/${id}/apply`)
    setApply(false)
  }

  if (!request) return <p>Loading request details...</p>

  return (
    <div className="request-details">
      <h2>{request.title}</h2>

      <p>
        <strong>Title:</strong> {request.title}
      </p>
      <p>
        <strong>pay:</strong> {request.pay}
      </p>
      <p>
        <strong>Requested by:</strong> {request.userId?.email}
      </p>

      <p>
        <strong>Description:</strong> {request.description}
      </p>

      {apply ? (
        <button onClick={handleWithdraw}>Withdraw</button>
      ) : (
        <button onClick={handleApply}>Apply</button>
      )}
    </div>
  )
}

export default ProRequestDetails
