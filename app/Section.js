"use client"; // for Next.js 13+ app directory

import { useEffect, useState } from "react";

const Section = ({ id, children, setActivestate }) => {
  useEffect(() => {
    const element = document.getElementById(id);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActivestate(id); // update active section
        }
      },
      {
        root: null, // viewport
        threshold: 0.5, // 50% of section should be visible
      }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id, setActivestate]);

  return (
    <section id={id} style={{ height: "100vh", padding: "2rem" }}>
      {children}
    </section>
  );
};

export default Section;


