import React, { useEffect, useRef, useState } from "react";
import { BookmarkX } from "lucide-react";
import logo from "../Images/SPARKULS-removebg-preview.png";
import WashFoldModal from "./WashFoldModal";

const Modal = ({ setShowModal, showModal }) => {
 

  
  const modalRef = useRef();

  const closeModalRef = (e) => {
    modalRef.current === e.target ? setShowModal(false) : null;
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModalRef}
      className={`${
        showModal ? "flex" : "hidden"
      } fixed inset-0 backdrop-blur-sm bg-black/30 text-center z-50 items-center  justify-center`}>
      <div>
        <button
          className="place-self-end translate-x-64 mb-4"
          onClick={closeModal}>
          {" "}
          <BookmarkX size={40} />
        </button>

        <div className="bg-black rounded-xl px-20 py-10 flex items-center justify-center flex-col">
          <figure>
            <img
              src={logo}
              className="w-[200px] mx-auto"
            />
          </figure>
          <h1 className="text-xl mt-10">Make A Request for:</h1>

          <div className="flex flex-col gap-12 mt-10 w-full mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-16 py-1 shadow-lg mx-auto hover:bg-white hover:text-black transition-all duration-300 gap-2 flex flex-col w-full">
              <button
                className=" text-xl size-full"
                >
                {" "}
                Dry Cleaning / Wash & Fold <span></span>
              </button>

             
              <p className="text-xs">
                * 3-4 Days Turn Around wash, fold, iron and delivery
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-16 py-1 shadow-lg mx-auto hover:bg-white hover:text-black transition-all duration-300 gap-2 flex flex-col w-full">
              <button className=" text-xl size-full">
                {" "}
                Express Pay As You Go <span></span>
              </button>
              <p className="text-xs">* 24hrs wash, fold, iron and delivery</p>
            </div>

            <button>
              <span></span>
            </button>
          </div>
          <p className="mt-10">Laundry Service At Your Convenience</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
