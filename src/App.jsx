import { useState } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { data } from "./DB/data";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container mx-auto relative w-11/12 max-w-screen-2xl h-96 mt-[20%] bg-gray-200 shadow-xl">
      <div className="slide h-full lg:flex relative overflow-hidden grid grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className={`item lg:w-1/6 h-full bg-cover bg-center transition-transform duration-500 transform ${index === currentIndex ? "scale-100" : "scale-75"
              }`}
            style={{ backgroundImage: `url(${item?.imageUrl})` }}
          >
            <div className={`content absolute top-3 lg:top-10 left-4 w-34 text-white opacity-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : ""
              }`}>
              <div className="name text-2xl font-bold">{item?.name}</div>
              <div className="des">{item?.description}</div>
              <button className="btn py-2 px-4 bg-blue-500 text-white mt-2 rounded-lg">See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="prev bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-full" onClick={prevSlide}>
          <CgArrowLeft />
        </button>
        <button className="next bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-full ml-2" onClick={nextSlide}>
          <CgArrowRight />
        </button>
      </div>
    </div>
  );
}
