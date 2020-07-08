import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ location }) => (
  <Layout>
    <SEO title="404: Not found" pathname={location.pathname} />
    <div className="flex flex-col items-center justify-center space-y-6 min-h-60vh">
      <h1 className="text-4xl italic font-semibold">NOT FOUND</h1>
      <p className="font-medium tracking-widest uppercase">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to="/">
        <span
          aria-label="A hand pointing backwards"
          role="img"
          className="mr-4"
        >
          👈🏼
        </span>
        <span className="text-lg text-indigo-500">Go back home</span>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
