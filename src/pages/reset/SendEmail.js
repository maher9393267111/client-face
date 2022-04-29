
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function SendEmail({ 

  userInfos,
  //email,
  error,
  setError,
  setVisible,
  setUserInfos,
  loading,
  setLoading,


 }) {

const{ different:{userinfo:{userinfo}} } = useSelector((different) => ({ ...different }));

const {email} = userinfo;


// send reset password code to email

const sendEmail = async () => {
  try {
    console.log('emailin send email component--> ',email);
    setLoading(true);
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/sendResetPasswordCode`,
      { email }
    );
    setError("");
    setVisible(2);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    setError(error.response.data.message);
  }
};



  return (
    <div className="reset_form dynamic_height">
      <div className="reset_form_header">Reset Your Password</div>
      <div className="reset_grid">
        <div className="reset_left">
          <div className="reset_form_text">
            How do you want to receive the code to reset your password?
          </div>
          <label htmlFor="email" className="hover1">
            <input type="radio" name="" id="email" checked readOnly />
            <div className="label_col">
              <span>Send code via email</span>
              <span>email@email.email</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img src={userinfo?.picture} alt="" />
          <span>{userinfo?.email}</span>
          <span>Facebook user</span>
        </div>
      </div>
      <div className="reset_form_btns">
        <Link to="/login" className="gray_btn">
          Not You ?
        </Link>
        <button
           onClick={() => {
            sendEmail();
          }}
        
        type="submit" className="blue_btn">
          Continue
        </button>
      </div>
    </div>
  );
}
