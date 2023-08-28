import React, { useEffect } from "react";
import { gsap } from "gsap";

const Fname = () => {
  // Spliting name and making its array
  const fName = "Mayank";
  const fNameArr = fName.split("");

  // Using Gsap animation
  const fNameGsap = () => {
    let media = gsap.matchMedia(); // Media Define

    // Using Media
    media.add("(min-width:550px)", () => {
      gsap.from(".fNameSpan, .lNameSpan", {
        top: 160,
        duration: 0.5,
        stagger: 0.1,
      });
    });

    media.add("(width < 550px)", () => {
      gsap
        .timeline()
        .from(".fNameSpan", {
          top: -160,
          duration: 0.5,
          stagger: 0.1,
        })
        .from(".lNameSpan",{
            top: 160,
            duration: 0.5,
            stagger: 0.1,
          },"0.3"
        );
    });
  };

  // Using UseEffect Hook
  useEffect(() => {
    
    // Calling Gsap Animation
    fNameGsap();
  }, []);
  
  return (
    <div className="fName">
      {fNameArr.map((span, index) => {
        return (
          <span className="fNameSpan" key={index}>
            {span}
          </span>
        );
      })}
    </div>
  );
};

export default Fname;
