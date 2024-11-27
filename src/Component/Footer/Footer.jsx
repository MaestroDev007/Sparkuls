import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E20] text-white pl-16 mt-10">
      <figure>
        <img />
      </figure>

      <p className="pl-4 opacity-80 mt-8 text-sm leading-[1.25rem] text-left">
        Sparkuls offers you Modern, efficient laundry solutions in a vibrant
        space, blending convenience with customer perks for a superior washing
        and drying experience.
      </p>

      <div className="flex flex-col  text-left text-sm  mt-8 px-4">
        <h5>Opening Hours:</h5>

        <ol className="mt-2">
          <li>Mon — Sat: 8am - 9:30pm</li>
          <li>Sunday: 9am - 9:30pm</li>
        </ol>
      </div>

      <div className="flex flex-col  text-left text-sm  mt-8 px-4">
        <h5>Address:</h5>

        <p className="mt-2">
          Washyard laundromat, 47 Allen Avenue (Studio 24 Building), Ikeja,
          Lagos, Nigeria.
        </p>
      </div>
      <div className="flex flex-col  text-left text-sm  mt-8 px-4">
        <h5>Email & Phone</h5>

       <p className="mt-2">+23408099243333</p>

       <p className="mt-2">hello@washyard.com</p>
      </div>

      <hr className="mt-8"></hr>

      <p className={` text-xs text-nowrap text-center mt-8`}>All Rights Reserved&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
