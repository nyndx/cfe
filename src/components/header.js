import React, { useState } from "react"

import { Link } from "gatsby"

function Header() {
  const [open, setOpen] = useState(false)

  function handleKeyDown(event) {
    if (event.keyCode === "32") {
      setOpen(!open)
    }
  }

  return (
    <header className="container relative px-4 mx-auto sm:px-8">
      <div className="relative ">
        <div className="flex items-center justify-between py-3 sm:py-10">
          <div>
            <div className="inline-block px-2 py-2 text-xl font-semibold text-indigo-800 bg-indigo-500 border-2 border-indigo-600 border-solid sm:border-4 sm:px-4">
              <Link to="/">
                <h1 className="text-white">CFE</h1>
              </Link>
            </div>
          </div>
          <div
            className="block py-2 text-gray-700 outline-none cursor-pointer sm:hidden"
            onClick={() => setOpen(!open)}
            onKeyDown={event => handleKeyDown(event)}
            role="button"
            tabIndex={0}
          >
            <div className="outline-none focus:shadow-outline">
              {open ? (
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
          </div>

          <nav className="items-center hidden space-x-4 text-base sm:flex md:text-lg">
            <Link
              to="/accounting"
              className="block pb-1 font-medium text-gray-600 transition duration-300 ease-in-out hover:text-gray-700 hover:border-b-2 hover:border-indigo-500 hover:font-semibold"
              activeClassName="border-b-2 border-indigo-500 font-semibold"
            >
              Accounting
            </Link>
            <Link
              to="/consulting"
              className="block pb-1 font-medium text-gray-600 hover:text-gray-700 hover:border-b-2 hover:border-indigo-500 hover:font-semibold"
              activeClassName="border-b-2 border-indigo-500 font-semibold"
            >
              Consulting
            </Link>
            <Link
              to="/pay"
              className="block pb-1 font-medium text-gray-600 hover:text-gray-700 hover:border-b-2 hover:border-indigo-500 hover:font-semibold"
              activeClassName="border-b-2 border-indigo-500 font-semibold"
            >
              Pay
            </Link>
            <Link
              to="/contact"
              className="block pb-1 font-medium text-gray-600 hover:text-gray-700 hover:border-b-2 hover:border-indigo-500 hover:font-semibold"
              activeClassName="border-b-2 border-indigo-500 font-semibold"
            >
              Contact
            </Link>
            <Link
              to="/about_us"
              className="block pb-1 font-medium text-gray-600 hover:text-gray-700 hover:border-b-2 hover:border-indigo-500 hover:font-semibold"
              activeClassName="border-b-2 border-indigo-500 font-semibold"
            >
              About us
            </Link>
          </nav>
        </div>
        <nav
          className={`${
            open ? "block" : "hidden"
          } sm:hidden mt-4 absolute bg-white w-full px-2  shadow-lg z-20`}
        >
          <Link
            to="/accounting"
            activeClassName="font-bold"
            className="block py-2 font-medium text-gray-600 border-b-2 hover:text-gray-700"
          >
            Accounting
          </Link>
          <Link
            to="/consulting"
            activeClassName="font-bold"
            className="block py-2 font-medium text-gray-600 border-b-2 hover:text-gray-700"
          >
            Consulting
          </Link>
          <Link
            to="/pay"
            activeClassName="font-bold"
            className="block py-2 font-medium text-gray-600 border-b-2 hover:text-gray-700"
          >
            Pay
          </Link>
          <Link
            to="/contact"
            activeClassName="font-bold"
            className="block py-2 font-medium text-gray-600 border-b-2 hover:text-gray-700"
          >
            Contact
          </Link>
          <Link
            to="/about_us"
            activeClassName="font-bold"
            className="block py-2 font-medium text-gray-600 hover:text-gray-700"
          >
            About us
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
