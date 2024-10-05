import React, { useState } from "react";
import left from "../../assets/left.png";
import right from "../../assets/right.png";

//daca vreau sa sar peste o img set current se initializeaza cu 0
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  // prin setCurrent(slides.length - 1) se afla indexul ultimului slide
  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  // daca indexul este egal cu cel precendent atunci atunci setCurrent cu 0
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    //prin `translateX(-${current * 100}%)` se translateaza imaginea in functie de index* 100,
    //pt ima initiala este 0*100, sta pe loc
    <div className="relative">
      <div
        className="flex transition-transform duration-400 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            src={slide}
            alt={`Slide ${index}`}
            key={index}
            className="w-screen/4 h-full object-cover"
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex w-full justify-between items-center px-10">
        <button onClick={previousSlide}>
          <img
            className="flex align-middle h-10"
            src={left}
            height={10}
            alt="img"
          />
        </button>
        <button onClick={nextSlide}>
          <img
            className="flex align-middle h-10"
            src={right}
            height={10}
            alt="img"
          ></img>
        </button>
      </div>
      {/* se adauga cercurile de jos care corespund unei cheie unice egale cu indexul imaginii, current slide o sa fie alb altfel ramane gri*/}
      <div className="absolute bottom-0 left-0 flex w-full justify-center gap-3 p-5">
        {slides.map((s, index) => (
          <span
            key={index}
            // utilizand setCurrent in functie de index ne duce la imaginea corecpunzatoare cand apasam pe ele
            onClick={() => setCurrent(index)}
            className={`w-5 h-5 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
