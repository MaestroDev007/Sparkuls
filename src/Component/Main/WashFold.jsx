import React from "react";
import img from "../../Images/wash-and-fold.sha256-8b3977f7df57ea560270bb2f5196358fbfb3cb2ab95bea6e58e475776ce94f59.webp";
import SVGIcon from "../../Config/SVGIcon";
const WashFold = () => {
  return (
    <section className="pl-16 mt-10">
      <h2 className="sticky text-3xl  text-center font-semibold">
        Wash & Fold
      </h2>
      <figure className="mt-8 rounded-xl  ">
        <img
          src={img}
          className=" px-4 object-cover border rounded-md"
        />
      </figure>

      <p className="mt-8 pl-4 ">
        The most effortless way to handle your everyday laundry needs.
      </p>

      <div className="flex items-center justify-evenly mt-8 gap-4 mx-4 text-xs">
        <button className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl ">
          <SVGIcon
            iconName={`dryClean`}
            height={`30px`}
            className="fill-secondary"
          />
          <p>Cleaning</p>
        </button>
        <button className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl ">
          <SVGIcon
            iconName={`dryClean`}
            height={`30px`}
            className="fill-secondary"
          />
          <p>Iron & Fold</p>
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

      <div className="px-4 mt-8">
        <div className="shadow-xl rounded-xl p-4 border ">
          <h3 className="font-semibold text-2xl">Pay-As-You-Go</h3>
          <p className="mt-4 text-base">
            Our Dry Clean Service priced per cloth. <br></br>Next-Day Rush
            Available<br></br>Standard 3-4 day turnaround
          </p>
        </div>

        <div className="shadow-md rounded-xl p-4 border-2 border-secondary mt-8 ">
          <h4 className="font-semibold text-xl">Schedule A Pick-Up</h4>

          <p className="mt-4 opacity-85">
            You can schedule a pickup any day of the week. Your Valet will
            arrive with your free, personalized Rinse bags between 8am and 8pm
            to pick up your clothes.
          </p>
        </div>
      </div>

      <button className="bg-primary mx-auto text-center flex items-center justify-center mt-12 p-4 rounded-xl text-white text-semibold">
        Schedule A Wash & Fold Pick-Up
      </button>


      <hr className="mt-8 text-black"></hr>
    </section>
  );
};

export default WashFold;
