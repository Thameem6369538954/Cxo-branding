import React, { useState } from "react";
import "../css/resumePrice.css";
import BasicResumeForm from "./BasicResumeForm";

const ResumePrice = () => {
  const [isBasicModalOpen, setBasicModalOpen] = useState(false);
  const [isStandardModalOpen, setStandardModalOpen] = useState(false);
  const [isPremiumModalOpen, setPremiumModalOpen] = useState(false);

    const openFormModal = (plan) => {
      console.log(plan,"plaaaaaaaaaaaaaaan")
    switch (plan) {
      case "basic":
        setBasicModalOpen(true);
        break;
      case "standard":
        setStandardModalOpen(true);
        break;
      case "premium":
        setPremiumModalOpen(true);
        break;
      default:
        break;
    }
  };

  const closeFormModal = (plan) => {
    switch (plan) {
      case "basic":
        setBasicModalOpen(false);
        break;
      case "standard":
        setStandardModalOpen(false);
        break;
      case "premium":
        setPremiumModalOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="profile-main">
        <div
          className="profile-heading1"
          data-aos-duration="2000"
          data-aos="zoom-out-right"
        >
          <h1>View our plans</h1>
          <h5>Globalize your reach!</h5>
        </div>

        <div
          className="subscribe-main"
          data-aos-duration="3000"
          data-aos="zoom-in"
        >
          <div className="Total">
            <div className="subscribe-box">
              <h3>Basic Plan</h3>
              <ul className="subs-list">{/* ...checkbox items */}</ul>
              <button
                className="pro-btn"
                onClick={() => {
                  openFormModal("basic");
                }}
              >
                Get it Now
              </button>
            </div>
            <p>“ Stand out from those who compete with “</p>
          </div>

          <div className="Total">
            <div className="subscribe-box">
              <h3>Standard Plan</h3>
              <ul className="subs-list">{/* ...checkbox items */}</ul>
              <button
                className="pro-btn"
                onClick={() => {
                  openFormModal("standard");
                }}
              >
                Get it Now
              </button>
            </div>
            <p>“Create communication with like-minded people”</p>
          </div>
          <div className="Total">
            <div className="subscribe-box">
              <h3>Premium Plan</h3>
              <ul className="subs-list">{/* ...checkbox items */}</ul>
              <button
                className="pro-btn"
                onClick={() => {
                  openFormModal("premium");
                }}
              >
                Get it Now
              </button>
            </div>
            <p>
              “Project yourself with the way you want your employers to see you”
            </p>
          </div>
        </div>
      </div>

      {/* {isBasicModalOpen && (
        <BasicResumeForm onClose={() => closeFormModal("basic")} />
      )} */}

      <BasicResumeForm
        isOpen={isBasicModalOpen}
        onRequestClose={closeFormModal}
        handleSubmit={() => {
          // Handle form submission logic for Logo Id Kit
          // ...
          closeFormModal("basic"); // Close the modal after submission
        }}
      />

      {/* {isStandardModalOpen && (
        // Render StandardForm component here if needed
        <StandardForm onClose={() => closeFormModal("standard")} /> 
      )}
      {isPremiumModalOpen && (
        // Render PremiumForm component here if needed
        <PremiumForm onClose={() => closeFormModal("premium")} />
      )} */}
    </div>
  );
};

export default ResumePrice;
