// Jobsearch.js
import React, { useState } from "react";
import "../css/Jobsearch.css";
import Headerimg from "../Images/Headerimg.jpg";
import JobAdviceModal from "./JobAdviceModal"; // Update the path accordingly
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Jobsearch = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const token = useSelector((state) => state.userData.token);

  const handleOpenJobform = () => {
    if (token) {
      setModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="job-main-conatiner" id="advice">
      <div className="headline">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          Job Search Advice
        </h1>

        <button className="button" onClick={handleOpenJobform}>
          get job advice
        </button>
      </div>

      <div
        className="job-box"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="image-container">
          <img src={Headerimg} width={400} alt="" onClick={handleOpenJobform} />
          <p>
            Success often favors those who possess a well-defined career
            strategy and thorough preparation.
          </p>
        </div>
        <div className="text-container">
          <ul className="job">
            <h4>Benefits</h4>
            <li> Create employer persona</li>
            <li> Foster leads & instant connections.</li>
            <li> Craft a biography for multiple mediums.</li>
          </ul>
        </div>
      </div>

      <JobAdviceModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default Jobsearch;
