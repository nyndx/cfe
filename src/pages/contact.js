import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <>
    <Layout>
      <SEO title="Contact" />
      <div className="h-full py-12 text-gray-600">
        <div className="mb-4 space-y-2 text-center">
          <h2 className="text-2xl font-medium leading-none tracking-tight text-center md:text-4xl">
            Contact
          </h2>
          <p className="text-base font-light">
            contact us for a quote, help, or any other information
          </p>
        </div>

        <div className="grid grid-rows-1 py-6 lg:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none md:mx-8 gap-14 lg:gap-5">
          <div className="hidden max-w-xs m-auto lg:block">
            <div className="px-4">
              <h3 className="text-2xl font-semibold text-gray-600">
                Get in touch!
              </h3>
              <div className="grid gap-4 mt-4 text-lg grid-row-2">
                <div className="space-y-2">
                  <h4 className="font-semibold leading-4">Charlotte:</h4>
                  <ul className="space-y-2">
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
                    <li className="uppercase">
                      1727 8A Sardis RD N Charlotte, NC, 28270
                    </li>
                    <div className="w-full h-6 border-t-2"></div>
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
                <div className="w-full border-t-2"></div>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold leading-4">New England:</h4>
                  <ul className="space-y-2">
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

                    <li className="uppercase">
                      {" "}
                      Boston, MA Brockton, MA Las Vegas, NV
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs m-auto sm:max-w-md">
            <form className="flex flex-col px-4 py-6 space-y-4 bg-gray-100 rounded shadow-lg sm:text-xl">
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-bold text-gray-600 sm:text-lg"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  autoComplete="off"
                  className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:border-indigo-600 focus:border-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="mb-2 text-sm font-bold text-gray-600 sm:text-lg"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                  className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:border-indigo-600 focus:border-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-bold text-gray-600 sm:text-lg"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your e-mail"
                  className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:border-indigo-600 focus:border-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-2 text-sm font-bold text-gray-600 sm:text-lg"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:border-indigo-600 focus:border-2"
                ></textarea>
              </div>
              <div className="self-end">
                <div className="mt-4 rounded-lg ">
                  <button
                    type="submit"
                    className="px-8 py-2 text-xs font-semibold text-center text-white uppercase bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 sm:text-base lg:text-xl"
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
