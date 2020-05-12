/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Hero from "./hero"
import Footer from "./footer"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-white h-screen relative overflow-auto  ">
        <div className="bg-gray-100 positions rounded-br-xl rounded-bl-xl h-40vh border-2 absolute inset-0  "></div>
        <div className="container mx-auto px-8 relative z-1000">
          <Header />
          <Hero />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
