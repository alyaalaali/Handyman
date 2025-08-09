import { useNavigate } from "react-router-dom"
import UserTypeContext from "../contexts/userTypeContext"
import { useContext } from "react"

const Home = () => {
  const navigate = useNavigate()
  const { setUserType } = useContext(UserTypeContext)

  const handleSelection = (type) => {
    setUserType(type)
    navigate("/register")
  }
  // ill conditionally render this based on wether user is signed it or not once auth is done
  return (
    <div>
      <h2>Join us as:</h2>
      <button onClick={() => handleSelection("user")}>User</button>
      <button onClick={() => handleSelection("provider")}>
        Service Provider
      </button>
      <p onClick={() => navigate("/login")}>
        already have an account? Login here!
      </p>
    </div>
  )
}
export default Home
