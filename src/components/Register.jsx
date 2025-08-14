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
      <div className="register-container">
        {userType === "user" ? (
          <UserRegister setUserType={setUserType} />
        ) : (
          <ProviderRegister setUserType={setUserType} />
        )}
      </div>
    )
  }

  return (
    <div className="register-page">
      <div className="selection-box">
        <h2>Join us as:</h2>
        <div className="button-group">
          <button
            className="btn user-type"
            onClick={() => handleSelection("user")}
          >
            User
          </button>
          <button
            className="btn user-type"
            onClick={() => handleSelection("provider")}
          >
            Service Provider
          </button>
        </div>

        <p className="login-text">
          Already have an account?
          <span onClick={() => navigate("/login")} className="login-link">
            Login here
          </span>
        </p>
      </div>
    </div>
  )
}
export default Register
