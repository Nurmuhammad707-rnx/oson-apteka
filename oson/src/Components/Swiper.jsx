import React, { useEffect, useState } from 'react';
import slide1 from '../assets/slide_1.png';
import slide2 from '../assets/slide_2.png';
import slide3 from '../assets/slide_3.png';

const images = [slide1, slide2, slide3];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="js-slider">
      <img src={images[currentIndex]} alt="Slide" className="js-slide-img" />
    </div>
  );
}

export default ImageSlider;
