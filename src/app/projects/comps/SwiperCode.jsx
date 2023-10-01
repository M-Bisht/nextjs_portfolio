"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { useLayoutEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClickDataApi from "./ClickDataApi";
import DataApi from "./DataApi";
import Image from "next/image";

const SwiperCode = () => {
  // Defining Click Div Display Property
  const clickDivDisplayNone = { display: "none" };
  const clickDivDisplay = { display: "" };

  // Created A usestate to store swipe index
  const [swipeIndex, setSwipeIndex] = useState(null);
  const [techs, setTechs] = useState([]);
  const [clickDivStyle, setClickDivStyle] = useState(clickDivDisplayNone);
  const [windowWidth, setWindowWidth] = useState(null);

  // By call back swipe data get and set in usestate
  const swipes = (_e, i) => {
    setSwipeIndex(i);
    setClickDivStyle(clickDivDisplay);
  };

  // Closing Click Div Function
  const closeDiv = () => {
    setClickDivStyle(clickDivDisplayNone);
  };

  // Getting tech array from Clickdata api and set in usestate
  function techFun() {
    const techs = ClickDataApi.map((e) => e.tech);
    setTechs(techs);
  }

  // Creating Slides/Div Component
  function gettingSlides(SwiperSlide, className) {
    return DataApi.map((elem, index) => {
      return (
        <SwiperSlide
          onClick={() => {
            swipes(elem, index);
          }}
          className={className}
          key={index}
        >
          <Image
            src={elem.img}
            alt={elem.hoverText}
            sizes="100%"
            width={0}
            height={0}
          />
          <h2>{elem.hoverText}</h2>
        </SwiperSlide>
      );
    });
  }

  // Writing custom html based on width

  const customHtml = () => {
    if (windowWidth >= 900) {
      return (
        <Swiper
          className="swiperWrapper"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {gettingSlides(SwiperSlide, "swipes")}
        </Swiper>
      );
    } else {
      return (
        <div className="divWrapper">{gettingSlides("div", "swipesMobile")}</div>
      );
    }
  };

  // Gsap Animation
  useLayoutEffect(() => {
    setWindowWidth(window.outerWidth);
    techFun();

    if (windowWidth >= 900) {
      gsap.to(".swiperWrapper", {
        autoAlpha: 1,
      });
    }

    let media = gsap.matchMedia();
    let ctx = gsap.context(() => {
      media.add("(width < 900px)", () => {
        gsap.from(".swipesMobile", {
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
        });
      });
    });

    return () => ctx.revert(); // <-- CLEANUP!
  }, [windowWidth]);

  return (
    <>
      {customHtml()} {/* Width Based HTML */}
      <div /* On Click Show Html */
        className="clickDivContainer"
        style={clickDivStyle}
        onClick={closeDiv}
      ></div>
      {ClickDataApi.map((elem, index) => {
        if (index === swipeIndex) {
          return (
            <div className="clickDiv" key={index} style={clickDivStyle}>
              <FontAwesomeIcon
                onClick={closeDiv}
                icon={faXmark}
                className="close"
              />
              <video src={elem.video} autoPlay muted loop></video>
              <h2>{elem.text}</h2>
              <p>{elem.info}</p>
              <ul>
                <div className="ulDiv1">Technologies Used</div>
                <div className="ulDiv2">
                  {techs[index].map((elem, index) => {
                    return <li key={index}>{elem.li}</li>;
                  })}
                </div>
              </ul>
              <div className="liveLink">
                <span>Live Link :</span>
                <a href={elem.link}>Click Here</a>
              </div>
              <div className="githubRepo">
                <span>Github Repo :</span>
                <a href={elem.githubRepo}>Click Here</a>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default SwiperCode;
