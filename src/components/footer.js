import React from "react"
import chamberbadge from "../images/chamber-badge-blue-01.png"
import BBB from "../images/BBB.jpg"
import thumbtack from "../images/thumbtack.svg"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="font-sans text-gray-500 bg-gray-100 ">
    <div className="container px-4 pb-8 mx-auto sm:px-8">
      <div className="justify-between py-16 space-y-5 sm:space-y-0 sm:flex">
        <div className="w-full mr-6 sm:w-1/4">
          <h3 className="text-sm font-medium text-gray-600 uppercase">site</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <Link to="/accounting">
              <li className="mb-2 hover:text-indigo-400">Accounting </li>
            </Link>
            <Link to="/consulting">
              <li className="mb-2 hover:text-indigo-400">Consulting</li>
            </Link>
            <Link to="/contact">
              <li className="mb-2 hover:text-indigo-400">Contact us</li>
            </Link>
            <Link to="/about_us">
              <li className="mb-2 hover:text-indigo-400">About us</li>
            </Link>
            <Link to="/wiki">
              <li className="mb-2 hover:text-indigo-400">Wiki</li>
            </Link>
            <Link to="/social">
              <li className="mb-2 hover:text-indigo-400">
                Social responsibility
              </li>
            </Link>
          </ul>
        </div>
        {/* <div>
          <h3 className="text-sm font-medium text-gray-600 uppercase ">
            Social Links
          </h3>
        </div> */}
        <div className="flex py-6 pl-6 space-x-8 overflow-auto overflow-x-scroll border-t-2 border-gray-200 sm:border-t-0">
          <a href="tbd" target="_blank" rel="noopener noreferrer">
            <img
              src={chamberbadge}
              className="h-24"
              alt="chamber of commerce"
            />
          </a>
          <a
            href="https://www.bbb.org/us/nc/charlotte/profile/accounting/cfe-accounting-0473-273659"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BBB} className="h-24" alt="better business bureau" />
          </a>
          <a
            href="https://www.thumbtack.com/nc/charlotte/tax-preparation/cfe-tax-services/service/286141074372912171"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={thumbtack} className="h-24" alt="thumbtack" />
          </a>
        </div>
      </div>
      <div>
        <p className="text-sm font-thin">
          &copy; {new Date().getFullYear().toString()} CFE Tax Services
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
