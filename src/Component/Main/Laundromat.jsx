import React from "react";
import img from "../../Images/pexels-gratisography-4414.jpg";
import img2 from "../../Images/pexels-tima-miroshnichenko-8774568.jpg";
import SVGIcon from "../../Config/SVGIcon";
// lg:bg-[#1B75BC]
const Laundromat = () => {
  return (
    <section className="relative pb-12"> 
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat "
    style={{
      backgroundImage: `url(${img2})`,
      opacity: 0.4, // Adjust the opacity as needed
      zIndex: -1, // Make sure it stays behind the content
    }}
  ></div>
    <div
      className={`px-10 pt-8 mt-10 md:mt-24 lg:flex lg:mx-auto lg:px-16 lg:mt-20 xl:px-[7%] lg:flex-col lg:text-white`}>
      <div className="flex items-center px-8 lg:px-40 lg:flex lg:items-center lg:justify-center lg:-translate-y-8 xl:-translate-y-16">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 text-white ">Laundromat</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <h2 className="sticky text-4xl leading-[45px] pt-8 text-center font-semibold sm:text-4xl md:text-5xl md:px-[15%] md:leading-[60px] lg:pt-12">
        {" "}
        Do Your Laundry Yourself ?{" "}
      </h2>

      <p className="hidden lg:block lg:text-center lg:mt-8 lg:px-40 ">
        Sparkuls Laundromat provides top-tier commercial laundry equipment
        within a calm and engaging environment, turning laundry into an
        enjoyable activity.{" "}
      </p>

      <div className="hidden lg:flex lg:items-center lg:mt-32 lg:mx-auto lg:gap-8 lg:flex-1">
          <div className="p-4 h-[300px] border shadow-md rounded-xl flex flex-col gap-4 bg-white text-black w-[30%] text-center xl:h-[250px] transform transition-transform duration-500 hover:-rotate-1 hover:scale-105">
            <div className="flex justify-center items-center">
              <SVGIcon
                iconName={`Laundromat`}
                height={`40px`}
                className="fill-black"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <h4 className="text-center text-xl font-semibold">
                Self Wash & Dry
              </h4>
              <p className="px-4">
                Love to Do-it-Yourself? We too! Sparkuls has high-efficiency and
                high-capacity washers and dryers.
              </p>
            </div>
          </div>
          <div className="p-4 h-[300px] border shadow-md rounded-xl flex flex-col gap-4 bg-white text-black w-[30%] text-center xl:h-[250px] transform transition-transform duration-500 hover:-rotate-1 hover:scale-105">
            <div className="flex justify-center items-center">
              <SVGIcon
                iconName={`time`}
                height={`40px`}
                className="fill-black"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <h4 className="text-center text-xl font-semibold">
             Time Efficient
              </h4>
              <p className="px-4">
               Saving you hours of laundry
                time and allowing you have fun while at it.
              </p>
            </div>
          </div>
          <div className="p-4 h-[300px] border shadow-md rounded-xl flex flex-col gap-4 bg-white text-black w-[30%] text-center xl:h-[250px] transform transition-transform duration-500 hover:-rotate-1 hover:scale-105">
            <div className="flex justify-center items-center">
              <SVGIcon
                iconName={`chill`}
                height={`40px`}
                className="fill-black"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <h4 className="text-center text-xl font-semibold">
               Chill
              </h4>
              <p className="px-4">
                Relax knowing that Your Landy lorem ipsum ilo the factv kwu you are the goat your boy is fat and good and not together on the farm just me to you 
              </p>
            </div>
          </div>
      </div>

      <figure className="mt-8 rounded-xl sm:px-8 sm:mt-10 px-4 md:flex md:items-center md:justify-center md:mt-16 md:px-28 lg:hidden">
        <img
          src={img}
          className="object-cover rounded-xl"
        />
      </figure>

      <p className="pl-4 mt-8  sm:px-[10%] md:px-[15%] md:text-xl lg:hidden">
        Washyard Laundromat provides top-tier commercial laundry equipment
        within a calm and engaging environment, turning laundry into an
        enjoyable activity.{" "}
      </p>

      <div className="text-xs flex flex-col gap-12 mx-4 items-center mt-16  rounded-xl shadow-xl border-2 backdrop-blur-sm bg-white/5 px-2 py-8 sm:text-sm sm:mx-12 md:text-base md:mx-24 lg:hidden">
        <div className="flex flex-col justify-center items-center ">
          <SVGIcon
            iconName={`Laundromat`}
            height={`40px`}
            className="fill-black
          "/>
          <h4 className="text-sm sm:text-base mt-2 md:text-xl">
            Self Wash & Dry
          </h4>

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
            className="fill-black"
          />
          <h4 className="text-sm sm:text-base mt-2 md:text-xl">Chill</h4>

          <p className="mt-4 px-4 text-center ">
            We also reward customers for every Naira spent on washing and
            drying.
          </p>
        </div>
      </div>

      <button className="hidden lg:text-black lg:bg-white lg:rounded-full lg:px-8 lg:py-4 lg:mx-auto lg:flex lg:items-center lg:justify-center lg:text-xl lg:border-2 lg:border-white lg:mt-20 lg:font-semibold lg:capitalize lg:hover:text-white lg:hover:bg-black lg:hover:border-black transition-all duration-300 lg:mb-20">
        Book Now
      </button>
    </div>
    </section>
  );
};

export default Laundromat;
