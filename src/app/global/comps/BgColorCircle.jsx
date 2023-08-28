import React from "react";
import { gsap } from "gsap";

const BgColorCircle = () => {
  const mouseMove = (e) => {
    gsap.to(".bgColorCircle", {
      top: `${e.pageY}px`,
      left: `${e.pageX}px`,
      duration: 0.1,
    });
  };
  const mouseLeave = () => {
    if (window.innerWidth < 551) {
      gsap.to(".bgColorCircle", {
        top: "-5%",
        left: "50%",
        duration: 0.2,
      });
    } else {
      gsap.to(".bgColorCircle", {
        top: "50%",
        left: "50%",
        duration: 0.2,
      });
    }
  };
  return (
    <>
      <div
        className="bgColorCircleDiv"
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
      >
        <div className="bgColorCircle"></div>
      </div>
    </>
  );
};

export default BgColorCircle;
