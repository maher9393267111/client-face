import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import Formiku from "./pages/practice/formik";
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/reset" element={<Reset />} exact />
        <Route path="/activate/:token" element={<Activate />} exact />
        <Route path="/formik" element={<Formiku />} exact />
      </Routes>
    </div>
  );
}

export default App;
