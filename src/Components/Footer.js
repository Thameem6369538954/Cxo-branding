import React from "react";
import "../css/Footer.css";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div className="footer" id="manage">
        <hr></hr>
        <h1
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          CXO’s Newsletter
        </h1>
        <input
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1200"
          type="text"
          placeholder="Enter your MailAddress"
        />
        <button
          className="btn-footer"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Subscribe
        </button>
      </div>
      <div className="copy-rights">
        <div className="footer-icons">
          <TiSocialTwitter className="footer-icon" />

          <SlSocialLinkedin className="footer-icon" />

          <SlSocialInstagram className="footer-icon" />
        </div>
        <p>Copyright &copy; {year}</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
