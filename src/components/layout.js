/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import { DimensionsContext } from "../context"
import Header from "./header"
import Footer from "./footer"

// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children, hidebg = true }) => {
  const [dim, _] = useContext(DimensionsContext)
  const headerPadding = 94 / 16
  const heroM = dim.height / 16
  const measurements = heroM + headerPadding + 2.5 + 3.5
  return (
    <>
      <div className="font-sans bg-white h-screen relative overflow-auto  ">
        <div
          style={{ height: measurements + "rem" }}
          className={` ${
            hidebg ? "hidden" : "block"
          } indigo-bg absolute inset-0 transform skew-y-3 origin-top-right `}
        ></div>
        {/* <div
          className={` ${
            hidebg ? "block" : "hidden"
          } bg-indigo-200 border-b-2 absolute inset-0 h-48 sm:h-64`}
        ></div> */}
        <div className="container mx-auto px-4 sm:px-8 relative">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
