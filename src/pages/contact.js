import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <>
    <Layout>
      <SEO title="Contact" />
      <div className="text-gray-600 py-10 h-full">
        <div className="mb-4 text-center space-y-2">
          <h2 className="font-medium text-2xl md:text-4xl leading-none tracking-tight text-center">
            Contact
          </h2>
          <p className="font-light text-base">
            contact us for a quote, help, or any other information
          </p>
        </div>

        <div className="grid grid-rows-1 lg:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none md:mx-8 py-6 gap-14 lg:gap-5">
          <div className="max-w-xs m-auto hidden lg:block">
            <div className="px-4">
              <h3 className="text-2xl font-semibold text-gray-600">
                Get in touch!
              </h3>
              <div className=" mt-4 grid grid-row-2 gap-4 text-xl">
                <div className="space-y-1">
                  <h4 className="font-semibold leading-4">
                    Southeast Charlotte:
                  </h4>
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
                      <label htmlFor="Email">Email: </label>
                      <a
                        className="text-indigo-400 underline"
                        href="mailto:info@cfetaxservices.com"
                        name="Email"
                      >
                        info@cfetaxservices.com
                      </a>
                      <a
                        className="block text-indigo-400 underline ml-12 sm:ml-14"
                        href="mailto:zc@cfetaxservices.com"
                        name="Email"
                      >
                        zc@cfetaxservices.com
                      </a>
                    </li>
                    <li>1727 8A Sardis RD N Charlotte, NC, 28270</li>
                  </ul>
                </div>
                <div className="space-y-2 mt-4">
                  <h4 className="font-semibold leading-4">New England:</h4>
                  <ul className="space-y-1">
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
                      <label htmlFor="Email">Email: </label>
                      <a
                        className="text-indigo-400 underline"
                        href="mailto:info@cfetaxservices.com"
                        name="Email"
                      >
                        info@cfetaxservices.com
                      </a>
                      <a
                        className=" block text-indigo-400 underline ml-12 sm:ml-14"
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
          <div className="max-w-xs sm:max-w-md m-auto">
            <form className="bg-gray-100 shadow-lg rounded px-4 py-6 space-y-4 sm:text-xl flex flex-col">
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="text-gray-600 text-sm font-bold mb-2 sm:text-lg"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  autoComplete="off"
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600 focus:border-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-gray-600 text-sm font-bold mb-2 sm:text-lg"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600 focus:border-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-600 text-sm font-bold mb-2 sm:text-lg"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your e-mail"
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600 focus:border-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-gray-600 text-sm font-bold mb-2 sm:text-lg"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600 focus:border-2"
                ></textarea>
              </div>
              <div className="self-end">
                <div className="rounded-lg mt-4 ">
                  <button
                    type="submit"
                    className=" text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-base font-semibold py-2 px-8 rounded-full shadow-lg lg:text-xl uppercase"
                  >
                    send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Contact
