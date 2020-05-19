import React from "react"
import chamberbadge from "../images/chamber-badge-blue-01.png"

const Footer = () => (
  <footer className="mt-24 text-gray-500 font-sans border-t-2 ">
    <div className=" py-16 sm:flex sm:justify-between ">
      <div className="w-full sm:w-1/4">
        <h3 className="text-xl font-semibold text-gray-600">Links</h3>
        <ul className="mt-4">
          <li className="hover:text-indigo-400 cursor-pointer">
            Accounting & Consulting
          </li>
          <li className="hover:text-indigo-400 cursor-pointer">Contact us</li>
          <li className="hover:text-indigo-400 cursor-pointer">About us</li>
          <li className="hover:text-indigo-400 cursor-pointer">
            Social responsability
          </li>
        </ul>
      </div>
      <div className="mt-6 sm:mt-0">
        <h3 className="text-xl font-semibold text-gray-600">Locations</h3>
        <div className=" mt-4 grid grid-row-2 sm:grid-cols-2 gap-4 ">
          <div className="">
            <h4>Southeast Charlotte:</h4>
            <ul>
              <li>
                <label>Phone: </label>
                <a
                  className="text-indigo-400 underline"
                  href="tel:+01-704-713-6667"
                >
                  +01-704-713-6667
                </a>
              </li>
              <li>
                <label>Fax: </label>
                <a
                  className="text-indigo-400 underline"
                  href="fax:+01-888-909-6350"
                >
                  +01-888-909-6350
                </a>
              </li>
              <li>
                <label>Email: </label>
                <a
                  className="text-indigo-400 underline"
                  href="mailto:info@cfetaxservices.com"
                >
                  info@cfetaxservices.com
                </a>
                <a
                  className="block text-indigo-400 underline"
                  href="mailto:zc@cfetaxservices.com"
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
                <label>Phone: </label>
                <a
                  className="text-indigo-400 underline"
                  href="tel:+01-617-784-1604"
                >
                  +01-617-784-1604
                </a>
              </li>
              <li>
                <label>Fax: </label>
                <a
                  className="text-indigo-400 underline"
                  href="fax:+01-888-421-2309"
                >
                  +01-888-421-2309
                </a>
              </li>
              <li>
                <label>Email: </label>
                <a
                  className="text-indigo-400 underline"
                  href="mailto:info@cfetaxservices.com"
                >
                  info@cfetaxservices.com
                </a>
                <a
                  className=" block text-indigo-400 underline"
                  href="mailto:zc@cfetaxservices.com"
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
      <img src={chamberbadge} alt="" />
    </div>
  </footer>
)

export default Footer
