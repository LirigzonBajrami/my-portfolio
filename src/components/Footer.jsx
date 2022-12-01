import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <BsFacebook />
        <BsTwitter />
        <BsLinkedin />
      </div>
      <p>&copy; 2022 lirigzonbajrami1@gmail.com</p>
    </div>
  );
};

export default Footer;
