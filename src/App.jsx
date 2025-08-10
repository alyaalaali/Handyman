

import { Route, Routes } from "react-router-dom"; // Routes & Route branches import  

import "./App.css"; // Styling import

// Components imports
import Header from './components/Level 1/Header';
import SideBar from "./components/Level 1/SideBar";
import Home from './components/Level 1/Home';
import ProSignUp from './components/Level 1/ProSignUp';
import SignIn from './components/Level 1/SignIn';
import UserDashboard from './components/Level 1/UserDashboard';
import UserSignUp from './components/Level 1/UserSignUp';
import WorkerType from './components/Level 2/WorkerType';
import NotificationsList from "./components/Level 1/NotificationsList";
import ProDashboard from "./components/Level 1/ProDashboard";

// import ProviderProfile from './components'

const App = () => {
  return (
    <>
    <header>
      <Header />
      <SideBar />
    </header>
    <br />
    
      <main>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worker/type" element={<WorkerType />} />
        <Route path="/user/sign-up" element={<UserSignUp />}/>
        <Route path="/provider/sign-up" element={<ProSignUp />}/>
        <Route path="/sign-in" element={<SignIn />}/>


        <Route path="/user/dashboard" element={<UserDashboard />}> {/* UserDasboard Parent */}
           <Route path="create" element={<UserDashboard />} /> {/* First child of UserDashboard */}
          
          <Route path="requests" element={<UserDashboard />} > {/* Second child of UserDashboard */}

          <Route path="active" element={<UserDashboard />}></Route> {/* First child of requests */}
          <Route path="completed" element={<UserDashboard />}></Route> {/* Second child of requests */}

          </Route>
        </Route>

        
        <Route path="/provider" element={<ProDashboard />}>
        <Route path="categories" element={<ProDashboard />}/>
        </Route>


        <Route path="/notify/list" element={<NotificationsList />}>
          <Route path="notification" element={<NotificationsList />} />
        </Route>

        </Routes>

      </main>
      
    </>
  )
}

export default App
