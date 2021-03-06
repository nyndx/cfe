import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <>
    <Layout hidebg={false}>
      <SEO title="Home" pathname={location.pathname}></SEO>
      <div className="pb-20">
        <div className="flex flex-col">
          <div className="py-2 md:max-w-3/4">
            <h2 className="text-xl font-semibold tracking-tight text-gray-700 sm:text-2xl ">
              Quality & Accurate
              <span className="block">tax preparation services.</span>
            </h2>
            <div className="mt-4 space-y-4 text-gray-600 ">
              <p>
                We’ve developed a way for you to get it done by a CFE
                Professional. With over 20 years in winning income tax
                strategies that yield the most accurate refund possible in
                addition to reducing the tax liability for our clients.
              </p>
              <p>
                We offer access to trained and experienced tax preparers year
                round, who are dedicated to getting the necessary deductions,
                tax credits, write-offs, rebates, and other methods that are
                entitled to our clients in an accurate manner.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-4 text-gray-600 sm:self-auto md:self-end md:max-w-3/4 sm:mt-20 ">
            <h2 className="text-xl font-semibold tracking-tight text-gray-600 sm:text-2xl">
              Get the most out of your taxes
            </h2>
            <p>
              We routinely examine prior years tax returns of new clients, and 4
              out of 10 errors were found in our clients' returns prepared by
              our competitors. This resulted in lower refunds, deductions,
              credits/rebates not claimed, and even tax audits.
            </p>
            <p>
              This year, try accurate results and financial peace of mind. -
              <span className="pb-1 text-base font-semibold border-b-2 border-indigo-500">
                <Link to="/contact">Try a CFE Professional.</Link>
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-4 text-gray-600 sm:mt-20 ">
          <h2 className="text-xl font-semibold tracking-tight text-gray-600 sm:text-2xl">
            File with us
          </h2>
          <div>
            <div className="space-y-4">
              <p>
                We prepare taxes for Individuals and Businesses
                <span className="block">
                  and provide tax and retirement planning services to our valued
                  clients all year around.
                </span>
              </p>
              <p>Let us help you earn your maximum refund.</p>
            </div>

            <div className="markdown md:flex md:items-start md:justify-between">
              <p className="md:max-w-1/4">
                {" "}
                <span className="mr-1 text-2xl font-semibold text-indigo-500 ">
                  01.
                </span>
                Gain access to qualified and certified CPAs.
              </p>
              <p className="md:max-w-1/4">
                <span className="mr-1 text-2xl font-semibold text-indigo-500">
                  02.
                </span>
                Get a price for your specific needs.
              </p>
              <p className="md:max-w-1/4">
                <span className="mr-1 text-2xl font-semibold text-indigo-500">
                  03.
                </span>
                Email, scan, or fax your W2 to our office and we can file your
                return remotely without you having to leave home, work or
                school.
              </p>
            </div>
            <div className="mt-6">
              <a
                className="pb-1 text-xl font-semibold text-indigo-500 border-b-2 border-indigo-500 hover:border-indigo-400 hover:text-indigo-400"
                href="https://cfetaxservices.securefilepro.com/connect/#/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                File here
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
