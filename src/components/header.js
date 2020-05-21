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
          <div className="inline-block font-semibold border-solid border-2 px-2 sm:border-4 border-indigo-600 sm:px-4 text-indigo-800 text-xl sm:text-4xl py-2 bg-indigo-400">
            <Link to="/">
              <h1 className="text-white">CFE</h1>
            </Link>
          </div>
        </div>
        <div
          className="block sm:hidden text-gray-700 cursor-pointer"
          onClick={() => setOpen(!open)}
          onKeyDown={event => handleKeyDown(event)}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
        </div>

        <nav className="hidden sm:block sm:flex items-center text-base md:text-lg">
          <Link to="/accounting" className="block pr-2">
            <span className=" pb-2 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2 hover:border-solid hover:border-indigo-400 hover:font-semibold ml-2">
              Accounting
            </span>
          </Link>
          <Link to="/consulting" className="block pr-2">
            <span className=" pb-2 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2 hover:border-solid hover:border-indigo-400 hover:font-semibold ml-2">
              Consulting
            </span>
          </Link>
          <Link to="/contact" className="block px-2 ">
            <span className="pb-2 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2 hover:border-solid hover:border-indigo-400 hover:font-semibold ml-2">
              {" "}
              Contact
            </span>
          </Link>
          <Link to="/about_us" className="block pl-2 ">
            <span className=" pb-2 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2 hover:border-solid hover:border-indigo-400 hover:font-semibold ml-2">
              About us
            </span>
          </Link>
        </nav>
      </div>
      <nav
        className={`${
          open ? "block" : "hidden"
        } sm:hidden mt-4 absolute bg-white w-full px-2  shadow-lg`}
      >
        <Link to="/accounting" className="block  pb-2 border-b-2">
          <span className="text-gray-600 font-medium hover:text-gray-700">
            Accounting
          </span>
        </Link>
        <Link to="/consulting" className="block pb-2 border-b-2">
          <span className=" text-gray-600 font-medium hover:text-gray-700 ">
            Consulting
          </span>
        </Link>
        <Link to="/contact" className="block pb-2 border-b-2 ">
          <span className=" text-gray-600 font-medium hover:text-gray-700">
            {" "}
            Contact
          </span>
        </Link>
        <Link to="/about_us" className="block  pb-2">
          <span className="  text-gray-600 font-medium hover:text-gray-700">
            About us
          </span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
