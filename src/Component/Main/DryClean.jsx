import React from "react";
import img from "../../Images/dry-cleaning.sha256-e2b77df2fa9697fe4a4a0d9462be36e32c570a3794b876e64faeaa987ddde998.webp";
import SVGIcon from "../../Config/SVGIcon";

const DryClean = () => {
  return (
    <section className="pl-16 mt-10">
      <h2 className="sticky text-3xl  text-center font-semibold">
        {" "}
        Dry Cleaning
      </h2>

      <figure className="mt-8 rounded-xl  ">
        <img
          src={img}
          className=" px-4 object-cover rounded-md"
        />
      </figure>

      <p className="pl-4 opacity-80 mt-8">
        Convenient pickup and delivery to save you time. High-quality cleaning
        to keep you looking your best.
      </p>

      <div className="flex items-center justify-evenly mt-8 gap-4 mx-4 text-xs">
        <button className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl ">
          <SVGIcon
            iconName={`tracking`}
            height={`30px`}
            className="fill-secondary"
          />
          <p>Tracking</p>
        </button>
        <button className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl ">
          <SVGIcon
            iconName={`dryClean`}
            height={`30px`}
            className="fill-secondary"
          />
          <p>Dry Clean</p>
        </button>
        <button className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl ">
          <SVGIcon
            iconName={`Schedule`}
            height={`30px`}
            className="fill-secondary"
          />
          <p>Pick Up</p>
        </button>
      </div>

      <div className="px-4">
        <div className="shadow-md rounded-xl p-4 border-2 border-secondary mt-8">
          <h4 className="font-semibold text-xl">Your clothes tracked</h4>

          <p className="mt-4 opacity-85">
            You can schedule a pickup any day of the week. We’ll email you a
            photo and itemized inventory of everything being cleaned
          </p>
        </div>

        <div className="mt-8 p-2 opacity-80 rounded-xl shadow-xl border ">
          <p className=" mt-2 text-center">
            Standard 3-4 day turnaround for all orders
          </p>

          <div className="flex flex-col px-4">
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

      <button className="bg-primary mx-auto text-center flex items-center justify-center mt-12 p-4 rounded-xl text-white text-semibold">
        Schedule A Dry Cleaning Pick-Up
      </button>

    </section>
  );
};

export default DryClean;
