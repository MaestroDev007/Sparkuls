import { React, useState, useEffect } from "react";
import SVGIcon from "../../Config/SVGIcon";
import logo from "../../Images/SPARKULS-removebg-preview.png"
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Nav } from "../../Constants/index.js";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup in case the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // const sideBarAnimation = {
  //   open: {
  //     width: "14rem",
  //     transition: {
  //       damping: 40,
  //     },
  //   },

  //   closed: {
  //     width: "0rem",
  //     transition: {
  //       damping: 40,
  //     },
  //   },
  // };

  return (
    <header className="absolute h-screen top-0 left-0 w-full z-50 lg:hidden">
      <div className="flex items-center justify-between mx-4">
        <figure>
          <img  src={logo} 
          className="w-[100px] md:w-[150px]" />
        </figure>

        <div className="mt-4">
          <button
            className={`cursor-pointer  items-center flex justify-center  ${
              isOpen ? "p-1" : "p-[.1rem]"
            }`}
            onClick={handleOpen}>
            {isOpen ? (
              <SVGIcon
                iconName={`menuOpen`}
                height={`40px`}
                fill={`${`white`}`}
                className=" "
              />
            ) : (
              <SVGIcon
                iconName={`menu`}
                height={`40px`}
                fill={`${`white`}`}
                className=" "
              />
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <div
          // variants={sideBarAnimation}
          // animate={isOpen ? "open" : "closed"}
          className={`shadow-xl w-[300px] h-screen fixed top-0 right-0 z-50 bg-black text-white transition-transform p-2 duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          {" "}
          <div className="flex items-center justify-between text-2xl p-1">
            {/* <figure>
        <img alt="" src={logo} className="size-[px]"/>
      </figure> */}
            <button onClick={handleClose}>
              <SVGIcon
                iconName={`menuOpen`}
                height={`40px`}
                fill={`${`white`}`}
                className=" "
              />
            </button>

            <p
              className={`absolute bottom-1 text-xs ${
                isOpen ? "flex" : "hidden"
              } transition-all duration-300 text-nowrap`}>
              All Rights Reserved&copy; {new Date().getFullYear()}
            </p>
          </div>
          <hr className=""></hr>
          <nav className="flex flex-col h-full mt-10">
            <ul className="overflow-x-hidden text-[.9rem] py-5 flex flex-col gap-20 whitespace-pre ">
              {Nav.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={`/`}
                    className={`flex items-center  text-xl gap-4 rounded-md duration-300  text-white  px-1 md:cursor-pointer  w-full `}>
                    <SVGIcon
                      iconName={item.iconName}
                      height={`40px`}
                      fill={`${`#E78812`}`}
                      className="min-w-max"
                    />
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
