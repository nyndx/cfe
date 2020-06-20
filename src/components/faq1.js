import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Documents = ({ data }) => {
  return (
    <Layout>
      <SEO title="Frequently Asked Question" />
      <div className="mt-12 text-gray-600">
        <h2 className="text-2xl font-medium leading-none tracking-tight text-center text-gray-700 md:text-4xl">
          Services documentation
        </h2>
        <div className="max-w-3xl mx-auto mt-8 text-gray-600">
          <div className="px-6 space-y-6 ">
            {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
              <div className="space-y-2 text-lg">
                <Link to={`faq${fields.slug}`}>
                  <div className="flex items-center">
                    <div className="block -ml-6 ">
                      <svg
                        className="w-4 h-4 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="pl-2 text-xs font-thin tracking-wide uppercase">
                      {frontmatter.title}
                    </h2>
                  </div>

                  <p className="block mt-2">{excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query INDEX_MDX {
    allMdx(sort: { fields: frontmatter___index, order: ASC }) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`

export default Documents
