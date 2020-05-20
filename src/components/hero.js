import React from "react"
import fs from "../images/undraw_filing_system.svg"

const Hero = () => (
  <section className="my-10 sm:mt-0 md:h-36rem ">
    <div className=" min-h-full text-gray-700 flex items-center">
      <div className=" lg:max-w-1/2 lg:mr-8">
        <h1 className="text-4xl md:text-5xl tracking-tight font-bold">
          File with us, pay <span className="text-indigo-400">nothing</span>
          now.
        </h1>
        <p className="mt-4 sm:mt-2 leading-relaxed  text-gray-600 text-xl sm:text-4xl  ">
          Use your refund to pay your tax prep fees.
        </p>
        <div className="mt-10  md:flex md:items-center">
          <button className=" mr-6 mb-4 bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full">
            Get started
          </button>
          <button className=" mb-4 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Make a payment
          </button>
        </div>
      </div>
      <div className="hidden lg:block flex items-center  lg:max-w-1/2  bg-indigo-100 shadow-lg rounder-lg p-2">
        <img src={fs} alt="A person filing papers" />
      </div>
    </div>
  </section>
)

export default Hero
