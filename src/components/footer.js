import React from "react"
import chamberbadge from "../images/chamber-badge-blue-01.png"
import BBB from "../images/BBB.jpg"
import thumbtack from "../images/thumbtack.svg"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="mt-24 font-sans text-gray-500 bg-gray-50">
    <div className="container px-4 mx-auto sm:px-8">
      <div className="py-16 space-y-5 sm:space-y-0 sm:flex sm:justify-between">
        <div className="w-full mr-6 sm:w-1/4">
          <h3 className="font-semibold text-gray-600 ">Links</h3>
          <ul className="mt-4 space-y-4">
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
            <Link to="/faq">
              <li className="hover:text-indigo-400">Faq</li>
            </Link>
            <Link to="/social">
              <li className="hover:text-indigo-400">Social responsibility</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-600">Social Links</h3>
        </div>
        {/* <div className="mt-6 sm:mt-0">
          <h3 className="font-semibold text-gray-600 ">Locations</h3>
          <div className="grid gap-4 mt-4 grid-row-3 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 font-medium">Charlotte:</h4>
              <ul className="space-y-1">
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
                <li className="flex">
                  <label htmlFor="Email">Email: </label>
                  <div className="inline-block ml-2">
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
                  </div>
                </li>

                <li>1727 8A Sardis RD N Charlotte, 28270</li>
              </ul>
            </div>
            <div>
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
                <li className="flex">
                  <label htmlFor="Email">Email: </label>
                  <div className="inline-block ml-2">
                    <a
                      className="text-indigo-400 underline"
                      href="mailto:info@cfetaxservices.com"
                      name="Email"
                    >
                      info@cfeaccounting.com
                    </a>
                  </div>
                </li>
                <li className="uppercase">
                  5736 N TRYON STREET, STE 116B CHARLOTTE, NC 28213
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-medium">New England:</h4>
              <ul className="space-y-1">
                <li className="flex">
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
                <li className="flex">
                  <label htmlFor="Email">Email: </label>
                  <div className="inline-block ml-2">
                    <a
                      className="text-indigo-400 underline"
                      href="mailto:info@cfetaxservices.com"
                      name="Email"
                    >
                      info@cfetaxservices.com
                    </a>
                    <a
                      className="block text-indigo-400 underline "
                      href="mailto:zc@cfetaxservices.com"
                      name="Email"
                    >
                      zcr@cfetaxservices.com
                    </a>
                  </div>
                </li>

                <li> Boston, MA Brockton, MA Las Vegas, NV</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="flex mb-6 space-x-5">
        <a href="#" target="_blank">
          <img src={chamberbadge} className="h-24" alt="chamber of commerce" />
        </a>
        <a
          href="https://www.bbb.org/us/nc/charlotte/profile/accounting/cfe-accounting-0473-273659"
          target="_blank"
        >
          <img src={BBB} className="h-24" alt="better business bureau" />
        </a>
        <a
          href="https://www.thumbtack.com/nc/charlotte/tax-preparation/cfe-tax-services/service/286141074372912171"
          target="_blank"
        >
          <img src={thumbtack} className="h-24" alt="thumbtack" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
