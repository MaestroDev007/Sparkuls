import React, { useRef } from "react";
import logo from ".././Images/SPARKULS-removebg-preview.png";
import { useForm } from "react-hook-form";

const WashFoldModal = ({ setShowWashFoldModal, showWashFold }) => {
  const phoneRegex = /^(\+)?(234|0)[0-9]*?.*/;

  const handleClose = () => {
    setShowWashFoldModal((prev) => !prev);
  };
  const WashFoldModalRef = useRef();

  const closeModalRef = (e) => {
    WashFoldModalRef.current === e.target ? setShowWashFoldModal(false) : null;
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: "UserName",
    },
  });

  const onSubmit = (data) => {
    const Message = `Hello, My name is ${data.userName} from ${data.address}, requesting for a ${data.service}. \nHere is a description of my Laundry:`;

    const phoneNumber = "+2348080468229";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      Message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      ref={WashFoldModalRef}
      onClick={closeModalRef}
      className={`${
        showWashFold ? "hidden" : "flex"
      } fixed inset-0 flex-col items-center justify-center backdrop-blur-sm bg-white/10 text-center z-50 mx-auto`}>
      <div className="bg-black text-black p-2 rounded-lg shadow-md w-[250px] md:w-[350px] md:h-[650px] relative">
        <figure>
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] mx-auto"
          />
        </figure>
        <p className="text-white text-xs mt-4">Kindly Fill Out The Fields</p>
        <fieldset className="text-white mt-4 md:mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-4 text-sm w-full md:text-base md:items-start md:gap-10 md:px-4">
            {/* Service Selection */}
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <label
                htmlFor="Service"
                className="block"
                {...register("service", {
                  required: "Please select a service",
                })}>
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
                id="userName"
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
                {...register("phone", {
                  required: "Please enter your phone number",
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
            <div className="mt-4 text-xs flex gap-2">
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
            <button
              type="submit"
              onSubmit={handleSubmit(onSubmit)}
              className="text-black bg-white py-2 px-8 font-semibold rounded-xl mx-auto flex items-center hover:">
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    </section>
  );
};

export default WashFoldModal;
