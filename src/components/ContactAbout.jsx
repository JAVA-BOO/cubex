import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import FooterLogo from "../assets/footer-logo.png";

export default function ContactAbout() {
  return (
    <>
      <div>
        <img src={FooterLogo} className="w-[100px]" alt="" />
        <p className="py-4 text-[10px] leading-tight text-[#fff]">
          Receive crypto assets instantly, sell them <br />
          effortlessly, and make fast, secure payments for <br />
          your everyday needs with Cubex App.
        </p>
        <div className="flex gap-4 py-4">
          <FaInstagram className="text-[#FCCAFF]" size={20} />
          <FaFacebookF className="text-[#FCCAFF]" size={20} />
          <FaLinkedinIn className="text-[#FCCAFF]" size={20} />
          {/* <FaTwitter size={20} />
          <FaTwitter size={20} /> */}
        </div>
      </div>
    </>
  );
}
