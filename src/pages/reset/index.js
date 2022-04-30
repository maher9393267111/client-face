import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Form, Formik } from "formik";
import { useState } from "react";

//import LoginInput from "../../components/inputs/LoginInput/index";
import SearchAccount from "./SearchAccount";
import ChangePassword from "./ChangePassword";
import SendEmail from "./SendEmail";
import CodeVerification from './Codevertification.js'
import Footer from "../../components/login/Footer";
export default function Reset() {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [conf_password, setConf_password] = useState("");
  const [userInfos, setUserInfos] = useState("");

  const [visible, setVisible] = useState(0);
  const [email, setEmail ] = useState("maher email");
  const [  code, setCode ] = useState("");
  const [  error, setError ] = useState("");
  const [loading, setLoading] = useState(false);
  

const {different} = useSelector((different) => ({ ...different }));

  



  const logout = () => {
    Cookies.set("user", "");
    // clear  local storage

    localStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  return (
    <div className="reset">
      <div className="reset_header">
        <img src="../../../icons/facebook.svg" alt="" />
        {user ? (
          <div className="right_reset">
            <Link to="/profile">
              {/* <img src={user.picture} alt="" /> */}

            </Link>

          
            <button
              className="blue_btn"
              onClick={() => {
                logout();
              }}
            >
              Logout   {email}
            </button>
          </div>
        ) : (
          <Link to="/login" className="right_reset">
            <button className="blue_btn">Login {email}</button>
          </Link>
        )}
      </div>

{/* // div */}

<h1 className=" ok bg-red-300 absolute top 200px w-[200px]">{different?.emailRedux?.email} hfff</h1>



      <div className="reset_wrap">
      {visible === 0 && (
          <SearchAccount
            email={email}
            setEmail={setEmail}
            error={error}
            setError={setError}
            setLoading={setLoading}
            setUserInfos={setUserInfos}
            setVisible={setVisible}
          />
        )}
        {visible === 1 && <SendEmail
         error={error}
         setError={setError}
         setLoading={setLoading}
  
         setVisible={setVisible}
        
        user={user} />}
        {visible === 2 && (
          <CodeVerification
            user={user}
            code={code}
            setCode={setCode}
            error={error}
            setVisible={setVisible}
            setError={setError}
            setLoading={setLoading}
            loading={loading}
          />
        )}

{visible === 3 && (
          <ChangePassword
          error={error}
            password={password}
            conf_password={conf_password}
            setConf_password={setConf_password}
            setPassword={setPassword}
          />
        )}


      </div>
      <Footer />
    </div>
  );
}
