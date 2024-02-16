// BasicResumeForm.js

import React from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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

const BasicResumeForm = ({ isOpen, onRequestClose, handleSubmit }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      currentLocation: "",
      email: "",
      phone: "",
      paymentDetails: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Required"),
      currentLocation: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      paymentDetails: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        // Your form submission logic here, including billing details
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
          <h1>Subscribe to Basic Plan</h1>
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
          <div className="form_group">
            <label className="sub_title" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Enter your email"
              className="form_style"
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="phone">
              Phone
            </label>
            <input
              placeholder="Enter your phone number"
              className="form_style"
              type="text"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="error-message">{formik.errors.phone}</div>
            )}
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="paymentDetails">
              Payment Details
            </label>
            <input
              placeholder="Enter payment details"
              className="form_style"
              type="text"
              id="paymentDetails"
              name="paymentDetails"
              value={formik.values.paymentDetails}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.paymentDetails && formik.errors.paymentDetails && (
              <div className="error-message">
                {formik.errors.paymentDetails}
              </div>
            )}
          </div>
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

export default BasicResumeForm;
