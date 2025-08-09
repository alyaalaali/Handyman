import { useContext } from "react"
import UserTypeContext from "../contexts/userTypeContext"
import UserRegister from "./UserRegister"
import ProviderRegister from "./ProviderRegister"
import { useNavigate } from "react-router-dom"

const Register = () => {
  let navigate = useNavigate()
  const { userType } = useContext(UserTypeContext)

  return (
    <div>{userType === "user" ? <UserRegister /> : <ProviderRegister />}</div>
  )
}
export default Register
