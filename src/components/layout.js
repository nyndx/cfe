/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"

import Footer from "./footer"

// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children, hidebg = true }) => {
  return (
    <>
      <div className="font-sans bg-white h-screen relative overflow-auto  ">
        <div
          className={` ${
            hidebg ? "hidden" : "block"
          } indigo-bg border-b-2 absolute inset-0 h-28rem sm:h-48rem transform skew-y-3 origin-top-right`}
        ></div>
        <div className="container mx-auto px-4 sm:px-8 bg-transparent relative">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
