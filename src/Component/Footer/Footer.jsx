import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001442] text-white px-10 mt-10">
      <figure>
        <img />
      </figure>

      <p className="pl-4 opacity-80 mt-8 text-xs leading-[1.25rem] text-left lg:pr-40">
        Sparkuls offers you Modern, efficient laundry solutions in a vibrant
        space, blending convenience with customer perks for a superior washing
        and drying experience.
      </p>

      <div className=" mt-8 px-4">
        <h4 className="font-semibold underline lg:text-center lg:w-full lg:flex lg:items-center lg:justify-center">
          Useful Info
        </h4>

        <div className="lg:grid lg:grid-cols-3 lg:mt-8 gap-4"> 
        <div className="flex flex-col  text-left text-sm mt-4">
          <h5 className="text-xs">Opening Hours:</h5>

          <ol className="mt-2 text-sm">
            <li>Mon — Sat: 8am - 9:30pm</li>
            <li>Sunday: 9am - 9:30pm</li>
          </ol>
        </div>

        <div className="flex flex-col  text-left text-sm  mt-8 lg:mt-4 ">
          <h5 className="text-xs">Address:</h5>

          <p className="mt-2 text-sm">
            Washyard laundromat, 47 Allen Avenue (Studio 24 Building), Ikeja,
            Lagos, Nigeria.
          </p>
        </div>
        <div className="flex flex-col  text-left text-sm  mt-8 lg:mt-4">
          <h5 className="text-xs ">Email & Phone</h5>

          <p className="mt-2 text-smm">+23408099243333</p>

          <p className="mt-2 text-sm">hello@washyard.com</p>
        </div>
        </div>
      
      </div>

      <hr className="mt-8"></hr>

      <p className={` text-xs text-nowrap text-center mt-2`}>
        All Rights Reserved&copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
