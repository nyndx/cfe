import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

const Aboutus = () => {
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
        <SEO title="About Us" />
        <div className="flex flex-col items-center py-10 mx-auto text-gray-600">
          <h2 className="text-2xl font-medium leading-none tracking-tight text-center text-gray-700 md:text-4xl">
            About us
          </h2>
          <div className="flex flex-col items-center mt-8 text-lg md:text-xl">
            <div className="mb-10 space-y-6">
              <h3 className="text-2xl">
                Meet the CEO & Founder <strong>Zadih Cadyma</strong>
              </h3>
              <div className="">
                <Img
                  className="rounded-lg shadow-md lg:h-40rem"
                  fluid={image.sharp.fluid}
                  alt="CEO & Founder Zadih Cadyma"
                />

                <div className="mt-8">
                  <ul className="space-y-4 list-disc list-inside md:pl-4 md:list-outside">
                    <li>
                      Results-oriented professional who possesses a wide array
                      of business skills in Corporate, Automotive Sales and
                      Repairs, Health Care, Construction, Real Estate, Non
                      Profit, Retail Mass Merchandising Accounting and General
                      Administration duties.
                    </li>
                    <li>
                      Budgeting including solid planning and organizational
                      skills in coordinating all aspects of each project from
                      inception through completion. Sees the big picture and
                      plans appropriate strategies to achieve results.
                    </li>
                    <li>
                      Well disciplined with proven ability to manage multiple
                      assignments efficiently under extreme pressure while
                      meeting tight deadline schedules.
                    </li>
                    <li>
                      Ascertains needs and goals, streamlines existing
                      operations, turns around unprofitable functions, envisions
                      new concepts and future trends, and follows through with
                      development, direction, and accomplishment. Effectively
                      communicates direction, commits people to action, and
                      conveys complex information in easily understood formats.
                    </li>
                    <p className="text-xl font-light uppercase">
                      Core Competencies
                    </p>
                    <li>
                      Highly skilled in day to day accounting operations -
                      Receivables, Payables, Bank Reconciliation; Payroll;
                      General Ledgers review and analysis; Auditing, financial
                      report preparation and analysis - including database
                      design and implementation; Extensive experience with all
                      Generally Accepted Accounting Principles (GAAP) and its
                      compliance; including the new SEC Sarbanes-Oxley
                      compliance regulations (Forms 10-K, 10-Q).
                    </li>
                    <li>
                      Demonstrated leadership qualities in accounting and
                      related fields Knowledge of tax related GAAP and tax
                      accounting methods, including income tax law and
                      regulations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full mt-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold md:text-2xl">
                  CFE Companies
                </h3>
                <p>
                  The Cfe companies started with Cfe Accounting and later on in
                  order to better handle each facet of the business, Cfe Tax
                  Services was formed back in 2010; Cfe Consulting is another
                  subdivision of the Cfe Companies which will become a separate
                  business entity in the near future. We handle all business
                  related matter from the business formation, accounting all the
                  way to consulting services.
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold md:text-2xl">
                  CFE Tax Services
                </h3>
                <p>
                  We are helping small and medium-sized businesses to maintain
                  proper tax records and comply with ongoing tax rules and
                  regulations, at the same time allowing entrepreneurs and
                  managers to make the most of their work and their lives.
                </p>
                <p>
                  Cfe Tax Services provides strategic tax planning services, and
                  representation of clients in resolving matters with tax
                  collection agencies in the United States.
                </p>
                <p>
                  And also provides customized tax planning services for a
                  select group --- the owners of closely-held small to
                  medium-size businesses.
                </p>{" "}
                <p>
                  {" "}
                  Because of this specialization, the professionals of the Cfe
                  Tax Services’ team can keep abreast to the beneficial changes
                  in the tax law providing potential opportunities for the
                  business owner.
                </p>{" "}
                <p>
                  We are familiar with the pitfalls most businesses encounter
                  (and the IRS's approach to dealing with them).
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold md:text-2xl">
                  CFE Consulting
                </h3>
                <p>
                  Founded in 2006 by Founder, C.F.O & C.M.A, Zadih Cadyma, CFE
                  Consulting Services LLC is a full service consulting firm. We
                  have been providing consulting, estate planning and many other
                  business related services to a wide range of clients,
                  including both businesses and individuals.
                </p>
                <p>
                  We have <span className="font-semibold">developed</span> a
                  reputation for professional excellence through the high
                  quality of services we perform for our clients. Our
                  consultants are well positioned to serve all business needs
                  throughout the United States and Canada. We also offer
                  Marketing Research, Online and Print Services, Tax Preparation
                  and Accounting.
                </p>
                <p>
                  No idea is neglected at Cfe Consulting LLC. An idea is like a
                  mustard seed which will grow into a giant tree. Cfe Consulting
                  LLC is a multi-dimensional firm with intent to solve an array
                  of business needs. Our primary goal is to improve and grow
                  companies and people’s lives in many ways, financial and
                  otherwise.
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold md:text-2xl">
                  CFE Accounting
                </h3>
                <p>
                  The mission of CFE Accounting is not just to help small
                  companies get bigger but to take care of individual tax payers
                  as well. The firm provides business development and management
                  consulting services for small and midsized companies in the
                  US. Its offerings include helping clients establish
                  strategies, set goals, and track progress and provide them
                  with necessary cash to meet their business needs.
                </p>
                <p>
                  In addition, Cfe Accounting provides its clients with tax,
                  accounting and consulting services. The company was founded in
                  2006 by managing director Zadih Cadyma after leaving Corporate
                  America.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Aboutus
