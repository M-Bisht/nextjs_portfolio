"use client";
import React from "react";
import "./style.css";
import BgColorCircle from "../global/comps/BgColorCircle";
import ContactForm from "./comps/ContactForm";
import ContactInfo from "./comps/ContactInfo";

const page = () => {
  return (
    <div className="contactPage">
      <div className="formWrapper">
        <ContactForm />
        <ContactInfo />
      </div>
      <BgColorCircle />
    </div>
  );
};

export default page;
