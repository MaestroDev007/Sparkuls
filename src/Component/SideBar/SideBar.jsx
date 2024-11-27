import { React, useState } from "react";
import SVGIcon from "../../Config/SVGIcon";
import logo from "../../Images/preview.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Nav } from "../../Constants/index.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const sideBarAnimation = {
    open: {
      width: "14rem",
      transition: {
        damping: 40,
      },
    },

    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <motion.aside
      variants={sideBarAnimation}
      animate={isOpen ? "open" : "closed"}
      className={` shadow-xl w-7/12 h-screen ${
        isOpen ? "overflow-hidden" : "overflow-hidden"
      }   z-50 bg-white fixed md:w-2/12 p-2`}>
      <div className="flex items-center justify-between text-2xl p-1">
        {/* <figure>
        <img alt="" src={logo} className="size-[px]"/>
      </figure> */}
        <span>Sparkuls</span>
        <button
          className={`absolute right-3 bottom-8 cursor-pointer border-2 border-black rounded-full items-center flex justify-center ${
            isOpen ? "p-1" : "p-[.1rem]"
          }`}
          onClick={handleOpen}>
          {isOpen ? (
            <SVGIcon
              iconName={`leftArrow`}
              height={`30px`}
              fill={`black`}
              className=" "
            />
          ) : (
            <SVGIcon
              iconName={`rightArrow`}
              height={`40px`}
              fill={`black`}
              className=" "
            />
          )}
        </button>

        <p className={`absolute bottom-1 text-xs ${isOpen ? "flex" : "hidden"} transition-all duration-300 text-nowrap`}>All Rights Reserved&copy; {new Date().getFullYear()}</p>
      </div>


<hr className=""></hr>
      <nav className="flex flex-col h-full mt-10">
        <ul className="overflow-x-hidden text-[.9rem] py-5 flex flex-col gap-8 whitespace-pre ">
          {Nav.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/`}
                className={`flex items-center font-medium text-xl gap-4 rounded-md duration-300  text-slate-900  px-1 md:cursor-pointer  w-full `}>
                <SVGIcon
                  iconName={item.iconName}
                  height={`34px`}
                  fill={`slate`}
                  className="min-w-max"
                />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Header;
