import React from "react";
import img from "../../Images/dry-cleaning.sha256-e2b77df2fa9697fe4a4a0d9462be36e32c570a3794b876e64faeaa987ddde998.webp";
import SVGIcon from "../../Config/SVGIcon";
import img2 from "../../Images/rb_41350.png"

const DryClean = () => {
  return (
    <section className="relative bg-opacity-20 ">

<div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat "
    style={{
      backgroundImage: `url(${img2})`,
      opacity: 0.1, // Adjust the opacity as needed
      zIndex: -1, // Make sure it stays behind the content
    }}
  ></div>
      <div className="px-10 mt-10 lg:mt-20  lg:mx-auto lg:px-16 xl:px-[7%]">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[40%] lg:flex lg:flex-col lg:pt-28">
            <h2 className="sticky text-3xl  text-center font-semibold sm:text-4xl md:text-5xl lg:text-5xl lg:text-left xl:text-6xl ">
              {" "}
              Dry Cleaning
            </h2>
            <p className="hidden lg:block lg:pt-8 xl:pr-10">
              Convenient pickup and delivery to save you time. High-quality
              cleaning to keep you looking your best.
            </p>

            <div className="hidden lg:flex lg:items-center lg:gap-8 lg:mt-8">
              <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col px-2 py-1 rounded-xl ">
                <SVGIcon
                  iconName={`tracking`}
                  // height={`30px`}
                  className="fill-black h-[20px]"
                />
                <p className="text-xs">Tracking</p>
              </div>
              <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col px-2 py-1 rounded-xl">
                <SVGIcon
                  iconName={`laundry`}
                  // height={`30px`}
                  className="fill-black h-[20px]"
                />
                <p className="text-xs">Dry Clean</p>
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
            <figure className="mt-8 rounded-xl px-4 sm:px-8 sm:mt-10 md:flex md:items-center md:justify-center md:mt-16">
              <img
                src={img}
                className=" object-cover rounded-xl"
              />
            </figure>
          </div>
        </div>

        <p className="pl-2 opacity-80 mt-8   sm:px-[10%] md:px-[15%] md:text-xl lg:hidden ">
          Convenient pickup and delivery to save you time. High-quality cleaning
          to keep you looking your best.
        </p>

        <div className="flex items-center justify-center mt-8 gap-4 mx-4 text-xs sm:text-sm md:text-base md:mt-20 lg:hidden">
          <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col gap-1 px-4 py-2 rounded-xl text-nowrap">
            <SVGIcon
              iconName={`tracking`}
              // height={`30px`}
              className="fill-black h-[24px]"
            />
            <p>Tracking</p>
          </div>
          <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col gap-1 px-4 py-2 rounded-xl text-nowrap">
            <SVGIcon
              iconName={`laundry`}
              // height={`30px`}
              className="fill-black h-[24px]"
            />
            <p>Dry Clean</p>
          </div>
          <div className="border-2 font-semibold bg-white/90 text-black items-center flex flex-col gap-1 px-4 py-2 rounded-xl text-nowrap">
            <SVGIcon
              iconName={`Schedule`}
              // height={`30px`}
              className="fill-black h-[24px]"
            />
            <p>Pick Up</p>
          </div>
        </div>

        <div className="px-4  mt-12 sm:mx-12 md:px-12 md:mt-20 lg:flex lg:gap-16 lg:items-center lg:mx-auto lg:justify-center lg:mt-24 xl:mt-32 xl:px-[5%]">
          <div className="shadow-md rounded-xl p-4 backdrop-blur-sm bg-white/10 border-2 lg:p-6 lg:border-2 lg:h-[250px] lg:w-2/5 xl:w-[30%] xl:h-[250px] lg:transform lg:transition-transform lg:duration-500  lg:hover:scale-105 lg:bg-white/5 lg:backdrop-blur-md lg:hover:bg-white/10">
            <h3 className="font-semibold capitalize  text-xl md:text-3xl">
              Your clothes tracked
            </h3>

            <p className="mt-4 opacity-85">
              You can schedule a pickup any day of the week. We’ll email you a
              photo and itemized inventory of everything being cleaned
            </p>
          </div>
          <div className="hidden lg:block lg:shadow-md lg:rounded-xl lg:p-6 lg:border-2 lg:h-[240px] lg:w-2/5 xl:w-[30%] xl:h-[250px] transform transition-transform lg:duration-500  lg:hover:scale-105 lg:bg-white/5 lg:backdrop-blur-md lg:hover:bg-white/10">
            <h3 className="font-semibold text-xl md:text-3xl">
              Expert Cleaning
            </h3>

            <p className="mt-4 opacity-85">
              We carefully follow the care label and inspect your clothes for
              stains to ensure they receive the optimal treatment.
            </p>
          </div>

          <div className="mt-8 p-2 opacity-80 rounded-xl shadow-xl border-2 md:mt-16 backdrop-blur-sm bg-white/10 lg:hidden">
            <p className=" mt-2 text-center md:text-2xl ">
              Standard 3-4 day turnaround for all orders
            </p>

            <div className="flex flex-col px-4 md:text-xl md:mt-4">
              <div className="flex justify-between mt-8 items-center">
                <div className="flex gap-4 items-center">
                  <SVGIcon
                    iconName={`apparel`}
                    height={`30px`}
                    fill={`#1D6076`}
                  />
                  <p>Shirts</p>
                </div>

                <p>$999</p>
              </div>
              <div className="flex justify-between mt-8 items-center">
                <div className="flex gap-4 items-center">
                  <SVGIcon
                    iconName={`apparel`}
                    height={`30px`}
                    fill={`#1D6076`}
                  />
                  <p>Shorts</p>
                </div>

                <p>$999</p>
              </div>
              <div className="flex justify-between mt-8 items-center">
                <div className="flex gap-4 items-center">
                  <SVGIcon
                    iconName={`apparel`}
                    height={`30px`}
                    fill={`#1D6076`}
                  />
                  <p>Sweater</p>
                </div>

                <p>$999</p>
              </div>
              <div className="flex justify-between mt-8 items-center">
                <div className="flex gap-4 items-center">
                  <SVGIcon
                    iconName={`apparel`}
                    height={`30px`}
                    fill={`#1D6076`}
                  />
                  <p>Trousers</p>
                </div>

                <p>$999</p>
              </div>
              <div className="flex justify-between mt-8 items-center">
                <div className="flex gap-4 items-center">
                  <SVGIcon
                    iconName={`apparel`}
                    height={`30px`}
                    fill={`#1D6076`}
                  />
                  <p>Casuals</p>
                </div>

                <p>$999</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg: ">
          <p className=" mt-2 text-center md:text-2xl ">
            Standard 3-4 day turnaround for all orders
          </p>

          <div className="flex flex-col px-4 md:text-xl md:mt-4">
            <div className="flex justify-between mt-8 items-center">
              <div className="flex gap-4 items-center">
                <SVGIcon
                  iconName={`apparel`}
                  height={`30px`}
                  fill={`gray`}
                />
                <p>Shirts</p>
              </div>

              <p>$999</p>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex gap-4 items-center">
                <SVGIcon
                  iconName={`apparel`}
                  height={`30px`}
                  fill={`gray`}
                />
                <p>Shorts</p>
              </div>

              <p>$999</p>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex gap-4 items-center">
                <SVGIcon
                  iconName={`apparel`}
                  height={`30px`}
                  fill={`gray`}
                />
                <p>Sweater</p>
              </div>

              <p>$999</p>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex gap-4 items-center">
                <SVGIcon
                  iconName={`apparel`}
                  height={`30px`}
                  fill={`gray`}
                />
                <p>Trousers</p>
              </div>

              <p>$999</p>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex gap-4 items-center">
                <SVGIcon
                  iconName={`apparel`}
                  height={`30px`}
                  fill={`gray`}
                />
                <p>Casuals</p>
              </div>

              <p>$999</p>
            </div>
          </div>
        </div>

        <button className="bg-white  mx-auto text-center flex items-center justify-center mt-12 p-4 rounded-xl text-black text-semibold md:mt-20 lg:text-xl lg:bg-white lg:mx-auto lg:text-center lg:py-2 lg:px-4 lg:rounded-xl lg:text-black lg:text-semibold  lg:mt-20 lg:block lg:hover:text-secondary ">
          Schedule A Dry Cleaning Pick-Up
        </button>
      </div>
    </section>
  );
};

export default DryClean;
