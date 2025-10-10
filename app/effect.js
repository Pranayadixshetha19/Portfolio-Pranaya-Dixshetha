"use client";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.getElementById("cursorGlow");

    const handleMouseMove = (e) => {
      if (!cursor) return;
      const rect = cursor.getBoundingClientRect();
      const offsetX = rect.width / 2;
      const offsetY = rect.height / 2;

      cursor.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="cursorGlow"
      className="fixed w-[100px] h-[100px] rounded-full 
      bg-[rgba(3,116,245,0.4)] 
      shadow-[10px_10px_200px_100px_rgb(0_119_255/0.6)] 
      pointer-events-none 
      transition-transform duration-[50] ease-linear 
      z-[9999] opacity-40"
    ></div>
  );
}
