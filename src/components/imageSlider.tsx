import "../style/slider.css";

import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface slides {
  slides: string[];
}

export function ImageSlider({ slides }: slides) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[1300px] h-[500px] relative ">
      <FaChevronLeft
        data-carousel-prev
        onClick={goToPrevious}
        className="absolute select-none top-1/2 size-[24px] -translate-x-1/2 left-[32px] z-[1] cursor-pointer fill-white"
      />

      <FaChevronRight
        data-caroulsel-next
        onClick={goToNext}
        className="absolute select-none top-1/2 size-[24px] -translate-x-1/2 right-[32px] z-[1] cursor-pointer fill-white"
      />

      <div className="flex h-[90%] w-[90%] items-center justify-center">
        {slides.map((slide: string, index: number) => (
          <img
            key={index}
            src={slide}
            className={`transition-all ease-out duration-300 ${
              currentIndex === index ? "h-[90%] w-[90%]" : "invisible w-0 h-0"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center gap-[8px]">
        {slides.map((_: string, index: number) => (
          <div
            key={index}
            className={`w-[50px] h-[10px] rounded-lg ${
              currentIndex === index ? "bg-gray-500" : "bg-white"
            } cursor-pointer text-[3rem] text-white transition-all ease-linear duration-500`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
