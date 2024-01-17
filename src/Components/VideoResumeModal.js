// VideoResumeModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
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

const VideoResumeModal = ({ isOpen, onRequestClose, handleSubmit }) => {
  const navigate = useNavigate();
  const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
  const [closeClick, setCloseClick] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullname: "",
      currentLocation: "",
      wantComplimentaryCall: false,
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Required"),
      currentLocation: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        // Your form submission logic here
        // ...

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
          <h1>Get Video Resume</h1>
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
            <label className="sub_title" htmlFor="currentLocation">
              Current Location
            </label>
            <input
              placeholder="Enter your current location"
              className="form_style"
              type="text"
              id="currentLocation"
              name="currentLocation"
              value={formik.values.currentLocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.currentLocation &&
              formik.errors.currentLocation && (
                <div className="error-message">
                  {formik.errors.currentLocation}
                </div>
              )}
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

export default VideoResumeModal;
