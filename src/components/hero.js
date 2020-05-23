import React, { useContext, useEffect } from "react"
import fs from "../images/undraw_filing_system.svg"
import useDimensions from "react-use-dimensions"
import { DimensionsContext } from "../context"

const Hero = () => {
  const [dimref, { width, height }] = useDimensions()
  const [, setDim] = useContext(DimensionsContext)

  useEffect(() => setDim({ width: width, height: height }), [height, width])

  return (
    <section ref={dimref} className="mt-10  h-full pb-14 ">
      <div className=" min-h-full text-gray-700 flex items-center">
        <div className="self-start lg:self-auto lg:max-w-1/2 lg:mr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-bold">
            File with us, pay <span className="text-white">nothing </span>
            now.
          </h1>
          <p className="mt-4 sm:mt-2 leading-relaxed  text-white text-xl sm:text-3xl">
            Use your refund to pay your tax prep fees.
          </p>
          <div className="mt-10 md:flex md:items-center">
            <button className=" mr-6 mb-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-base font-semibold py-2 px-4 rounded-full shadow-lg">
              Get started
            </button>
            <button className=" mb-4 bg-white hover:bg-gray-100 text-gray-700 text-xs sm:text-base font-semibold py-2 px-4 rounded-full shadow-lg">
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
}

export default Hero
