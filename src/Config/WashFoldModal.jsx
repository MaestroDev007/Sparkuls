import React, { useRef } from "react";
import logo from ".././Images/SPARKULS-removebg-preview.png";
import { useForm } from "react-hook-form";

const WashFoldModal = ({ setShowWashFoldModal, showWashFold }) => {
  const phoneRegex = /^(?:\+234|0)(7[0-9]|8[0-9]|9[0-9])[0-9]{7}$/;

  const handleClose = () => {
    setShowWashFoldModal((prev) => !prev);
  };
  const WashFoldmodalRef = useRef();

  const closeModalRef = (e) => {
    WashFoldmodalRef.current === e.target ? setShowWashFoldModal(false) : null;
  };

  const { register } = useForm();

  return (
    <section
      ref={WashFoldmodalRef}
      onClick={closeModalRef}
      className={`${
        showWashFold ? "hidden" : "flex"
      } fixed inset-0 flex-col items-center justify-center backdrop-blur-sm bg-white/10 text-center z-50 mx-auto`}>
      <div className="bg-black text-black p-2 rounded-lg shadow-md w-[250px] md:w-[350px] md:h-[600px] relative">
        <figure>
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] mx-auto"
          />
        </figure>
        <p className="text-white text-xs mt-4">Kindly Fill Out The Fields</p>
        <fieldset className="text-white mt-4 md:mt-10">
          <form className="flex flex-col items-center gap-4 text-sm w-full md:text-base md:items-start md:gap-10 md:px-4">
            {/* Service Selection */}
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <label
                htmlFor="Service"
                className="block">
                Service:
              </label>
              <select
                name="service"
                required
                className="text-black p-2 rounded text-xs">
                <option>Dry Clean (3-4 days)</option>
                <option>Express Pay As You Go (24hrs)</option>
              </select>
            </div>

            {/* Full Name */}
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <label
                htmlFor="Name"
                className="block">
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("userName", {
                  required: {
                    value: "true",
                    message: "Please Enter Full Name",
                  },
                })}
                className="placeholder:text-xs text-black rounded-md outline-none p-1 border-2 focus:border-teal-500 "
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <label
                htmlFor="Address"
                className="block">
                Address:
              </label>
              <input
                type="text"
                id="address"
                {...register("address", {
                  required: {
                    value: "true",
                    message: "Please Fill In An Address",
                  },
                })}
                className="placeholder:text-xs text-black rounded-md outline-none p-1 border-2 focus:border-teal-500 "
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <label
                htmlFor="Phone"
                className="block">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                {...register("address", {
                  required: "Please Fill In An Address", // This should be a string for the error message
                  validate: (value) =>
                    phoneRegex.test(value) || "Invalid phone number",
                })}
                placeholder="080123456789"
                className="placeholder:text-xs text-black rounded-md outline-none p-1 border-2 focus:border-teal-500 "
              />
            </div>

            {/* Carriage Size */}
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <label
                htmlFor="Carriage"
                className="block">
                Carriage Size:
              </label>
              <select
                name="carriageSize"
                {...register("service", { required: "This field is required" })}
                className="text-black p-2 rounded text-xs">
                <option>Bike Size Carriage</option>
                <option>Vehicle Size Carriage</option>
              </select>
            </div>

            {/* Terms of Service */}
            <div className="mt-10 text-xs flex gap-2">
              <input
                type="checkbox"
                name="terms"
                required
              />
              <label
                htmlFor="Terms"
                className="block text-white">
                Terms Of Service
              </label>
            </div>
          </form>
        </fieldset>
      </div>
    </section>
  );
};

export default WashFoldModal;
