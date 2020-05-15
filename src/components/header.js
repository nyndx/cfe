import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className=" py-3 sm:py-10 sm:flex sm:items-center sm:justify-between">
    <div>
      <div className="inline-block  font-semibold border-solid border-2 px-2 sm:border-4 border-indigo-600 sm:px-4 text-indigo-800 text-xl sm:text-4xl py-2 bg-indigo-400">
        <Link to="/">
          <h1 className="text-white">CFE</h1>
        </Link>
      </div>
    </div>
    <nav className="hidden sm:block sm:flex items-center text-base md:text-lg">
      <a href="#" className="block pr-2">
        <span className=" pb-2 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2 hover:border-solid hover:border-indigo-400 hover:font-semibold ml-2">
          Accounting & Consulting
        </span>
      </a>
      <a href="#" className="block px-2 ">
        <span className="pb-2 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2 hover:border-solid hover:border-indigo-400 hover:font-semibold ml-2">
          {" "}
          Contact
        </span>
      </a>
      <a href="#" className="block pl-2 ">
        <span className=" pb-2 text-gray-600 font-medium hover:text-gray-700 hover:border-b-2 hover:border-solid hover:border-indigo-400 hover:font-semibold ml-2">
          About us
        </span>
      </a>
    </nav>
  </header>
)

export default Header
