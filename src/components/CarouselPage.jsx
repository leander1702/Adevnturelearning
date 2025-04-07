import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the autoplay module
import { Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import baner1 from '../assets/baner1.svg'
import baner2 from '../assets/baner2.svg'

const images = [
  {
    image:baner1
  },
  {
    image:baner2
  }
];

export default function CarouselPage() {
  const swiperRef = useRef(null); // Reference to the Swiper instance

  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="relative w-full shadow">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]} 
          spaceBetween={10} 
          slidesPerView={1} 
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          className="w-full h-60 sm:h-80 md:h-96 lg:h-120 border border-gray-300 shadow-2xl shadow-gray-100 rounded"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </SwiperSlide>
            
          ))}
        </Swiper>
        

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          {/* <button
            onClick={goToPrevSlide}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
          >
            &#8592;
          </button> */}
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          {/* <button
            onClick={goToNextSlide}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
          >
            &#8594;
          </button> */}
        </div>
      </div>
    </div>
  );
}
