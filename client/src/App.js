import Home from "./components/home/Home";
import Profile from "./components/home/Profile";
import Login from "./components/login/Login";
import Private from "./components/private/Private";
import Appointment from "./components/appointment/Appointment";
import { Auth } from "@supabase/ui";
import { supabase } from "./supabaseClient";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
          <Route
            path="/appointment"
            element={
              <Private>
                <Appointment />
              </Private>
            }
          />
        </Routes>
      </Router>
    </Auth.UserContextProvider>
    // <>
    //   <Home />
    //   <Appointment />
    //   <Login />
    // </>
  );
}

export default App;
