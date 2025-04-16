import React, { useState } from "react";
import "./Slider.css";

import Image1 from "../assets/Nyc.jpg";
import Image2 from "../assets/Bali.jpg";
import Image3 from "../assets/India.jpg";
import Image4 from "../assets/Maldives.jpg";
import Image5 from "../assets/Australia.jpg";
import Image6 from "../assets/Dubai.jpeg";
import Image7 from "../assets/Mauritius.jpg";
import Image8 from "../assets/Canada.jpeg";

const Images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-cont">
      <h1>DESTINATIONS GALLERY</h1>
      <div className="c-content">
        <button onClick={handlePrev} className="arrow-button prev">
          ←
        </button>
        <div className="img-cont">
          <img
            src={Images[index]}
            alt={`Destination ${index + 1}`}
            className="fade-image"
          />
          <button onClick={handleNext} className="arrow-button next">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
