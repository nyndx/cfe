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
      <div className="h-screen overflow-auto font-sans bg-white ">
        <div className="relative">
          <div
            className={` ${
              hidebg ? "hidden" : "block"
            } indigo-bg absolute inset-0 transform skew-y-3 origin-top-right h-full `}
          ></div>
          <div
            className={` ${
              hidebg ? "block" : "hidden"
            } absolute inset-0 bg-gray-50 `}
          ></div>
          <Header />
          <Hero hide={hidebg} />
        </div>

        <main className="container relative z-10 px-4 mx-auto min-h-60vh sm:px-8">
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
