import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  return (
    <div className="wrapperDiv2">
      <div className="infoDiv1">
        <h3>Contact Info</h3>
      </div>
      <div className="infoDiv2">
        <FontAwesomeIcon icon={faEnvelope} className="envelop" />
        <span>mbisht8368@gmail.com</span>
      </div>
      <div className="infoDiv3">
        <FontAwesomeIcon icon={faPhone} className="phone" />
        <span>Soon</span>
      </div>
      <div className="infoDiv4">
        <a href="https://www.linkedin.com/in/mayankbishtmb/" target="_main">
          <FontAwesomeIcon icon={faLinkedinIn} className="linkedIn" />
        </a>
        <a href="https://www.instagram.com/mayank__bisht__mb/" target="_main">
          <FontAwesomeIcon icon={faInstagram} className="instagram"/>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
