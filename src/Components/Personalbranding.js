// Personalbranding.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BrandingModal from "./BrandingModal";
import VideoResumeModal from "./VideoResumeModal";
import "../css/Personalbranding.css";
import Kit from "../Images/Kit.png";
import vds from "../Images/vds.png";
import Vdt from "../Images/Vdt.png";
import pwd from "../Images/pwd.png";
import Youtube from "../Images/Youtube.png";
import { HiHand } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Personalbranding = () => {
  const [logoIdModalOpen, setLogoIdModalOpen] = useState(false);
  const [videoTestimonialModalOpen, setVideoTestimonialModalOpen] =
    useState(false);
  const [videoResumeModalOpen, setVideoResumeModalOpen] = useState(false);

  const token = useSelector((state) => state.userData.token);
  const navigate = useNavigate();

  const openLogoIdModal = () => {
    if (token) {
      setLogoIdModalOpen(true);
    } else {
      navigate("/login");
    }
  };
  const closeLogoIdModal = () => setLogoIdModalOpen(false);

  const openVideoTestimonialModal = () => {
    if (token) {
      setVideoTestimonialModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  const closeVideoTestimonialModal = () => setVideoTestimonialModalOpen(false);

  const openVideoResumeModal = () => {
    if (token) {
      setVideoResumeModalOpen(true);
    } else {
      navigate("/login");
    }
  };
  const closeVideoResumeModal = () => setVideoResumeModalOpen(false);

  const handleOnclick = () => {
    openLogoIdModal();
  };

  const handleOnclickVideo = () => {
    openVideoTestimonialModal();
  };

  const handleOnclickWebsite = () => {
    openVideoResumeModal();
  };

  return (
    <div>
      <div
        className="branding-heading"
        data-aos="zoom-out-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
        id="branding"
      >
        <h1>Personal Branding Solutions</h1>
        <p>
          Your personal brand is very vital to you professionally. It is how you
          present yourself to potential employers. We provide you with solutions
          to ensure that employers see you in the way you want them to!
        </p>
      </div>

      <div className="main-branding">
        <div
          className="main-box"
          data-aos="zoom-out-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclick}>
              <img src={Kit} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Logo Id Kits</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclickVideo}>
              <img src={vds} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Video Testimonial</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclickWebsite}>
              <img src={Vdt} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Video Resume</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1">
              <img src={pwd} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Personalised websites</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BrandingModal
        isOpen={logoIdModalOpen}
        onRequestClose={closeLogoIdModal}
        handleSubmit={() => {
          // Handle form submission logic for Logo Id Kit
          // ...
          closeLogoIdModal(); // Close the modal after submission
        }}
      />

      <BrandingModal
        isOpen={videoTestimonialModalOpen}
        onRequestClose={closeVideoTestimonialModal}
        handleSubmit={() => {
          // Handle form submission logic for Video Testimonial
          // ...
          closeVideoTestimonialModal(); // Close the modal after submission
        }}
      />

      <VideoResumeModal
        isOpen={videoResumeModalOpen}
        onRequestClose={closeVideoResumeModal}
        handleSubmit={() => {
          // Handle form submission logic for Video Resume
          // ...
          closeVideoResumeModal(); // Close the modal after submission
        }}
      />
    </div>
  );
};

export default Personalbranding;
