import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Consulting = ({ location }) => (
  <>
    <Layout>
      <SEO title="Consulting" pathname={location.pathname} />
      <div className="pb-20 text-gray-600 ">
        <div className="mt-12">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Your Business is our business
          </h1>
          <div className="mt-4">
            <p className="font-medium leading-relaxed md:max-w-3xl">
              Founded in 2006 by Founder, C.F.O & C.M.A, Zadih Cadyma, CFE
              Consulting Services LLC is a full service consulting firm. We have
              been providing consulting, estate planning and many other business
              related services to a wide range of clients, including both
              businesses and individuals.
            </p>
            <div className="grid gap-10 mt-10 sm:grid-cols-2">
              <p className="leading-relaxed">
                No idea is neglected at Cfe Consulting LLC. An idea is like a
                mustard seed which will grow into a giant tree. Cfe Consulting
                LLC is a multi-dimensional firm with intent to solve an array of
                business needs. Our primary goal is to improve and grow
                companies and people’s lives in many ways, financial and
                otherwise.
              </p>
              <p className="leading-relaxed">
                We have developed a reputation for professional excellence
                through the high quality of services we perform for our clients.
                Our consultants are well positioned to serve all business needs
                throughout the United States and Canada. We also offer Marketing
                Research, Online and Print Services, Tax Preparation and
                Accounting.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-light tracking-wide uppercase">our services</h2>
            <p className="my-2 font-light leading-relaxed">
              We hope that you will find a service that suits your particular
              needs and if a service is not listed, please contact us.
            </p>

            <ul className="mt-6 space-y-2 text-base">
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Business Development</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Business Formation</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Educational Tutoring</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Cash Infusion</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Financial Planning</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Grant</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Import and Export</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Investement and Asset Acquisition</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Management Strategies</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Marketing Development and Strategies</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Publishing</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Typing Services</p>
              </li>
              <li className="flex items-center">
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-2 text-indigo-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Notary Public Services</p>
              </li>
              <li>And much more ...</li>
            </ul>
          </div>
          <div className="flex items-center justify-center w-full h-full px-4 py-6 mt-10 bg-indigo-400 rounded shadow-sm">
            <p className="text-lg font-semibold text-gray-700 ">
              For more information on how we can help you, please{" "}
              <Link
                to="/contact"
                className="text-gray-100 border-b-2 border-gray-100"
              >
                contact
              </Link>{" "}
              us or visit our{" "}
              <Link
                to="/wiki"
                className="text-gray-100 border-b-2 border-gray-100"
              >
                wiki
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Consulting
