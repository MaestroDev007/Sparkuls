import React from "react";
import SideBar from "../SideBar/SideBar";
import heroVideo from "../../Videos/Rinse - Laundry and Dry Cleaning Delivery Service.mp4";
import { SvgIcon } from "@mui/material";
import SVGIcon from "../../Config/SVGIcon";
import { Nav } from "../../Constants/index.js";

const Hero = () => {
  return (
    <section className="h-screen relative w-full">
      {/* Video $$ related video styles */}
      <video
        src={heroVideo}
        loop
        muted
        autoPlay
        className="absolute top-0 h-full w-full object-cover"
      />
      <div className="bg-black flex flex-col absolute top-0 opacity-50   left-0 size-full"></div>

      {/* Visible Nav only on large screens */}
      <div className="hidden lg:flex lg:items-center  lg:justify-between lg:text-white lg:top-0 lg:absolute lg:w-full lg:pt-4 lg:pl-24 xl:pt-6 ">
        <figure></figure>

        <div className="flex justify-between items-center pr-20 w-full">
          <nav>
            <ul className="flex justify-evenly items-center gap-8 xl:gap-12">
              {Nav.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </nav>

          <button className="border-primary border rounded-md bg-primary px-4 py-2 text-white font-semibold xl:px-8 xl:py-4">
            Start A Request
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute size-full top-0 text-white flex flex-col items-center justify-center text-center pl-16 pt-40 lg:text-left lg:pt-20 lg:pl-0 ">
        <h1 className="text-4xl  font-bold px-8 md:text-3xl lg:text-7xl lg:leading-[5rem] lg:px-24 xl:text-[5rem]  xl:pr-80">
          <span>Laundry</span> Service At Your{" "}
          <span className="text-primary">Convenience</span>
        </h1>
        <p className="mt-8 px-[15%] font-semibold lg:text-left lg:text-xl lg:px-24 lg:pr-[25rem] xl:pr-[50rem]">
          Fast pickups, expert cleaning, Reliable Service, and seamless delivery
          Fast.
        </p>

        <div className="lg:flex lg:item-start lg:p-0 lg:ml-48 lg:w-full">
          <div className="py-2 px-4 flex gap-10 items-center rounded-full mt-8 bg-white text-black text-sm font-semibold lg:px-6 lg:gap-6">
            {/* Hero Button */}
            <div className="flex gap-2 items-center lg:text-base">
              <div className="flex flex-col justify-center">
                {" "}
                <p>Dry Clean</p>
                <p className="font-light lg:text-sm">Sparkuls</p>
              </div>

              <span className="border-l border-gray-700 mx-1 h-10"></span>

              <div className="flex flex-col justify-center">
                <p>Pick Up</p>
                <p className="font-light lg:text-sm">Add Address</p>
              </div>
            </div>

            <button className="border-2 rounded-full border-primary bg-primary">
              <SVGIcon
                iconName={`rightArrow`}
                height={`50px`}
                fill={`white`}
              />
            </button>
          </div>
        </div>

        {/* Google Review */}
        <div className="lg:flex lg:justify-start lg:w-full lg:ml-48">
          <div className="bg-white/20 backdrop-blur-md gap-4 flex items-center mt-10 p-2 ">
            <p className="text-5xl text-primary">G</p>
            <div className="flex flex-col gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SVGIcon
                    key={index}
                    iconName="arrow" // Example: passing props to the SVG component
                    height="30px"
                    fill="gold"
                  />
                ))}
              </div>
              <p className="font-bold">4,000+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
