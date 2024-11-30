import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Select all elements to animate
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0, // End state
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element, // Animate when the element is in view
            start: "top 80%", // When the top of the element is 80% down the viewport
            toggleActions: "play none none none", // Animation play once
          },
        }
      );
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
};
