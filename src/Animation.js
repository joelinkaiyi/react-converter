import React, { useEffect } from "react";
import gsap from "gsap";
import mathImage from "./math.jpg";
import "./animation.css";

const onAnimationComplete = () => {
  document.querySelector(".animation").classList.add("opacity-0");

};

const StartAnimation = ({ onAnimationComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero img",
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power1.inOut" }
    )
      .fromTo(
        ".slider",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=1.5"
      )
      .fromTo(
        ".animation h1",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.in" },
        "-=0.5"
      )
      .to(".animation", {
        duration: 1,
        opacity: 0,
        onComplete: onAnimationComplete,
      });

    tl.play();

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  return (
    <section className="animation-wrapper">
      <section className="animation">
        <div className="hero">
          <img
            src={mathImage}
            alt="animation"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="slider"></div>
      </section>
    </section>
  );
};

export default StartAnimation;
