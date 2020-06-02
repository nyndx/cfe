import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"

const Pricing = () => (
  <>
    <Layout>
      <SEO title="Pricing" />
      <div className="py-10 text-gray-600">
        <div className="flex justify-center text-center">
          <h2 className="text-2xl font-medium leading-none tracking-tight text-gray-700 md:text-4xl">
            Select a service for your needs
          </h2>
        </div>
        <div className="flex justify-center mt-16 mb-16 ">
          <div className="flex items-center space-x-2 ">
            <span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </span>
            <h3 className="font-medium uppercase lg:text-xl">Business plans</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-14 lg:space-y-0 lg:space-x-14 lg:flex-row ">
          <div className="relative flex items-center w-56 bg-indigo-200 rounded-lg shadow-xl h-60 md:w-80 lg:w-96">
            <div className="absolute top-0 z-10 transform -translate-y-1/2 ">
              <span className="">
                <svg
                  className="h-16 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="relative z-0 grid w-full h-full px-2 rounded-lg grid-row-3">
              <div className="mt-4 sm:mt-6 ">
                <h3 className="text-xl tracking-tight text-center uppercase sm:text-2xl">
                  Consulting Services
                </h3>
              </div>

              <div className="flex items-center justify-center -mt-5 space-x-2 ">
                <span className="text-4xl font-semibold tracking-wide text-gray-500">
                  <span className="">$</span>
                  <span className="">500</span>
                </span>

                <span className="">USD</span>
              </div>
              <div className="flex justify-center mt-6 ">
                <div className="rounded-lg">
                  <span className="px-8 py-2 text-xs font-semibold text-center text-white bg-indigo-600 rounded-full shadow-lg  hover:bg-indigo-700 sm:text-base lg:text-xl">
                    Buy Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center w-56 bg-indigo-200 rounded-lg shadow-xl h-60 md:w-80 lg:w-96">
            <div className="absolute top-0 z-10 transform -translate-y-1/2 ">
              <span className="">
                <svg
                  className="h-16 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="relative z-0 grid w-full h-full rounded-lg grid-row-3 ">
              <div className="mt-6">
                <h3 className="text-xl tracking-tight text-center uppercase sm:text-2xl">
                  Tax Analysis
                </h3>
              </div>

              <div className="flex items-center justify-center -mt-6 space-x-2 ">
                <span className="text-4xl font-semibold tracking-wide text-gray-500 ">
                  <span className="">$</span>
                  <span className="">400</span>
                </span>

                <span className="">USD</span>
              </div>
              <div className="flex justify-center mt-6 ">
                <div className="rounded-lg">
                  <span className="px-8 py-2 text-xs font-semibold text-center text-white bg-indigo-600 rounded-full shadow-lg  hover:bg-indigo-700 sm:text-base lg:text-xl">
                    Buy Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center w-56 bg-indigo-200 rounded-lg shadow-xl h-60 md:w-80 lg:w-96">
            <div className="absolute top-0 z-10 transform -translate-y-1/2 ">
              <span className="">
                <svg
                  className="h-16 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="relative z-0 grid w-full h-full rounded-lg grid-row-3 ">
              <div className="mt-8">
                <h3 className="text-xl tracking-tight text-center uppercase sm:text-2xl">
                  Retainer Fee
                </h3>
              </div>

              <div className="flex items-center justify-center -mt-6 space-x-2 ">
                <span className="text-4xl font-semibold tracking-wide text-gray-500 ">
                  <span className="">$</span>
                  <span className="">352</span>
                </span>

                <span className="">USD</span>
              </div>
              <div className="flex justify-center mt-6 ">
                <div className="rounded-lg">
                  <span className="px-8 py-2 text-xs font-semibold text-center text-white bg-indigo-600 rounded-full shadow-lg  hover:bg-indigo-700 sm:text-base lg:text-xl">
                    Buy Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 mb-16 ">
          <div className="flex items-center space-x-2 ">
            <span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="font-medium uppercase lg:text-lg">personal plans</h3>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center md:text-2xl">
            For more information or for personal and tailored services please{" "}
            <Link
              className="pb-1 font-semibold text-indigo-400 border-b-2 border-indigo-400 hover:text-indigo-500"
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
