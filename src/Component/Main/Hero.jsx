import React, { useEffect, useRef, useState } from "react";
import SideBar from "../SideBar/SideBar";
// import heroVideo from "../../Videos/sparkuls.mp4";
import heroVideo from "../../Videos/sparkuls.webm";
import { SvgIcon } from "@mui/material";
import SVGIcon from "../../Config/SVGIcon";
import { Nav } from "../../Constants/index.js";
import logo from "../../Images/SPARKULS-removebg-preview.png";
import { HashLink as NavLink } from "react-router-hash-link";
import Modal from "../../Config/Modal.jsx";

const Hero = () => {
  const [flag, setFlag] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const requestRef = useRef(null);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleAnimation = () => {
    setFlag((prev) => !prev);
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    flag
      ? (() => {
          requestRef.current.classList.add("animate-bounce");
          setTimeout(() => {
            requestRef.current.classList.remove("animate-bounce");
            setFlag(false);
          }, 1000); // Adjust timing to match your animation
        })()
      : null;
  }, [flag]);

  return (
    <section className="h-screen relative w-full">
      {/* Video $$ related video styles */}
      <video
        src={heroVideo}
        loop
        muted
        autoPlay
        className="absolute top-0 h-full w-full object-cover  bg-center"
      />
      <div className="bg-black flex flex-col absolute top-0 opacity-50   left-0 size-full"></div>

      <SideBar />

      {/* Visible Nav only on large screens */}
      <div className="hidden lg:flex lg:items-center  lg:justify-between lg:text-white lg:top-0 lg:absolute lg:left-0 lg:w-full lg:pl-24  ">
        <figure>
          <NavLink to="/">
            <img
              src={logo}
              className="w-[250px] h-[100px] -translate-x-8"
            />
          </NavLink>
        </figure>

        <div className="flex justify-between items-center pr-20 w-full">
          <nav className="translate-x-16">
            <ul className="flex justify-evenly items-center gap-8 xl:gap-12">
              {Nav.map((item) => (
                <li
                  className=" NavLink underlined "
                  key={item.id}>
                  <NavLink smooth to={item.route}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="border-white border-2 hover:animate-pulse rounded-md px-4 py-2 text-black bg-white font-semibold xl:px-8 xl:py-4"
            ref={requestRef}
            onClick={handleModal}>
            Start A Request
          </button>
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              showModal={showModal}
            />
          )}
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute size-full top-0 text-white flex flex-col items-center justify-center text-center  pt-32 pb-20  lg:text-left lg:pt-6 lg:pl-0 lg:mt-24 ">
        <h1 className="text-4xl  font-bold px-8 md:text-3xl lg:text-7xl lg:leading-[5rem] lg:px-24 xl:text-[5rem]  xl:pr-[30rem]">
          <span>Laundry</span> Service At Your{" "}
          <span className="">Convenience</span>
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

            <button
              className="border-2 rounded-full border-white bg-black"
              onClick={() => {
                handleAnimation();
                handleShowModal();
              }}>
              <SVGIcon
                iconName={`rightArrow`}
                height={`50px`}
                fill={`white`}
              />
            </button>
            {showModal && (
              <Modal
                setShowModal={setShowModal}
                showModal={showModal}
              />
            )}
          </div>
        </div>

        {/* Google Review */}
        <div className="lg:flex lg:justify-start lg:w-full lg:ml-52">
          <div className="bg-white/20 backdrop-blur-md gap-4 flex items-center mt-10 p-2 ">
            <p className="text-5xl text-white">G</p>
            <div className="flex flex-col gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SVGIcon
                    key={index}
                    iconName="arrow" // Example: passing props to the SVG component
                    height="30px"
                    fill="lack"
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
