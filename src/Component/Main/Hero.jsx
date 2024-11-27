import React from "react";
import SideBar from "../SideBar/SideBar";
import heroVideo from "../../Videos/Sparkuls (online-video-cutter.com).mp4";
import { SvgIcon } from "@mui/material";
import SVGIcon from "../../Config/SVGIcon";

const Hero = () => {
  return (
    <section className="h-screen relative">
      <video
        src={heroVideo}
        loop
        muted
        autoPlay
        className="absolute top-0 h-full w-full object-cover"
      />
      <div className="bg-black flex flex-col absolute top-0 opacity-65   left-0 size-full"></div>

      <div className="absolute size-full top-0 text-white flex flex-col items-center justify-center text-center pl-16 pt-40">
        <h1 className="text-4xl  font-bold px-8 md:text-3xl xl:text-7xl ">
          <span>Laundry</span> Service At Your{" "}
          <span className="text-primary">Convenience</span>
        </h1>
        <p className="mt-8 px-[15%] font-semibold">
          Fast and Reliable and Delivered to Your Doorstep.
        </p>
        <div className="py-2 px-4 flex gap-10 items-center rounded-full mt-8 bg-white text-black text-sm font-semibold xl:px-16">
          <div className="flex gap-2 items-center">
            <button>Dry Clean</button>
            <span className="border-l border-gray-700 mx-1 h-5"></span>
            <button>Pick Up</button>
          </div>

          <button className="border-2 rounded-full border-primary bg-primary">
            <SVGIcon
              iconName={`rightArrow`}
              height={`40px`}
              fill={`white`}
            />
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-md gap-4 flex items-center mt-10 p-2">
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
    </section>
  );
};

export default Hero;
