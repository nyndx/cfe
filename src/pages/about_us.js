import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

const Aboutus = ({ location }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "founder_2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="About Us" pathname={location.pathname} />
        <div className="flex flex-col items-center py-10 pb-20 text-gray-600">
          <h2 className="text-2xl font-medium leading-none tracking-tight text-center md:text-3xl sm:text-2xl ">
            About us
          </h2>
          <div className="flex flex-col items-center mt-8">
            <div className="mb-10 space-y-6">
              <p className="leading-relaxed">
                The Cfe companies started with Cfe Accounting and later on in
                order to better handle each facet of the business, Cfe Tax
                Services was formed back in 2010; Cfe Consulting is another
                subdivision of the Cfe Companies which will become a separate
                business entity in the near future. We handle all business
                related matter from the business formation, accounting all the
                way to consulting services.
              </p>
              <h3 className="text-xl">
                Meet the CEO & Founder <strong>Zadih Cadyma</strong>
              </h3>

              <div className="">
                <Img
                  className="rounded-lg shadow-md lg:h-40rem"
                  fluid={image.sharp.fluid}
                  alt="CEO & Founder Zadih Cadyma"
                />

                <div className="mt-8">
                  <ul className="space-y-4">
                    <div className="flex items-center">
                      <div className="self-start mt-1">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-6 h-6 mr-2 text-indigo-400 "
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <li className="leading-relaxed">
                        Results-oriented professional who possesses a wide array
                        of business skills in Corporate, Automotive Sales and
                        Repairs, Health Care, Construction, Real Estate, Non
                        Profit, Retail Mass Merchandising Accounting and General
                        Administration duties.
                      </li>
                    </div>
                    <div className="flex items-center">
                      <div className="self-start mt-1">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="self-start w-6 h-6 mr-2 text-indigo-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <li className="leading-relaxed">
                        Budgeting including solid planning and organizational
                        skills in coordinating all aspects of each project from
                        inception through completion. Sees the big picture and
                        plans appropriate strategies to achieve results.
                      </li>
                    </div>

                    <div className="flex items-center">
                      <div className="self-start mt-1">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="self-start h-6 mr-2 text-indigo-400 w- "
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <li>
                        Well disciplined with proven ability to manage multiple
                        assignments efficiently under extreme pressure while
                        meeting tight deadline schedules.
                      </li>
                    </div>
                    <div className="flex items-center">
                      <div className="self-start mt-1">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="self-start w-6 h-6 mr-2 text-indigo-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <li className="leading-relaxed">
                        Ascertains needs and goals, streamlines existing
                        operations, turns around unprofitable functions,
                        envisions new concepts and future trends, and follows
                        through with development, direction, and accomplishment.
                        Effectively communicates direction, commits people to
                        action, and conveys complex information in easily
                        understood formats.
                      </li>
                    </div>
                    <p className="pt-6 text-xl font-light text-center uppercase">
                      Core Competencies
                    </p>
                    <div className="flex items-center">
                      <div className="self-start mt-1">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="self-start w-6 h-6 mr-2 text-indigo-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <li className="leading-relaxed">
                        Highly skilled in day to day accounting operations -
                        Receivables, Payables, Bank Reconciliation; Payroll;
                        General Ledgers review and analysis; Auditing, financial
                        report preparation and analysis - including database
                        design and implementation; Extensive experience with all
                        Generally Accepted Accounting Principles (GAAP) and its
                        compliance; including the new SEC Sarbanes-Oxley
                        compliance regulations (Forms 10-K, 10-Q).
                      </li>
                    </div>
                    <div className="flex items-center">
                      <div className="self-start mt-1">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="self-start w-6 h-6 mr-2 text-indigo-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <li className="leading-relaxed">
                        Demonstrated leadership qualities in accounting and
                        related fields Knowledge of tax related GAAP and tax
                        accounting methods, including income tax law and
                        regulations
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Aboutus
