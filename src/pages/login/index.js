import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";
 import RegisterForm from "../../components/login/RegisterForm";
import { Link } from "react-router-dom";
 import { useState } from "react";

export default function Login() {

  const [visible, setVisible] = useState(false);

  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm  setVisible={setVisible} />
   
      { visible &&    <RegisterForm  setVisible={setVisible} /> }


        <Footer />
      </div>
    </div>
  );
}
