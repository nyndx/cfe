import React from "react"
import fs from "../images/undraw_filing_system.svg"

const Hero = () => (
  <section className="h-50vh lg:h-60vh  xl:h-70vh text-gray-700 flex mt-12 sm:mt-16">
    <div className=" lg:max-w-1/2 lg:mr-8">
      <h1 className="text-4xl  md:text-6xl tracking-tight font-bold">
        File with us, pay <span className="text-indigo-400">nothing</span> now.
      </h1>
      <p className="mt-4 sm:mt-2 leading-relaxed  text-gray-600 text-xl sm:text-4xl  ">
        Use your refund to pay your tax prep fees.
      </p>
      <div className="mt-6 sm:flex sm:items-center">
        <button className="bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full">
          Get started
        </button>
        <span className="hidden sm:block sm:mt-0 mx-4 text-lg text-gray-600">
          or
        </span>
        <button className="ml-4 sm:ml-0 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Make a payment
        </button>
      </div>
    </div>
    <div className="hidden lg:block h-50vh w-full lg:max-w-1/2  bg-indigo-100 shadow-lg rounder-lg p-2">
      <img src={fs} alt="A person filing papers" />
    </div>
  </section>
)

export default Hero
