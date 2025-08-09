import { createContext, useState, useContext } from "react"

const UserTypeContext = createContext(null)

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState(null)

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  )
}

export default UserTypeContext
