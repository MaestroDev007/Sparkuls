import React from "react";
import img from "../../Images/dry-cleaning.sha256-e2b77df2fa9697fe4a4a0d9462be36e32c570a3794b876e64faeaa987ddde998.webp";
import SVGIcon from "../../Config/SVGIcon";

const DryClean = () => {
  return (
    <section className="pl-16 mt-10 lg:mt-20">
      <h2 className="sticky text-3xl  text-center font-semibold sm:text-4xl md:text-5xl lg:text-6xl ">
        {" "}
        Dry Cleaning
      </h2>

      <figure className="mt-8 rounded-xl px-4 sm:px-8 sm:mt-10 md:flex md:items-center md:justify-center md:mt-16">
        <img
          src={img}
          className=" object-cover rounded-xl"/>
      </figure>

      <p className="pl-4 opacity-80 mt-8  sm:px-[10%] md:px-[15%] md:text-xl lg:text-2xl lg:mt-20 lg:text-center">
        Convenient pickup and delivery to save you time. High-quality cleaning
        to keep you looking your best.
      </p>

      <div className="flex items-center justify-evenly mt-8 gap-4 mx-4 text-xs sm:text-sm md:text-base md:mt-20 lg:text-2xl">
        <div className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl lg:gap-4 ">
          <SVGIcon
            iconName={`tracking`}
            // height={`30px`}
            className="fill-secondary h-[30px] lg:h-[50px]"
          />
          <p>Tracking</p>
        </div>
        <div className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl lg:gap-4 ">
          <SVGIcon
            iconName={`laundry`}
            // height={`30px`}
            className="fill-secondary h-[30px] lg:h-[50px]"
          />
          <p>Dry Clean</p>
        </div>
        <div className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl lg:gap-4 ">
          <SVGIcon
            iconName={`Schedule`}
            // height={`30px`}
            className="fill-secondary h-[30px] lg:h-[50px]"
          />
          <p>Pick Up</p>
        </div>
      </div>

      <div className="px-4 sm:mx-12 md:px-12 md:mt-20 lg:items-center lg:flex-col lg:justify-center lg:flex">
        <div className="shadow-md rounded-xl p-4 border-2 border-secondary mt-8 lg:h-[300px] lg:text-center lg:w-1/2 ">
          <h4 className="font-semibold text-xl md:text-3xl lg:text-4xl lg:text-nowrap lg:pt-4">Your clothes tracked</h4>

          <p className="mt-4 opacity-85 lg:text-xl lg:mt-12">
            You can schedule a pickup any day of the week. We’ll email you a
            photo and itemized inventory of everything being cleaned
          </p>
        </div>

        <div className="mt-8 p-2 opacity-80 rounded-xl shadow-xl border md:mt-16">
          <p className=" mt-2 text-center md:text-2xl ">
            Standard 3-4 day turnaround for all orders
          </p>

          <div className="flex flex-col px-4 md:text-xl md:mt-4">
          <div className="flex justify-between mt-8 items-center">
            <div className="flex gap-4 items-center">
                <SVGIcon iconName={`apparel`} 
                    height={`30px`}
                    fill={`gray`}
                />
                <p>Shirts</p>
            </div>

            <p>$999</p>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <div className="flex gap-4 items-center">
                <SVGIcon iconName={`apparel`} 
                    height={`30px`}
                    fill={`gray`}
                />
                <p>Shorts</p>
            </div>

            <p>$999</p>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <div className="flex gap-4 items-center">
                <SVGIcon iconName={`apparel`} 
                    height={`30px`}
                    fill={`gray`}
                />
                <p>Sweater</p>
            </div>

            <p>$999</p>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <div className="flex gap-4 items-center">
                <SVGIcon iconName={`apparel`} 
                    height={`30px`}
                    fill={`gray`}
                />
                <p>Trousers</p>
            </div>

            <p>$999</p>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <div className="flex gap-4 items-center">
                <SVGIcon iconName={`apparel`} 
                    height={`30px`}
                    fill={`gray`}
                />
                <p>Casuals</p>
            </div>

            <p>$999</p>
          </div>
          </div>
         
        </div>
      </div>

      <button className="bg-primary mx-auto text-center flex items-center justify-center mt-12 p-4 rounded-xl text-white text-semibold md:mt-20">
        Schedule A Dry Cleaning Pick-Up
      </button>

    </section>
  );
};

export default DryClean;
