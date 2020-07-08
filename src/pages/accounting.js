import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Accounting = ({ location }) => (
  <>
    <Layout>
      <SEO title="Accounting" pathname={location.pathname} />
      <div className="pb-20 text-gray-600">
        <div className="mt-12">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            We measure our success by the success of our clients
          </h1>
          <div className="mt-4">
            <p className="font-medium leading-relaxed md:max-w-3xl">
              Our business encompasses nearly every aspect of financial life,
              whether business, personal, or professional. With 20 years of
              experience, we are able to offer you a high quality service from a
              reputable business that is BBB Accredited!
            </p>
            <div className="grid gap-10 mt-10 sm:grid-cols-2 ">
              <p className="leading-relaxed">
                Accredited by the BBB Since 2012 and a Member of the Natioanl
                Society of Accountants (NSA). With Over 20 years of experience,
                The Staff provide a blend of professional service, expertise,
                all while maintaining a friendly and personal experience while
                you work with us to meet all personal, business, or professional
                needs.
              </p>
              <p className="leading-relaxed">
                The mission of CFE Accounting is not just to help small
                companies get bigger but to take care of individual tax payers
                as well. The firm provides business development and management
                consulting services for small and midsized companies in the US.
                Its offerings include helping clients establish strategies, set
                goals, and track progress and provide them with necessary cash
                to meet their business needs.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-light tracking-wide uppercase">our services</h2>
            <p className="my-2 font-light leading-relaxed">
              Full Tax Services that are offered by experts, including quarterly
              filing, IRS Issues, and general consulting Book Keeping, including
              general accounting & Financial Planning Fundraising Efforts Estate
              Planning, including Living Wills & Trusts.
            </p>
            <p className="font-light leading-relaxed">
              Get daily, weekly, monthly or annual services for:
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
                <p>Accounting, Payroll Services,Billing, Auditing</p>
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
                <p>Business Formation And Restructuring</p>
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
                <p>QuickBooks Assistance & Training </p>
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
                <p>Cash Flow And Budgeting Analysis</p>
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
                <p>Business Planning</p>
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
                <p>Taxes</p>
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
                <p>Bookkeeping</p>
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
                <p>
                  Cost Accounting,Retail Accounting,Construction
                  Accounting,Non-Profit Accounting
                </p>
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
                <p>Fixed Asset</p>
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
                <p>Real Estate</p>
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
                <p>Business Tax Preparation</p>
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
                <p>Accounts Receivable & Payable</p>
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

export default Accounting
