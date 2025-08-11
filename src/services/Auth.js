import Client from "./api"

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post("/auth/register/user", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RegisterProvider = async (data) => {
  try {
    const res = await Client.post("/auth/register/provider", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignIn = async (data) => {
  try {
    const res = await Client.post("/auth/login", data)
    // Set the current signed in users token to localStorage
    localStorage.setItem("token", res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get("/auth/session")
    console.log("CheckSession:")
    console.log(res.data)
    // Checks if there is a token and if it is valid
    return res.data
  } catch (error) {
    throw error
  }
}
