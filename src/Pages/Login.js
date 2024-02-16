import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import Loginpic from "../Images/Loginpic.jpg";
// import { GoogleLogin } from "react-google-login";
import axios from "../Axios/axios.js";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Loading from "../Animation/Loading.json";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setUserDetails, setTokens } from "../redux/userReducer.js";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  const responseGoogle = (response) => {
  //    // Handle Google login response
  //    console.log(response);
  //  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const response = await axios.post("/login", values);

        if (response.data.success) {
          // Update Redux store with user details and token
          localStorage.setItem("userAccessToken", response?.data?.token);

          dispatch(setUserDetails(response.data.userData));
          console.log(response.data.userData, "userdata");
          dispatch(setTokens(response.data.token));
          console.log(response.data.token, "token");
          // Redirect or perform other actions on successful login
          navigate("/");
        } else {
          // Handle unsuccessful login (invalid credentials, etc.)
          setFieldError("password", "Invalid email or password");
        }
      } catch (error) {
        console.error("Error during form submission:", error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container-for-login">
      <div className="from-text-1">
        <form onSubmit={formik.handleSubmit} className="login-form">
          <h1 className="heading">Login</h1>
          <div className="row">
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>

          <div className="row">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}
          </div>

          <button className="sub-btn" type="submit">
            Submit
          </button>
        </form>

        {/* Google Login Button */}
        <div className="google-login-btn">
          {/* <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          /> */}
        </div>

        <p>
          You Didn't sign in <Link to="/Signup">Click Here...</Link>
        </p>
      </div>
      <div className="log-animation-1">
        <img src={Loginpic} alt="" />
      </div>
    </div>
  );
};

export default Login;
