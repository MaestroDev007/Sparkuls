import React, { useRef } from "react";
import logo from ".././Images/SPARKULS-removebg-preview.png";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const WashFoldModal = ({ setShowWashFoldModal, showWashFold }) => {
  const phoneRegex = /^(\+)?(234|0)[0-9]*?.*/;

  const handleClose = () => {
    setShowWashFoldModal((prev) => !prev);
  };
  const WashFoldModalRef = useRef();

  const closeModalRef = (e) => {
    WashFoldModalRef.current === e.target ? setShowWashFoldModal(false) : null;
  };

  const { register, handleSubmit, reset } = useForm({
    // defaultValues: {
    //   userName: "UserName",
    // },
  });

  // emailjs
  // .send(
  //   "",
  //   "",
  //   emailParams,
  //   ""
  // )
  // .then(
  //   (response)=> {
  //     alert("Email Sent Successfully");
  //     reset()
  //   },
  //   (error) => {
  //     alert("Failed to send Message")
  //   }
  // )

  const sendToWhatsapp = (data) => {
    const Message = `Hello, My name is ${data.userName} from ${data.address}, requesting for a ${data.service}. \nHere is a description of my Laundry:`;

    const phoneNumber = "+2348061164856";
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
      <div className="bg-black text-black p-2 rounded-lg shadow-md w-[300px] md:w-[650px] md:h-[650px] relative">
        <figure>
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] mx-auto md:w-[150px]"
          />
        </figure>
        <p className="text-white text-xs mt-4 md:mt-1 md:text-base">
          Kindly Fill Out The Fields
        </p>
        <fieldset className="text-white mt-4 md:mt-10">
          <form
            onSubmit={handleSubmit((data) => {
              sendToWhatsapp(data);
              // sendToGmail(data);
            })}
            className="flex flex-col items-center gap-4 text-sm w-full md:text-xl md:items-start md:gap-10 md:px-12">
            {/* Service Selection */}
            <div className="flex flex-col gap-4 md:flex-row items-center w-full">
              {/* <label
                htmlFor="Service"
                className=""
                {...register("service", {
                  required: "Please select a service",
                })}>
                Service:
              </label> */}
              <select
                name="service"
                required
                className="text-black p-2 rounded text-xs w-full md:p-3 md:text-base md:mx-4">
                <option>Dry Clean (3-4 days)</option>
                <option>Express Pay As You Go (24hrs)</option>
              </select>
            </div>

            <div  className="flex flex-col gap-4 w-full md:flex-row md:mx-auto md:items-center md:justify-evenly">
              {/* Full Name */}
              <div className="flex flex-col gap-4 md:flex-row items-center">
                {/* <label
                htmlFor="Name"
                className="block">
                Full Name:
              </label> */}
                <input
                  type="text"
                  id="userName"
                  placeholder="First Name"
                  {...register("userName", {
                    required: {
                      value: "true",
                      message: "Please Enter Full Name",
                    },
                  })}
                  className="placeholder:text-xs backdrop-blur-md bg-white/20 text-white rounded-md outline-none p-2 placeholder:text-white/80 w-full md:p-3 md:placeholder:text-base"
                />
              </div>

              <div>
              <input
                  type="text"
                  id="userName"
                  placeholder="Last Name"
                  {...register("userName", {
                    required: {
                      value: "true",
                      message: "Please Enter Full Name",
                    },
                  })}
                  className="placeholder:text-xs backdrop-blur-md bg-white/20 text-white rounded-md outline-none p-2 placeholder:text-white/80 w-full md:p-3 md:placeholder:text-base"
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-4 md:flex-row items-center w-full">
              {/* <label
                htmlFor="Address"
                className="block">
                Address:
              </label> */}
              <input
                type="text"
                id="address"
                placeholder="Address"
                {...register("address", {
                  required:  "Please Fill In An Address",
                  
                })}
                className="placeholder:text-xs backdrop-blur-md bg-white/20 text-white rounded-md outline-none p-2 placeholder:text-white/80 w-full md:p-3 md:placeholder:text-base md:mx-4"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-4 md:flex-row items-center w-full">
              {/* <label
                htmlFor="Phone"
                className="block">
                Phone Number:
              </label> */}
              <input
                type="text"
                placeholder="Phone Number"
                id="phone"
                {...register("phone", {
                  required: "Please enter your phone number",
                  validate: (value) =>
                    phoneRegex.test(value) || "Invalid phone number",
                })}
                className="placeholder:text-xs backdrop-blur-md bg-white/20 text-white rounded-md outline-none p-2 placeholder:text-white/80 w-full md:p-3 md:placeholder:text-base md:mx-4"
              />
            </div>

            {/* Carriage Size */}
            <div className="flex flex-col gap-4 md:flex-row items-center w-full">
              {/* <label
                htmlFor="Carriage"
                className="block">
                Carriage Size:
              </label> */}
              <select
                name="carriageSize"
                {...register("service", { required: "This field is required" })}
                className=" p-2 rounded text-xs bg-white  text-black w-full md:p-3 md:mx-4 md:text-base">
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
            <div className="flex gap-6">
              <button
                type="submit"
                onSubmit={handleSubmit(sendToWhatsapp)}
                className="text-black bg-white py-2 px-4 font-semibold rounded-xl mx-auto flex items-center hover:">
                Send To Whatsapp
              </button>
              <button
                type="submit"
                onSubmit={handleSubmit(sendToWhatsapp)}
                className="text-black bg-white py-2 px-4 font-semibold rounded-xl mx-auto flex items-center hover:">
                Send To Gmail
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </section>
  );
};

export default WashFoldModal;
