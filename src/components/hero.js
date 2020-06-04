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
      <div className="flex items-center min-h-full text-gray-700 ">
        <div className="self-start lg:self-auto lg:max-w-1/2 lg:mr-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            File with us, pay <span className="text-white">nothing </span>
            now.
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-white sm:mt-2 sm:text-3xl">
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
        <div className="flex items-center hidden p-2 bg-indigo-100 shadow-lg lg:block lg:max-w-1/2 rounder-lg">
          <img src={fs} alt="A person filing papers" />
        </div>
      </div>
    </section>
  )
}

export default Hero
