import React, { useState } from "react";
import carosal1 from "../assets/images/carosal1.png";
import carosal2 from "../assets/images/carosal2.png";
import carosal3 from "../assets/images/carosal3.png";
import carosal4 from "../assets/images/carosal4.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carosal = () => {
  const slides = [
    { uri: carosal1 },
    { uri: carosal2 },
    { uri: carosal3 },
    { uri: carosal4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].uri})` }}
        className="w-full h-[200px]  my-10 md:h-[500px] lg:h-[920px] bg-center bg-cover duration-500"
      ></div>
      <div
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white cursor-pointer"
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex absolute bottom-4 left-0 right-0 justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`text-3xl md:text-4xl lg:text-5xl mx-2 ${
              currentIndex === index ? "text-[#A6896C]" : "text-white"
            } cursor-pointer`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosal;
