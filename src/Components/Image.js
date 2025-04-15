import React, { useState } from 'react';
import './Image.css';

// Correct list of travel destination images
const images = [
  'https://images.unsplash.com/photo-1521747116042-5f9f82b70e18?auto=format&fit=crop&w=600&h=300&q=80', // Maldives
  'https://images.unsplash.com/photo-1491286381295-576dd22bdf2a?auto=format&fit=crop&w=600&h=300&q=80', // Santorini
  'https://images.unsplash.com/photo-1482538380141-4ba6ffcd6e11?auto=format&fit=crop&w=600&h=300&q=80', // Paris
  'https://images.unsplash.com/photo-1505675357110-cf07b7621d67?auto=format&fit=crop&w=600&h=300&q=80', // Tokyo
  'https://images.unsplash.com/photo-1503444913034-f85597d9dbd7?auto=format&fit=crop&w=600&h=300&q=80', // New York
  'https://images.unsplash.com/photo-1548096964-8257e0e47ac6?auto=format&fit=crop&w=600&h=300&q=80', // Rome
  'https://images.unsplash.com/photo-1489559060533-d8cb93b2d799?auto=format&fit=crop&w=600&h=300&q=80', // Machu Picchu
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=300&q=80', // Beach
  'https://images.unsplash.com/photo-1461850686699-10b68db855d4?auto=format&fit=crop&w=600&h=300&q=80', // Iceland
  'https://images.unsplash.com/photo-1451290193422-2258468e8b93?auto=format&fit=crop&w=600&h=300&q=80', // Dubai
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Move to the next image
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Move to the previous image
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-cont">
      <button className="nav prev" onClick={prevSlide}>‹</button>
      <img src={images[current]} alt={`Slide ${current}`} className="slide" />
      <button className="nav next" onClick={nextSlide}>›</button>
    </div>
  );
}

export default ImageCarousel;
