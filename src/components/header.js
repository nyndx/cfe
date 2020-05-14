import React from "react"

const Header = () => (
  <header className=" py-3 sm:py-10 sm:flex sm:items-center sm:justify-between ">
    <div>
      <h1 className="font-sans italic text-indigo-800 text-2xl py-2 ">
        CFE Tax Services
      </h1>
    </div>
    <nav className="hidden sm:block sm:flex items-center text-lg md:text-xl">
      <a
        href="#"
        className="block py-1 px-2 text-gray-700 font-semibold rounded hover:bg-gray-700 hover:text-white ml-2 "
      >
        Other Services
      </a>
      <a
        href="#"
        className="block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-gray-700 hover:text-white ml-2 "
      >
        Contact
      </a>
      <a
        href="#"
        className="block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-gray-700 hover:text-white ml-2"
      >
        About Us
      </a>
    </nav>
  </header>
)

export default Header
