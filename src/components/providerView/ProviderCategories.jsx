import { useState, useEffect } from 'react'
import Client from '../../services/api'
import { Link } from 'react-router-dom'

const ProviderCategories = () => {
  const [categories, setCategories] = useState([])

  const categoryImages = {
    plumbing: '/images/plumber.png',
    electrical: '/images/electrician.png',
    cleaning: '/images/cleaning.png',
    carpentry: '/images/carpenter.png',
    painting: '/images/painter.png'
  }

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
              <Link to={`/categories/${category}`} className="category-link">
                <img
                  src={categoryImages[category]}
                  alt={category}
                  className="category-image"
                />
                <span className="category-name">{category}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProviderCategories

