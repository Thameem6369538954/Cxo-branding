import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../css/resumepopupform.css";
import Axios from "axios";
import axios from "../Axios/axios";
import { InlineWidget } from "react-calendly";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setTokens } from "../redux/userReducer";
import cloudinary from 'cloudinary-core'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const cl = cloudinary.Cloudinary.new({ cloud_name: "dhwdphigu" });



const ResumePopupForm = ({ closePopup }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userData);
  const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
  const [closeClick, setCloseClick] = useState(false);
  const [file, setFile] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const navigate = useNavigate()

  const userId = useSelector((state) => state?.userData?.userData?._id);
  console.log(token,"toooooo")

  const formik = useFormik({
    initialValues: {
      name: "",
      socialMediaLink: "",
      resumeFile: null,
      wantComplimentaryCall: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      socialMediaLink: Yup.string().url("Invalid URL").required("Required"),
    }),
    
    //   try {
    //     const fileUrl = await uploadFile(file);

        // const headers = {};
        // if (token) {
        //   headers.Authorization = `Bearer ${token}`;
        // }

        // const formData = new FormData();
        // formData.append("resumeFile", values.resumeFile);
        // formData.append("name", values.name);
        // formData.append("socialMediaLink", values.socialMediaLink);

        // const response = await axios.post(
        //   "http://localhost:4000/api/post-resume",
        //   formData,
        //   {
        //     headers: {
        //       ...headers,
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }
        // );

        // if (response.data.success) {
        //   console.log("Data submitted successfully");
        // } else {
        //   console.error("Unsuccessful response:", response.data);
        //   setFieldError("email", "Email already exists");
        // }
    //   } catch (error) {
    //     console.error("Error during form submission:", error.message);
    //     if (error.response) {
    //       console.error("Server responded with:", error.response.data);
    //     } else if (error.request) {
    //       console.error("No response received:", error.request);
    //     } else {
    //       console.error("Error setting up the request:", error.message);
    //     }
    //   }
    // },
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const headers = {};
        
        const formData = new FormData();
        formData.append("file", values.resumeFile);
        formData.append("upload_preset", "resume_writing");

        const cloudinaryResponse = await Axios.post(
          `https://api.cloudinary.com/v1_1/${cl.config().cloud_name}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(cloudinaryResponse, "clouuuuuuuuuuuuud");
        const fileUrl = cloudinaryResponse.data.secure_url;
        console.log(fileUrl, "fileUlrr");

        const response = await axios.post(
          "/uploadpdf",
          {
            fileUrl,
            userId,
            socialMediaLink: values.socialMediaLink,
            wantComplimentaryCall: values.wantComplimentaryCall,

            
          }
        );
        toast.success("Form submitted successfully!");
        setTimeout(() => { 
          navigate('/')
        },2000)
      }
      catch(error) {
        console.error("Error during file upload:", error.message);
      }
    

    }
  });
 const handlePdfFileChange = (e) => {
   const file = e.target.files[0];

   if (file) {
     formik.setFieldValue("resumeFile", file);
   }
 };

  const handleCheckboxChange = (e) => {
    setWantComplimentaryCall(e.target.checked);
     if (e.target.checked) {
       formik.setFieldValue("wantComplimentaryCall", true);
     }
  };

  const handleClose = () => {
    setWantComplimentaryCall(false);
    setCloseClick(true);
  };

  return (
    <div>
      <ToastContainer />
      <div className="main-popup">
        <div className="main-popup-box">
          <div className="resume-form">
            <div className="form-int-icon">
              <h1>Enter Your Details</h1>
              <AiOutlineCloseCircle
                className="form-icon"
                onClick={closePopup}
              />
            </div>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <div className="form_group">
                <label className="sub_title" htmlFor="name">
                  Name
                </label>
                <input
                  name="name"
                  placeholder="Enter your full name"
                  className="form_style"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="error-message">{formik.errors.name}</div>
                )}
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="socialMediaLink">
                  Social Media Link
                </label>
                <input
                  name="socialMediaLink"
                  placeholder="Enter your social media link"
                  className="form_style"
                  type="text"
                  value={formik.values.socialMediaLink}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.socialMediaLink &&
                  formik.errors.socialMediaLink && (
                    <div className="error-message">
                      {formik.errors.socialMediaLink}
                    </div>
                  )}
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="resumeFile">
                  Upload Resume
                </label>
                <input
                  name="resumeFile"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handlePdfFileChange}
                />
              </div>

              {wantComplimentaryCall ? (
                <div className="calendly-embed">
                  <span className="close-calendly" onClick={handleClose}>
                    <AiOutlineCloseCircle className="form-icon" />
                  </span>
                  <InlineWidget
                    url="https://calendly.com/teammentoons/cxo-branding-resume-writing"
                    className="calendly-embed"
                  />
                </div>
              ) : (
                <div className="form_group">
                  {closeClick ? (
                    ""
                  ) : (
                    <input
                      name="wantComplimentaryCall"
                      type="checkbox"
                      checked={formik.values.wantComplimentaryCall}
                      onChange={(e) => {
                        handleCheckboxChange(e);
                      }}
                    />
                  )}

                  <label className="sub_title1" htmlFor="wantComplimentaryCall">
                    {closeClick
                      ? "Call Scheduled"
                      : "I want a 10mins complimentary call!"}
                  </label>
                </div>
              )}
              <div>
                <button className="btn" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          {/* Display the file preview */}
        </div>
      </div>
    </div>
  );
};

export default ResumePopupForm;
