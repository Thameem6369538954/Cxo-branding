import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/Signin.css";
import Lottie from "lottie-react";
import { useNavigate, Link } from "react-router-dom";
import Login from "../Animation/Login.json";
// import { GoogleLogin } from "react-google-login";
import axios from "../Axios/axios.js";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/userReducer";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const responseGoogle = (response) => {
  //   // Handle Google login response
  //   console.log(response);
  // };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNo: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      phoneNo: Yup.string()
        .required("Required")
        .matches(/^[0-9]{10}$/, "Must be exactly 10 digits"),
      email: Yup.string().email("Invalid email address").required("Required"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("email"), null], "Emails must match")
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        // Your form submission logic here
        const response = await axios.post("/signup", values);
        if (response.data.success) {
          console.log("Signup successful!");
          // Redirect or perform other actions on successful signup
          dispatch(setUserDetails(response.data.userData));
          navigate("/login");
        } else {
          // Handle unsuccessful signup (email already exists, etc.)
          setFieldError("email", "Email already exists");
        }
        console.log("Form submitted:", values);
        // navigate("/"); // Redirect after successful submission
      } catch (error) {
        console.error("Error during form submission:", error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <div className="container-for-signup">
        <div className="from-text">
          <h1>Signup</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="error-message">{formik.errors.fullName}</div>
              )}
            </div>

            <div className="row">
              <input
                type="text"
                name="phoneNo"
                placeholder="Mobile Number"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNo && formik.errors.phoneNo && (
                <div className="error-message">{formik.errors.phoneNo}</div>
              )}
            </div>

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
                type="text"
                name="confirmEmail"
                placeholder="Re-enter Your Email"
                value={formik.values.confirmEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmEmail && formik.errors.confirmEmail && (
                <div className="error-message">
                  {formik.errors.confirmEmail}
                </div>
              )}
            </div>

            <div className="row">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error-message">{formik.errors.password}</div>
              )}
            </div>

            <div className="row">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="error-message">
                    {formik.errors.confirmPassword}
                  </div>
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
              buttonText="Signup with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            /> */}
          </div>

          {/* Additional UI or animation elements can be added here */}
          <p>
            Already have an account? <Link to="/Login">Click Here...</Link>
          </p>
        </div>
        <div>
          <Lottie animationData={Login} className="log-animation" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
