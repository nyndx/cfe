/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"
import Hero from "../components/hero"

// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children, hidebg = true }) => {
  return (
    <>
      <div className="font-sans bg-white h-screen  overflow-auto  ">
        <div className="relative">
          <div
            className={` ${
              hidebg ? "hidden" : "block"
            } indigo-bg absolute inset-0 transform skew-y-3 origin-top-right `}
          ></div>
          <div
            className={` ${
              hidebg ? "block" : "hidden"
            } absolute inset-0 bg-gray-50 `}
          ></div>
          <Header />
          <Hero hide={hidebg} />
        </div>

        <div className="container mx-auto min-h-3/4 px-4 sm:px-8 relative z-10">
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
