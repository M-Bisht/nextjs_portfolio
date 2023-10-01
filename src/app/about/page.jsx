"use client";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCoverflow, EffectCube, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgDataApi from "./comps/ImgDataApi";
import "./style.css";
import Image from "next/image";

const Page = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the client-side check here
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const imgCall = (className) => {
    return ImgDataApi.map((elem, ind) => (
      <SwiperSlide key={ind} className={className}>
        <Image
          src={elem.img}
          alt="Technologies I am Familiar With"
          sizes="100%"
          width={0}
          height={0}
        />
      </SwiperSlide>
    ));
  };

  const customHtml = () => {
    if (windowWidth > 900) {
      return (
        <Swiper
          className="aboutCube"
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 1,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
        >
          {imgCall("")}
        </Swiper>
      );
    } else {
      return (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="slideshowEffect"
        >
          {imgCall("slideShowSlides")}
        </Swiper>
      );
    }
  };

  return (
    <div className="aboutPage">
      <div className="aboutDiv1">
        <p>
          Hello, my name is <span>Mayank Bisht</span>, and I&#39;m a 19-year-old
          front-end <span>web developer </span> from Delhi, India. Right now,
          I&#39;m studying various technologies to strengthen my career in the
          tech industry. I enjoy making cool websites and am constantly learning
          new things. My ambition is to create websites that people enjoy using.
        </p>
      </div>
      <div className="aboutDiv2">{windowWidth !== null && customHtml()}</div>
    </div>
  );
};

export default Page;
