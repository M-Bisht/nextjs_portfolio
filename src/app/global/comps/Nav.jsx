"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Nav = () => {
  // Creating useRefs
  const navUlRef = useRef(null);
  const navOverlayRef = useRef(null);

  //Using Useeffect Hool
  useEffect(() => {
    const lists = navUlRef.current.querySelectorAll("a");
    const navOverlay = navOverlayRef.current;

    // For each lists created forEach
    lists.forEach((li, index) => {
      
      // Using Mouse enter event listner
      li.addEventListener("mouseenter", () => {
        let liWidth = li.clientWidth;

        // Nav Overlay Move Animation
        function navOverlayMove(px) {
          navOverlay.style.width = liWidth + "px";
          navOverlay.style.transform = `translateX(${liWidth - px}px)`;
        }

        // Condion Check
        if (window.innerWidth >= 550) {
          switch (index) {
            case 0:
              navOverlayMove(75);
              break;
            case 1:
              navOverlayMove(9.5);
              break;
            case 2:
              navOverlayMove(-110);
              break;
            case 3:
              navOverlayMove(-176);
              break;
          }
        }
        //   else {
        //   switch (index) {
        //     case 0:
        //       navOverlayMove(55);
        //       break;
        //     case 1:
        //       navOverlayMove(12);
        //       break;
        //     case 2:
        //       navOverlayMove(-47);
        //       break;
        //     case 3:
        //       navOverlayMove(-117);
        //       break;
        //   }
        // }

        // Mouse Leave Animation
        li.addEventListener("mouseleave", () => {
          navOverlay.style.width = "";
          navOverlay.style.transform = `translateX(${0}px)`;
        });
      });
    });

    // Adding Gsap Animation
    gsap
      .timeline()
      .from(".navOverlay", {
        y: "-20vh",
        duration: 0.7,
        opacity: 0,
      })
      .to(
        ".navOverlay",
        {
          transition: "0.2s linear",
        },
        "<"
      )
      .from(
        lists,
        {
          autoAlpha: 0,
          duration: 0.5,
        },
        "1.1"
      );
  }, []);

  // Returning Component Data
  return (
    <nav>
      <ul ref={navUlRef}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <div ref={navOverlayRef} className="navOverlay"></div>
      </ul>
    </nav>
  );
};

export default Nav;
