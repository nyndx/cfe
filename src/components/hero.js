import React from "react"
import fs from "../images/undraw_filing_system.svg"
import { Link } from "gatsby"

const Hero = ({ hide }) => {
  return (
    <section
      className={`${
        hide ? "hidden" : "block"
      } mt-10 h-full pb-14 relative container mx-auto px-4 sm:px-8`}
    >
      <div className="flex items-center justify-center min-h-full text-gray-700 lg:justify-start ">
        <div className="self-start pb-10 lg:self-auto lg:w-1/2 ">
          <h1 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            File with us,
            <span className="block">
              {" "}
              pay <span className="text-white">nothing </span>
              now.
            </span>
          </h1>
          <p className="mt-4 text-3xl leading-relaxed text-white sm:mt-2 sm:text-3xl">
            Use your refund to pay your tax prep fees.
          </p>
          <div className="mt-10 md:flex md:items-center">
            <Link to="/contact">
              <button className="px-4 py-2 mb-4 mr-6 text-xs font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 sm:text-base">
                Get started
              </button>
            </Link>
            {/* <Link to="/pricing">
              <button className="px-4 py-2 mb-4 text-xs font-semibold text-gray-700 bg-white rounded-full shadow-lg hover:bg-gray-100 sm:text-base">
                Make a payment
              </button>
            </Link> */}
          </div>
        </div>

        <div className="flex items-center hidden h-full p-8 lg:block rounder-lg lg:w-1/2">
          <div>
            <img src={fs} alt="A person filing papers" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
