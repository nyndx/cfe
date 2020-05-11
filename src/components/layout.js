/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">{children}</div>
    </>
  )
}

export default Layout
