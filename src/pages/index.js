import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <>
    <Layout hidebg={false}>
      <SEO title="Home"></SEO>
      <Hero />
      <div className="mt-32 md:mt-20 flex flex-col">
        <div className="sm:max-w-1/2 md:max-w-3/4 py-2">
          <h2 className="font-semibold text-2xl sm:text-4xl tracking-tight text-gray-700 ">
            Quality & Accurate
            <span className="block">tax preparation services.</span>
          </h2>
          <div className="mt-4 markdown text-gray-600 text-lg md:text-xl  ">
            <p>
              We’ve developed a way for you to get it done by a CFE
              Professional. With over 20 years in winning income tax strategies
              that yield the most accurate refund possible in addition to
              reducing the tax liability for our clients.
            </p>
            <p>
              We offer access to trained and experienced tax preparers year
              round, who are dedicated to getting the necessary deductions, tax
              credits, write-offs, rebates, and other methods that are entitled
              to our clients in an accurate manner.
            </p>
          </div>
        </div>

        <div className="sm:self-end sm:max-w-1/2 md:max-w-3/4  mt-16 sm:mt-20 markdown text-gray-600 text-lg md:text-xl">
          <h2 className="font-semibold text-2xl sm:text-4xl tracking-tight text-gray-700">
            Get the most out of your taxes
          </h2>
          <p className="">
            We routinely examine prior years tax returns of new clients, and 4
            out of 10 errors were found in our clients' returns prepared by our
            competitors. This resulted in lower refunds, deductions,
            credits/rebates not claimed, and even tax audits.
          </p>
          <p className="">
            This year, try accurate results and financial peace of mind. -
            <span className="text-base pb-1 border-b-2 border-indigo-400 font-semibold">
              <Link to="/contact">Try a CFE Professional.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className=" mt-16 sm:mt-20 markdown text-gray-600 text-lg md:text-xl">
        <h2 className="font-semibold text-2xl sm:text-4xl tracking-tight text-gray-700">
          File with us
        </h2>
        <div>
          <div className="markdown">
            <p>
              We prepare taxes for Individuals and Businesses
              <span className="block">
                and provide tax and retirement planning services to our valued
                clients all year around.
              </span>
            </p>
            <p>Let us help you earn your maximum refund.</p>
          </div>

          <div className="markdown  sm:flex sm:items-start sm:justify-between">
            <p className="sm:max-w-1/4">
              {" "}
              <span className=" font-semibold text-2xl text-indigo-400 mr-1">
                01.
              </span>
              Gain access to qualified and certified CPAs.
            </p>
            <p className="sm:max-w-1/4">
              <span className="font-semibold text-2xl text-indigo-400 mr-1">
                02.
              </span>
              Get a price for your specific needs.
            </p>
            <p className="sm:max-w-1/4">
              <span className="font-semibold text-2xl text-indigo-400 mr-1">
                03.
              </span>
              Email, scan, or fax your W2 to our office and we can file your
              return remotely without you having to leave home, work or school.
            </p>
          </div>
          <div className="mt-6">
            <span className="text-indigo-400 hover:text-indigo-500 text-xl pb-1 border-b-2 border-indigo-400 font-semibold">
              <Link to="/contact">File here</Link>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
