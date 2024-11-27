import React from "react";
import img from "../../Images/pexels-gratisography-4414.jpg";
import img2 from "../../Images/pexels-tima-miroshnichenko-8774568.jpg";
import SVGIcon from "../../Config/SVGIcon";
const Laundromat = () => {
  return (
    <section className="pl-16 mt-10 md:mt-24">
      <div className="flex items-center px-8">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 text-gray-600">Laundromat</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <h2 className="sticky text-4xl leading-[45px] pt-8 text-center font-semibold sm:text-4xl md:text-5xl md:px-[15%] md:leading-[60px] ">
        {" "}
        Do Your Laundry Yourself ?{" "}
      </h2>

      <figure className="mt-8 rounded-xl sm:px-8 sm:mt-10 px-4 md:flex md:items-center md:justify-center md:mt-16 md:px-28">
        <img
          src={img}
          className="object-cover rounded-xl"
        />
      </figure>

      <p className="pl-4 opacity-80 mt-8  sm:px-[10%] md:px-[15%] md:text-xl">
        Washyard Laundromat provides top-tier commercial laundry equipment
        within a calm and engaging environment, turning laundry into an
        enjoyable activity.{" "}
      </p>

      <div className="text-xs flex flex-col gap-12 mx-4 items-center mt-16 opacity-80 rounded-xl shadow-xl border px-2 py-8 sm:text-sm sm:mx-12 md:text-base md:mx-24">
        <div className="flex flex-col justify-center items-center">
          <SVGIcon
            iconName={`Laundromat`}
            height={`40px`}
            className="fill-secondary"
          />
          <h4 className="text-sm sm:text-base mt-2 md:text-xl">Self Wash & Dry</h4>

          <p className="mt-4 px-4 text-center">
            Love to Do-it-Yourself? We too! Sparkuls has high-efficiency and
            high-capacity washers and dryers. Saving you hours of laundry time
            and allowing you have fun while at it.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SVGIcon
            iconName={`chill`}
            height={`40px`}
            className="fill-secondary"
          />
          <h4 className="text-sm sm:text-base mt-2 md:text-xl">Chill</h4>

          <p className="mt-4 px-4 text-center ">
            We also reward customers for every Naira spent on washing and
            drying.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Laundromat;
