import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams,useLocation } from "react-router-dom";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import ActivateForm from "./ActivateForm";
import "./style.css";
import deCodeToken from 'jwt-decode';
import axios from "axios";
import Cookies from "js-cookie";
export default function Activate() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { user } = useSelector((user) => ({ ...user }));
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { token } = useParams();
  const location = useLocation();




//console.log(token,'token');


// find link come from to this page
  const link = location.pathname;
  console.log("link", link);

  if (location.pathname === "/login") {

setTimeout(() => {

  navigate("/");

  }, 3000);
  }


  const activateAccount = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/activate`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data,'activate account------>');
      setSuccess(data.message);
      localStorage.setItem("user", JSON.stringify(data.userAfterUpdate));


      Cookies.set("user", JSON.stringify({ ...user, verified: true }));


console.log(Cookies.get("user"));

      dispatch({
        type: "VERIFY",
        payload: true,
      });

      
      
      // parse localsotrage and send to redux

      dispatch({

        type: "LOGIN",
        payload: data.userAfterUpdate,

      });

   
     


    







      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };



  useEffect(() => {


console.log('hello activate');
    









    activateAccount();
  }, []);
  
  return (
    <div className="home">
      {success && (
        <ActivateForm
          type="success"
          header="Account verification succeded."
          text={success}
          loading={loading}
        />
      )}
      {error && (
        <ActivateForm
          type="error"
          header="Account verification failed."
          text={error}
          loading={loading}
        />
      )}
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories />
        <CreatePost user={user} />
      </div>
      <RightHome user={user} />
    </div>
  );
}
