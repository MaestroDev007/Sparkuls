import React from "react";
import img from "../../Images/wash-and-fold.sha256-8b3977f7df57ea560270bb2f5196358fbfb3cb2ab95bea6e58e475776ce94f59.webp";
import SVGIcon from "../../Config/SVGIcon";
import img2 from "../../Images/rb_42805.png";
const WashFold = () => {
  return (
    <section className="relative bg-opacity-20 ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${img2})`,
          opacity: 0.1, // Adjust the opacity as needed
          zIndex: -1, // Make sure it stays behind the content
        }}></div>
      <div className="px-10 pt-8 mt-10 lg:flex lg:mx-auto lg:px-16 lg:mt-20 xl:px-[7%]">
        <div className="lg:w-[40%] lg:flex lg:flex-col lg:pt-28">
          <h2 className="sticky text-3xl  text-center font-semibold sm:text-4xl md:text-5xl lg:text-5xl lg:text-left xl:text-6xl">
            Wash & Fold
          </h2>

          <p className="hidden lg:block lg:pt-8 xl:pr-10">
            The most effortless way to handle your everyday laundry needs.
          </p>

          <div className="hidden lg:flex lg:items-center lg:gap-8 lg:mt-8">
            <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col  px-2 py-1 rounded-xl">
              <SVGIcon
                iconName={`dryClean`}
                // height={`30px`}
                className="fill-black h-[20px]"
              />
              <p className="text-xs">Cleaning</p>
            </div>
            <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col px-2 py-1 rounded-xl">
              <SVGIcon
                iconName={`iron`}
                // height={`30px`}
                className="fill-black h-[20px]"
              />
              <p className="text-xs ">Iron & Fold</p>
            </div>
            <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col px-2 py-1 rounded-xl">
              <SVGIcon
                iconName={`Schedule`}
                // height={`30px`}
                className="fill-black h-[20px]"
              />
              <p className="text-xs">Pick Up</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[60%]">
          <figure className="mt-8 rounded-xl  px-4 sm:px-8 sm:mt-10 md:flex md:items-center md:justify-center md:mt-16">
            <img
              src={img}
              className=" object-cover border rounded-xl "
            />
          </figure>

          <p className="mt-8 pl-4 sm:px-[10%] md:text-xl md:px-[15%] lg:hidden ">
            The most effortless way to handle your everyday laundry needs.
          </p>
          <div className="flex items-center justify-center mt-8 gap-4 mx-4 text-xs sm:text-sm md:text-base md:mt-20 lg:hidden">
            <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col gap-1 px-4 py-2 rounded-xl">
              <SVGIcon
                iconName={`dryClean`}
                // height={`30px`}
                className="fill-black h-[30px]"
              />
              <p className="text-xs text-nowrap">Cleaning</p>
            </div>
            <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col gap-1 px-4 py-2 rounded-xl ">
              <SVGIcon
                iconName={`iron`}
                // height={`30px`}
                className="fill-black h-[30px]"
              />
              <p className="text- text-nowrap  ">Iron & Fold</p>
            </div>
            <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col gap-1 px-4 py-2 rounded-xl">
              <SVGIcon
                iconName={`Schedule`}
                // height={`30px`}
                className="fill-black h-[30px]"
              />
              <p className="text-xs text-nowrap">Pick Up</p>
            </div>
          </div>

          <div className="px-4 mt-8 sm:px-12 md:px-24 md:mt-20 lg:hidden">
            <div className="shadow-xl rounded-xl p-4 border backdrop-blur-sm bg-white/10">
              <h3 className="font-semibold text-2xl md:text-3xl ">
                Pay-As-You-Go
              </h3>
              <p className="mt-4 text-base">
                Our Dry Clean Service priced per cloth. <br></br>Next-Day Rush
                Available<br></br>Standard 3-4 day turnaround
              </p>
            </div>

            <div className="shadow-md rounded-xl p-4 border-2 border-secondary mt-8 md:mt-16 ">
              <h3 className="font-semibold text-xl md:text-3xl ">
                Schedule A Pick-Up
              </h3>

              <p className="mt-4 opacity-85 lg:text-xl ">
                You can schedule a pickup any day of the week. Your Valet will
                arrive with your free, personalized Rinse bags between 8am and
                8pm to pick up your clothes.
              </p>
            </div>
          </div>

          <button className="bg-white  mx-auto text-center flex items-center justify-center mt-12 p-4 rounded-xl text-black text-semibold md:mt-20 lg:hidden">
            Schedule A Wash & Fold Pick-Up
          </button>
        </div>
      </div>

      <div className=" hidden lg:flex lg:gap-8 lg:items-center lg:mx-auto lg:justify-center lg:mt-20 xl:mt-32 xl:px-[5%]">
        <div className="shadow-xl rounded-xl p-6 border-2 h-[200px] w-2/5 xl:w-[30%] xl:h-[250px] transform transition-transform duration-500  hover:scale-105 bg-white/5 backdrop-blur-md hover:bg-white/10">
          <h3 className="font-semibold text-3xl ">Pay-As-You-Go</h3>
          <p className="mt-4 text-base">
            Our Dry Clean Service priced per cloth.
          </p>
          <p>Next-Day Rush Available.</p>
          <p>Standard 3-4 day turnaround.</p>
        </div>

        <div className="xl:shadow-xl xl:rounded-xl xl:p-6 xl:border-2 xl:border-white h-[200px]  w-2/5 xl:w-[30%] xl:h-[250px] transform transition-transform duration-500  hover:scale-105 hidden xl:bg-white/5 xl:backdrop-blur-md xl:block xl:hover:bg-white/10">
          <h3 className="font-semibold text-3xl  ">Iron & Fold</h3>

          <p className="mt-4 opacity-85 text-base ">
            Press your clean clothes after your wash into a well folded piece of
            clothe.
          </p>
        </div>
        <div className="shadow-xl rounded-xl p-6 border-2 h-[200px]  w-2/5 xl:w-[30%] xl:h-[250px] transform transition-transform duration-500  hover:scale-105 bg-white/5 backdrop-blur-md hover:bg-white/10">
          <h3 className="font-semibold text-3xl  ">Schedule A Pick-Up</h3>

          <p className="mt-4 opacity-85 text-base ">
            You can schedule a pickup any day of the week. Your Valet will
            arrive with your free, personalized Rinse bags between 8am and 8pm
            to pick up your clothes.
          </p>
        </div>
      </div>

      <button className="hidden lg:bg-white lg:mx-auto lg:text-center lg:py-2 lg:px-4 lg:rounded-xl lg:text-black lg:text-semibold lg:text-xl lg:mt-20 lg:block lg:hover:text-secondary  ">
        Schedule A Wash & Fold Pick-Up
      </button>

      <hr className="mt-8 text-black lg:mt-20"></hr>
    </section>
  );
};

export default WashFold;
