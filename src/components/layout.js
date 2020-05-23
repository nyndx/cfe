/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import { DimensionsContext } from "../context/context"
import Header from "./header"
import Footer from "./footer"

// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children, hidebg = true }) => {
  const [dim] = useContext(DimensionsContext)
  const heroM = dim.height / 16
  const headerPadding = 94 / 16
  const measurements = heroM + headerPadding + 5
  return (
    <>
      <div className="font-sans bg-white h-screen relative overflow-auto  ">
        <div
          style={{ height: measurements + "rem" }}
          className={` ${
            hidebg ? "hidden" : "block"
          } indigo-bg absolute inset-0 transform skew-y-3 origin-top-right `}
        ></div>
        <Header />
        <div className="container mx-auto min-h-3/4 px-4 sm:px-8 relative z-10">
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
