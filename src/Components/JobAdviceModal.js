import React, { useState } from "react";
import Modal from "react-modal";

import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Axios from "axios";
import axios from "../Axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../css/JobAdviceModal.css";
import cloudinary from "cloudinary-core";

import { InlineWidget } from "react-calendly";
const cl = cloudinary.Cloudinary.new({ cloud_name: "dhwdphigu" });



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

const JobAdviceModal = ({ isOpen, onRequestClose, handleSubmit }) => {
  const navigate = useNavigate();
  const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
  const [closeClick, setCloseClick] = useState(false);
  // const [file, setFile] = useState(null);
  // const [selectedPdf, setSelectedPdf] = useState(null);
  const { token } = useSelector((state) => state.userData);
  const userId = useSelector((state) => state?.userData?.userData?._id);
  console.log(token,"toooooo")
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

    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const headers = {};
        const formData = new FormData();
        formData.append("file", values.resume);
        formData.append("upload_preset", "job_advice");

        const cloudinaryResponse = await Axios.post(
          `https://api.cloudinary.com/v1_1/${cl.config().cloud_name}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const fileUrl = cloudinaryResponse.data.secure_url;

        const response = await axios.post("/post-jobadvice", {
          fileUrl,
          userId,
          socialMediaLink: values.socialmedialink,
          wantComplimentaryCall: values.wantComplimentaryCall,
        });

        toast.success("Form submitted successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error("Error during file upload:", error.message);
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

     const handleFileChange = (e) => {
       const file = e.target.files[0];

       if (file) {
         formik.setFieldValue("resume", file);
       }
     };

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
          <h1>Get Job Advice</h1>
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
          <div className="form_group">
            <label className="sub_title" htmlFor="resume">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
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

export default JobAdviceModal;
