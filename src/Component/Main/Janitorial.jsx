import React from 'react'
import img from "../../Images/hand-holding-stand-with-cleaning-products.jpg"
import SVGIcon from '../../Config/SVGIcon'
const Janitorial = () => {
  return (
    <section className="pl-16 mt-10">
      <h2 className="sticky text-3xl leading-[45px] pt-8 text-center font-semibold sm:text-4xl ">Janitorial Services</h2>

      <figure className="mt-8 rounded-xl sm:px-8 sm:mt-10 px-4">
        <img
          src={img}
          className="object-cover rounded-xl"
        />
      </figure>

      <p  className="mt-8 pl-4  sm:px-[10%] opacity-80">Exceptional janitorial services, ensuring spotless spaces with professional care, tailored solutions, and a commitment to maintaining cleanliness and hygiene standards.</p>

      <div className="flex items-center justify-evenly mt-8 gap-4 mx-4 text-xs">
        <button className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl ">
          <SVGIcon
            iconName={`cleaning2`}
            height={`30px`}
            className="fill-secondary"
          />
          <p>Janitorial Service</p>
        </button>
        <button className="border-2 font-semibold border-secondary text-secondary items-center flex flex-col gap-1 px-4 py-2 rounded-xl ">
          <SVGIcon
            iconName={`cleaning`}
            height={`30px`}
            className="fill-secondary"
          />
          <p>Cleaning Service</p>
        </button>
      </div>


      
      <div className="shadow-md rounded-xl p-4 border-2 border-secondary mt-8 mx-4 ">
          <h4 className="font-semibold text-xl">Cleaning Services</h4>

          <p className="mt-4 opacity-85">
       we deploy good and trained cleaners and supervise adequately at all times.
          </p>
        </div>


        <p>dont kow mych about the service, ask mr Kilanko</p>


        <hr className="mt-8 text-black"></hr>
    </section>
  )
}

export default Janitorial
