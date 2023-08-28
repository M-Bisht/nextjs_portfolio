"use client"
import React from "react";
import "./home/style.css";
import Fname from "./home/comps/Fname";
import Lname from "./home/comps/Lname";
import BgColorCircle from "./global/comps/BgColorCircle";

const homePage = () => {
  return (
    <div className="homePage">
      <h1>
        <Fname /> {/* Defined Both Gsap in Fname */}
        <Lname />
      </h1>
      <BgColorCircle />
    </div>
  );
};

export default homePage;
