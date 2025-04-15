import { useState } from "react";
import './Image.css';

const images = [
    'https://source.unsplash.com/600x300/?paris,eiffel-tower',
    'https://source.unsplash.com/600x300/?new-york,city',
    'https://source.unsplash.com/600x300/?tokyo,cityscape',
    'https://source.unsplash.com/600x300/?santorini',
    'https://source.unsplash.com/600x300/?bali,beach',
    'https://source.unsplash.com/600x300/?rome,colosseum',
    'https://source.unsplash.com/600x300/?dubai,skyline',
    'https://source.unsplash.com/600x300/?machu-picchu',
    'https://source.unsplash.com/600x300/?maldives',
    'https://source.unsplash.com/600x300/?iceland,northern-lights',
    ];

    function ImageCarousel() {
        const [current, setCurrent] = useState(0);

        const nextSlide = () => {
            setCurrent((prev) => (prev + 1) % images.length);
        };

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

