import { Form, Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/LoginInput";
export default function CodeVerification({ 

  code,
  setCode,
  error,
  loading,
  setLoading,
  setVisible,
  setError,
  //userInfos,


 }) {


  // redux
  const { different :{userinfo} } = useSelector((different) => ({ ...different }));

const {userinfo:{email}} = userinfo;



  const validateCode = Yup.object({
    code: Yup.string()
      .required("Code is required")
      .min("5", "Code must be 5 characters.")
      .max("5", "Code must be 5 characters."),
  });





//vertification code send to server to reset password 
// if code is correct

const verifyCode = async () => {
  try {
    console.log('email from redux',email)
    setLoading(true);
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/validateResetCode`,
      { email, code }
    );
    setVisible(3);
    setError("");
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log('some error here',error);
    setError(error?.response?.data?.message);
  }
};










  return (
    <div className="reset_form">
      <div className="reset_form_header">Code verification</div>
      <div className="reset_form_text">
        Please  enter code that been sent to your email.
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          code,
        }}
        validationSchema={validateCode}
        onSubmit={() => {
          verifyCode();
        }}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code"
            />
            {error && <div className="error_text">{error}</div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              <button type="submit" className="blue_btn">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
