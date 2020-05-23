import React, { useState } from "react"

import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

function Header() {
  const [open, setOpen] = useState(false)

  function handleKeyDown(event) {
    if (event.keyCode === "32") {
      setOpen(!open)
    }
  }

  return (
    <header className="relative">
      <div className="py-3 sm:py-10 flex items-center justify-between">
        <div>
          <div className="inline-block font-semibold border-solid border-2 px-2 sm:border-4 border-indigo-600 sm:px-4 text-indigo-800 text-xl  py-2 bg-indigo-400">
            <Link to="/">
              <h1 className="text-white">CFE</h1>
            </Link>
          </div>
        </div>
        <div
          className="block sm:hidden text-gray-700 cursor-pointer outline-none pl-2 py-2"
          onClick={() => setOpen(!open)}
          onKeyDown={event => handleKeyDown(event)}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon
            className="outline-none focus:shadow-outline"
            icon={open ? faTimes : faBars}
            size="lg"
          />
        </div>

        <nav className="hidden sm:block sm:flex items-center text-base md:text-lg space-x-4">
          <Link
            to="/accounting"
            className="block pb-1 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2  hover:border-indigo-400 hover:font-semibold transition duration-300 ease-in-out"
            activeClassName="border-b-2 border-indigo-400 font-semibold"
          >
            Accounting
          </Link>
          <Link
            to="/consulting"
            className="block pb-1 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2  hover:border-indigo-400 hover:font-semibold"
            activeClassName="border-b-2 border-indigo-400 font-semibold"
          >
            Consulting
          </Link>
          <Link
            to="/pricing"
            className="block pb-1 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2  hover:border-indigo-400 hover:font-semibold"
            activeClassName="border-b-2 border-indigo-400 font-semibold"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="block pb-1 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2  hover:border-indigo-400 hover:font-semibold"
            activeClassName="border-b-2 border-indigo-400 font-semibold"
          >
            Contact
          </Link>
          <Link
            to="/about_us"
            className="block pb-1 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2  hover:border-indigo-400 hover:font-semibold"
            activeClassName="border-b-2 border-indigo-400 font-semibold"
          >
            About us
          </Link>
        </nav>
      </div>
      <nav
        className={`${
          open ? "block" : "hidden"
        } sm:hidden mt-4 absolute bg-white w-full px-2  shadow-lg`}
      >
        <Link
          to="/accounting"
          activeClassName="font-bold"
          className="block py-2  border-b-2 text-gray-600 font-medium hover:text-gray-700"
        >
          Accounting
        </Link>
        <Link
          to="/consulting"
          activeClassName="font-bold"
          className="block py-2 border-b-2 text-gray-600 font-medium hover:text-gray-700"
        >
          Consulting
        </Link>
        <Link
          to="/pricing"
          activeClassName="font-bold"
          className="block py-2 border-b-2 text-gray-600 font-medium hover:text-gray-700"
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          activeClassName="font-bold"
          className="block py-2 border-b-2 text-gray-600 font-medium hover:text-gray-700"
        >
          Contact
        </Link>
        <Link
          to="/about_us"
          activeClassName="font-bold"
          className="block py-2 text-gray-600 font-medium hover:text-gray-700"
        >
          About us
        </Link>
      </nav>
    </header>
  )
}

export default Header
