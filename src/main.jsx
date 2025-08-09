import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { UserTypeProvider } from "./contexts/userTypeContext.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserTypeProvider>
      <App />
    </UserTypeProvider>
  </BrowserRouter>
)
