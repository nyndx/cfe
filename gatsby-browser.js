/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { DimensionsProvider } from "./src/context"
import "./src/styles/global.css"

const wrapRootElement = ({ element }) => {
  return <DimensionsProvider>{element}</DimensionsProvider>
}

export { wrapRootElement }
