import React from "react"
import chamberbadge from "../images/chamber-badge-blue-01.png"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="mt-24 text-gray-500 font-sans bg-gray-50">
    <div className=" container mx-auto px-4 sm:px-8 ">
      <div className=""></div>
      <div className=" py-16 sm:flex sm:justify-between">
        <div className="w-full sm:w-1/4 mr-6">
          <h3 className="text-xl font-semibold text-gray-600">Links</h3>
          <ul className="mt-4">
            <Link to="/accounting">
              <li className="hover:text-indigo-400">Accounting </li>
            </Link>
            <Link to="/consulting">
              <li className="hover:text-indigo-400">Consulting</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-indigo-400">Contact us</li>
            </Link>
            <Link to="/about_us">
              <li className="hover:text-indigo-400">About us</li>
            </Link>
            <Link to="/social">
              <li className="hover:text-indigo-400">Social responsibility</li>
            </Link>
          </ul>
        </div>
        <div className="mt-6 sm:mt-0">
          <h3 className="text-xl font-semibold text-gray-600">Locations</h3>
          <div className=" mt-4 grid grid-row-2 sm:grid-cols-2 gap-4 ">
            <div className="">
              <h4>Southeast Charlotte:</h4>
              <ul>
                <li>
                  <label htmlFor="Phone">Phone: </label>
                  <a
                    className="text-indigo-400 underline"
                    href="tel:+01-704-713-6667"
                    name="Phone"
                  >
                    +01-704-713-6667
                  </a>
                </li>
                <li>
                  <label htmlFor="Fax">Fax: </label>
                  <a
                    className="text-indigo-400 underline"
                    href="fax:+01-888-909-6350"
                    name="Fax"
                  >
                    +01-888-909-6350
                  </a>
                </li>
                <li>
                  <label htmlFor="Email">Email: </label>
                  <a
                    className="text-indigo-400 underline"
                    href="mailto:info@cfetaxservices.com"
                    name="Email"
                  >
                    info@cfetaxservices.com
                  </a>
                  <a
                    className="block text-indigo-400 underline"
                    href="mailto:zc@cfetaxservices.com"
                    name="Email"
                  >
                    zc@cfetaxservices.com
                  </a>
                </li>

                <li>1727 8A Sardis RD N Charlotte, 28270</li>
              </ul>
            </div>
            <div>
              <h4>New England:</h4>
              <ul>
                <li>
                  <label htmlFor="Phone">Phone: </label>
                  <a
                    className="text-indigo-400 underline"
                    href="tel:+01-617-784-1604"
                    name="Phone"
                  >
                    +01-617-784-1604
                  </a>
                </li>
                <li>
                  <label htmlFor="Fax">Fax: </label>
                  <a
                    className="text-indigo-400 underline"
                    href="fax:+01-888-421-2309"
                    name="Fax"
                  >
                    +01-888-421-2309
                  </a>
                </li>
                <li>
                  <label htmlFor="Email">Email: </label>
                  <a
                    className="text-indigo-400 underline"
                    href="mailto:info@cfetaxservices.com"
                    name="Email"
                  >
                    info@cfetaxservices.com
                  </a>
                  <a
                    className=" block text-indigo-400 underline"
                    href="mailto:zc@cfetaxservices.com"
                    name="Email"
                  >
                    zcr@cfetaxservices.com
                  </a>
                </li>
                <li> Boston, MA Brockton, MA Las Vegas, NV</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={chamberbadge} alt="chamber of commerce" />
      </div>
    </div>
  </footer>
)

export default Footer
