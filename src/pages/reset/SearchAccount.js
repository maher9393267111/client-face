import { Form, Formik,useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/LoginInput/index";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export default function SearchAccount({
  //email,
  //setEmail,
  error,
  setError,
  setLoading,
  setUserInfos,
  setVisible,
}) {

  const { different } = useSelector((different) => ({ ...different }));

  const {emailRedux} = different
  console.log('emailRedux',emailRedux.email);

  const [email, setEmail] = useState("");
 

const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
   
      email 
      
    },

    onSubmit: values =>{
     
      setEmail(values.email);
      console.log('email',email);
      console.log('emailRedux Here ---->',different.emailRedux);


dispatch({
  type: "SET_EMAIL",
  
  payload: {
    email,
  },
});


handleSearch();

   


      console.log('form:',values);
    },

    validateEmail : Yup.object({
      email: Yup.string()
        .required("Email address ir required.")
        .email("Must be a valid email address.")
        .max(50, "Email address can't be more than 50 characters."),
    })


  });

 






  const handleSearch = async () => {
    try {
      setLoading(true);
   //   console.log('email in Search',email);

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/findUser`,
        { email }
      );
      setUserInfos(data);
      setVisible(1);
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.message);
    }
  };
  return (
    <div className="reset_form">
      <div className="reset_form_header">Find Your Account</div>
      <div className="reset_form_text">
        Please enter your email address or mobile number to search for your
        account. 
        
        {/* {emailRedux.email} */}
      </div>
     
     <div>
       





     </div >

<div className="  border-2 border-b-gray-600 p-5">
  

<input type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>

<button onClick= {formik.handleSubmit} type="submit">Submit</button>


</div>

    </div>
  );
}





// <Formik
// enableReinitialize
// initialValues={{
//   email,
// }}
// validationSchema={validateEmail}
// onSubmit={() => {
//   handleSearch();
// }}
// >
{/* {(formik) => (
  <Form>
    <LoginInput
      type="text"
      name="email"
      onchange={handleEmailChange}
      // onChange={(e) => setEmail(e.target.value)}
      placeholder="Email address or phone number"
    />
    {error && <div className="error_text">{error}</div>}
    <div className="reset_form_btns">
      <Link to="/login" className="gray_btn">
        Cancel
      </Link>
      <button type="submit" className="blue_btn">
        Search
      </button>
    </div>
  </Form>
)}
</Formik> */}