import React, { useState } from "react";
import Modal from "react-modal";

import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "../Axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../css/JobAdviceModal.css";

import { InlineWidget } from "react-calendly";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
  },
};

const BrandingModal = ({ isOpen, onRequestClose, handleSubmit }) => {

    const navigate = useNavigate();
    const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
    const [closeClick, setCloseClick] = useState(false);
     const userId = useSelector((state) => state?.userData?.userData?._id);
   const formik = useFormik({
     initialValues: {
       fullname: "",
       socialmedialink: "",
       resume: null,
       wantComplimentaryCall: false,
     },
     validationSchema: Yup.object({
       fullname: Yup.string().required("Required"),
       socialmedialink: Yup.string().url("Invalid URL").required("Required"),
     }),

     onSubmit: async (values) => {
       try {
          const response = await axios.post("/post-logokit", {
            userId,
            socialMediaLink: values.socialmedialink,
            wantComplimentaryCall: values.wantComplimentaryCall,
          });


         toast.success("Form submitted successfully!");
         setTimeout(() => {
           onRequestClose();
           navigate("/");
         }, 2000);
       } catch (error) {
         console.error("Error during form submission:", error.message);
         // Handle error
       }
     },
   });

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

//    const handleFileChange = (e) => {
//      formik.setFieldValue("resume", e.target.files[0]);
//    };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Branding Modal"
      style={customStyles}
    >
      <ToastContainer />
      <div className="resume-form">
        <div className="form-int-icon">
          <h1>Get Logo Kit</h1>
          <AiOutlineCloseCircle
            className="form-icon"
            onClick={onRequestClose}
          />
        </div>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="form_group">
            <label className="sub_title" htmlFor="fullname">
              Full Name
            </label>
            <input
              placeholder="Enter your full name"
              className="form_style"
              type="text"
              id="fullname"
              name="fullname"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <div className="error-message">{formik.errors.fullname}</div>
            )}
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="socialmedialink">
              Social Media Link
            </label>
            <input
              placeholder="Enter your social media link"
              className="form_style"
              type="text"
              id="socialmedialink"
              name="socialmedialink"
              value={formik.values.socialmedialink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.socialmedialink &&
              formik.errors.socialmedialink && (
                <div className="error-message">
                  {formik.errors.socialmedialink}
                </div>
              )}
          </div>
          {/* <div className="form_group">
            <label className="sub_title" htmlFor="resume">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
            />
          </div> */}
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
          <div className="form_group bottom-right">
            <button className="btn1 submit-button" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default BrandingModal;
