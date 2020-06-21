/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const styles = require("./src/styles/global.css")
const React = require("react")
const components = require("./src/components/mdxcomponents")

const { MDXProvider } = require("@mdx-js/react")

exports.wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
