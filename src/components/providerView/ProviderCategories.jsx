import { useState, useEffect } from 'react'
import Client from '../../services/api'
import { Link } from 'react-router-dom'

const ProviderCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const response = await Client.get('/provider/categories')
      setCategories(response.data)
    }
    getCategories()
  }, [])

  return (
    <div className="provider-categories">
      <h2>My Categories</h2>
      {categories.length === 0 ? (
        <p>No categories found</p>
      ) : (
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <Link to={`/categories/${encodeURIComponent(category)}`}></Link>
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProviderCategories
