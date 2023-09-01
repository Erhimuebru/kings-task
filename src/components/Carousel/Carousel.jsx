import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const autoChangeSlide = () => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); 


    return () => clearInterval(intervalId);
  };


  useEffect(() => {
    autoChangeSlide();
  }, []);

  return (
    <div className="carousel bg-yellow-500 h-96">
    
      <div className="flex flex-row">
        <p className="caption text-center text-base mt-4 text-gray-700">
          {items[currentIndex].caption}
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, distinctio?</p>
        <img src={items[currentIndex].image} alt="Carousel Slide" className="h-20 w-48" />
        <img src={items[currentIndex].image} alt="Carousel Slide" className="h-72 w-96" />
      </div>
   
      <div className="pagination -mt-10 absolute left-4">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot w-2 h-2 bg-white rounded-full inline-block mx-1 ${index === currentIndex ? 'bg-gray-500' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
