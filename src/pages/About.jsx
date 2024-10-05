// Home.js
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import scenaImage from "../assets/scena.png";
import dulapuri from "../assets/dulapuri.png";
import Carousel from "../components/Carousel/Carousel";

function About() {
  const slides = [
    "https://askiafurniture.ro/wp-content/uploads/2017/04/atelier-arm-chair-copy-2-708x708.png",
    "https://askiafurniture.ro/wp-content/uploads/2018/10/Fair-and-Square-Chair.png",
    "https://askiafurniture.ro/wp-content/uploads/2017/04/v3-barstool-low-copy.png",
    "https://askiafurniture.ro/wp-content/uploads/2017/04/atelier-table.png",
  ];

  return (
    <>
      <div className="  overflow-hidden shadow-lg m-10">
        <div className=" w-full flex flex-col overflow-hidden  sm:flex-row md:h-200">
          <div className="order-first ml-auto h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              className="h-full w-full object-cover bg-[#D6E0C6]"
              src={scenaImage}
              alt="Scena"
            />
          </div>
          <div className="flex w-full flex-col sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="text-xl font-bold  md:text-2xl lg:text-4xl mt-4 ml-4">
              3D Concept Models for sustainable furniture
            </h2>
            <p className="mt-12 text-lg  p-30 text-justify mr-10 w-ful">
              The environmental study on 3D models of furniture using
              sustainable solutions for manufacturing.The purpose of the
              eco-design is to reduce the negative impact on the environment by
              using the useful, sustainable and aesthetically pleasing product.
            </p>
            <div className="flex items-center justify-center">
              <button className="m-4 mt-14 mb-4 flex w-44 cursor-pointer items-center justify-center  bg-green-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300">
                <Link className=" text-white" to="/">
                  See products
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center p-10 ">
          <div className="flex flex-col items-center md:w-1/2 p-10">
            <p className="sm:text-3xl md:text-4xl font-bold  md:text-justify p-30 lg:mr-20 flex items-center justify-center">
              Various models of chairs, tables and lights
            </p>
            <div className="mt-10 md:mt-20">
              <Link to="/">
                <button className="w-[200px] outline outline-offset-2 outline-orange-700 px-5 py-2.5 text-sm font-medium text-orange-700 hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300">
                  See more
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 overflow-hidden mt-10 md:mt-0">
            <Carousel slides={slides} />
          </div>
        </div>

        <div className="m-10 flex flex-col md:flex-row items-center justify-center h-auto md:h-[300px] bg-[#D6E0C6] mb-10 p-4 md:p-0">
          <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-200 md:space-x-4">
            <div className="flex flex-col items-center max-w-xs p-4 text-green-950">
              <p className="text-gray-600 font-bold">
                Sustainability
                <span className="block mt-2 font-normal items-center">
                  Choosing sustainable contributes to a greener and more
                  eco-friendly lifestyle
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs p-4 text-green-950">
              <p className="text-gray-600 font-bold">
                Innovation
                <span className="block mt-2 font-normal">
                  Embrace the future of interior design with innovative
                  furniture solutions that seamlessly blend cutting-edge
                  technology
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs p-4 text-green-950">
              <p className="text-gray-600 font-bold">
                Aesthetics
                <span className="block mt-2 font-normal">
                  Experience the perfect blend of form and function with our
                  aesthetics-focused furniture
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xxl overflow-hidden shadow-lg m-10">
        <div className="flex flex-col md:flex-row w-full bg-white">
          <div className="flex w-full flex-col p-8 sm:w-1/2 lg:w-3/5 order-last md:order-first">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold ">
              3D Concept Models for sustainable furniture
            </h2>
            <p className="mt-12 text-lg p-30 text-justify">
              The environmental study on 3D models of furniture using
              sustainable solutions for manufacturing. The purpose of the
              eco-design is to reduce the negative impact on the environment by
              using the useful, sustainable and aesthetically pleasing product.
            </p>
            <div className="flex items-center justify-center">
              <Link to="/contact">
                <button className="mt-14 mb-4 w-44 bg-green-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-2/5 order-first md:order-last">
            <img
              className="w-full h-[300px] md:h-[500px] object-cover m-4"
              src={dulapuri}
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
