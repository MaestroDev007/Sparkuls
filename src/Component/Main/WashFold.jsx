import React from "react";
import img from "../../Images/wash-and-fold.sha256-8b3977f7df57ea560270bb2f5196358fbfb3cb2ab95bea6e58e475776ce94f59.webp";
import SVGIcon from "../../Config/SVGIcon";
const WashFold = () => {
  return (
    <section className="pl-16 mt-10 lg:mt-20">
      <h2 className="sticky text-3xl  text-center font-semibold sm:text-4xl md:text-5xl lg:text-6xl ">
        Wash & Fold
      </h2>
      <figure className="mt-8 rounded-xl  px-4 sm:px-8 sm:mt-10 md:flex md:items-center md:justify-center md:mt-16 lg:px-0">
        <img
          src={img}
          className=" object-cover border rounded-xl "
        />
      </figure>

      <p className="mt-8 pl-4 sm:px-[10%] md:text-xl md:px-[15%] lg:text-2xl lg:mt-20 lg:text-center">
        The most effortless way to handle your everyday laundry needs.
      </p>

      <div className="flex items-center justify-evenly mt-8 gap-4 mx-4 text-xs sm:text-sm md:text-base md:mt-20 lg:text-2xl">
        <div className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl lg:gap-4 ">
          <SVGIcon
            iconName={`dryClean`}
            // height={`30px`}
            className="fill-secondary h-[30px] lg:h-[50px]"
          />
          <p>Cleaning</p>
        </div>
        <div className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl  lg:gap-4">
          <SVGIcon
            iconName={`iron`}
            // height={`30px`}
            className="fill-secondary h-[30px] lg:h-[50px]"
          />
          <p>Iron & Fold</p>
        </div>
        <div className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl lg:gap-4">
          <SVGIcon
            iconName={`Schedule`}
            // height={`30px`}
            className="fill-secondary h-[30px] lg:h-[50px]"
          />
          <p>Pick Up</p>
        </div>
      </div>

      <div className="px-4 mt-8 sm:px-12 md:px-24 md:mt-20   lg:flex lg:justify-evenly lg:gap-8 lg:items-center lg:flex-row-reverse lg:mt-32">
        <div className="shadow-xl rounded-xl p-4 border lg:text-center lg:w-1/2 lg:h-[350px]">
          <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl lg:text-nowrap">
            Pay-As-You-Go
          </h3>
          <p className="mt-4 text-base lg:hidden">
            Our Dry Clean Service priced per cloth. <br></br>Next-Day Rush
            Available<br></br>Standard 3-4 day turnaround
          </p>

          <div className="hidden  lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:mt-12 lg:text-xl lg:gap-4">
            <p> Our Dry Clean Service priced per cloth.</p>
            <p>Next-Day Rush Available</p>
            <p>Standard 3-4 day turnaround</p>
          </div>
        </div>

        <div className="shadow-md rounded-xl p-4 border-2 border-secondary mt-8 md:mt-16 lg:text-center lg:w-1/2 lg:h-[350px] lg:mt-0">
          <h3 className="font-semibold text-xl md:text-3xl lg:text-4xl ">
            Schedule A Pick-Up
          </h3>

          <p className="mt-4 opacity-85 lg:text-xl lg:mt-12">
            You can schedule a pickup any day of the week. Your Valet will
            arrive with your free, personalized Rinse bags between 8am and 8pm
            to pick up your clothes.
          </p>
        </div>
      </div>

      <button className="bg-primary mx-auto text-center flex items-center justify-center mt-12 p-4 rounded-xl text-white text-semibold md:mt-20 lg:text-2xl lg:mt-32">
        Schedule A Wash & Fold Pick-Up
      </button>

      <hr className="mt-8 text-black lg:mt-20"></hr>
    </section>
  );
};

export default WashFold;
