"use client";
import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        goToNext();
        setIsAnimating(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="carousel-container mx-auto relative"
      style={{ height: "500px", width: "290px" }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`rounded-2xl border-2 shadow-gray-500/20 shadow-lg absolute transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          } ${isAnimating ? "z-10" : "z-0"}`}
          style={{ height: "500px", width: "290px", objectFit: "cover" }}
          loading="lazy"
          // Nota: usamos <img> porque es local y Next.js no optimiza aquí
        />
      ))}
    </div>
  );
};

export default Carousel;
