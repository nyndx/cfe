import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"

const Pricing = () => (
  <>
    <Layout>
      <SEO title="Pricing" />
      <div className="text-gray-600 py-10">
        <div className="text-center flex justify-center">
          <h2 className="font-medium text-2xl md:text-4xl leading-none tracking-tight">
            Select a service for your needs
          </h2>
        </div>
        <div className="mt-16 mb-16 flex justify-center  ">
          <div className="flex items-center space-x-2 ">
            <span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </span>
            <h3 className="uppercase font-medium lg:text-xl">Business plans</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row ">
          <div className="relative bg-indigo-200 w-56 h-60  md:w-80  lg:w-96 rounded-lg flex items-center shadow-lg">
            <div className=" absolute top-0 transform -translate-y-1/2 z-10">
              <span className="">
                <svg className="h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="relative z-0 grid grid-row-3 h-full w-full rounded-lg px-2">
              <div className="mt-4 sm:mt-6 ">
                <h3 className="text-center text-xl sm:text-2xl uppercase tracking-tight">
                  Consulting Services
                </h3>
              </div>

              <div className="-mt-5 flex items-center justify-center space-x-2 ">
                <span className="text-4xl tracking-wide font-semibold text-gray-500">
                  <span className="">$</span>
                  <span className="">500</span>
                </span>

                <span className="">USD</span>
              </div>
              <div className="mt-6 flex justify-center ">
                <div className="rounded-lg">
                  <span className=" text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-base font-semibold py-2 px-8 rounded-full shadow-lg lg:text-xl ">
                    Buy Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-indigo-200 w-56 h-60 md:w-80 md:w-80 lg:w-96 lg:w-96 rounded-lg flex items-center shadow-lg">
            <div className=" absolute top-0 transform -translate-y-1/2 z-10">
              <span className="">
                <svg className="h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="relative z-0 grid grid-row-3 h-full w-full rounded-lg ">
              <div className="mt-6">
                <h3 className="text-center text-xl sm:text-2xl uppercase tracking-tight">
                  Tax Analysis
                </h3>
              </div>

              <div className="-mt-6 flex items-center justify-center space-x-2 ">
                <span className=" text-4xl tracking-wide font-semibold text-gray-500">
                  <span className="">$</span>
                  <span className="">400</span>
                </span>

                <span className="">USD</span>
              </div>
              <div className="mt-6 flex justify-center ">
                <div className="rounded-lg">
                  <span className=" text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-base font-semibold py-2 px-8 rounded-full shadow-lg lg:text-xl ">
                    Buy Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-indigo-200 w-56 h-60 md:w-80 md:w-80 lg:w-96 lg:w-96 rounded-lg flex items-center shadow-lg">
            <div className=" absolute top-0 transform -translate-y-1/2 z-10">
              <span className="">
                <svg className="h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="relative z-0 grid grid-row-3 h-full w-full rounded-lg ">
              <div className="mt-8">
                <h3 className="text-center text-xl sm:text-2xl uppercase tracking-tight">
                  Retainer Fee
                </h3>
              </div>

              <div className="-mt-6 flex items-center justify-center space-x-2 ">
                <span className=" text-4xl tracking-wide font-semibold text-gray-500">
                  <span className="">$</span>
                  <span className="">352</span>
                </span>

                <span className="">USD</span>
              </div>
              <div className="mt-6 flex justify-center ">
                <div className="rounded-lg">
                  <span className=" text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-base font-semibold py-2 px-8 rounded-full shadow-lg lg:text-xl ">
                    Buy Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-16 flex justify-center  ">
          <div className="flex items-center space-x-2 ">
            <span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="uppercase font-medium lg:text-lg">personal plans</h3>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl md:text-2xl">
            For personal and tailored services please{" "}
            <Link
              className="text-indigo-400 hover:text-indigo-500 pb-1 border-b-2 border-indigo-400 font-semibold"
              to="/contact"
            >
              contact us.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  </>
)

export default Pricing
