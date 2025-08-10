import { useState } from "react"
import UserRegister from "./UserRegister"
import ProviderRegister from "./ProviderRegister"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [userType, setUserType] = useState(null)
  const navigate = useNavigate()

  const handleSelection = (type) => {
    setUserType(type)
  }
  if (userType) {
    return (
      <div>{userType === "user" ? <UserRegister /> : <ProviderRegister />}</div>
    )
  }

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
export default Register
