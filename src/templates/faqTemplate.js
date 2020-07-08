import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import FaqLayout from "../components/faq_layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data, location }) => {
  const { body, frontmatter } = data.mdx
  return (
    <Layout>
      <SEO
        title={`CFE Wiki - ${frontmatter.title}`}
        pathname={location.pathname}
      />
      <FaqLayout>
        <div className="overflow-y-auto sm:pr-10 md:pl-6 h-80vh hide-scroll">
          <div className="mt-8 mb-10 ">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </FaqLayout>
    </Layout>
  )
}

export const query = graphql`
  query MDX($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
