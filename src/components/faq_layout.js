import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const FaqLayout = ({ children }) => {
  const query = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___index, order: ASC }) {
        nodes {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const nodes = query.allMdx.nodes
  console.log(JSON.stringify(nodes, null, 4))

  return (
    <div className="relative flex h-full">
      <div className="hidden w-1/4 px-4 pt-8 overflow-y-auto border-r border-gray-200 md:block min-h-70vh">
        {nodes.map(({ id, frontmatter, fields }) => (
          <Link to={`/wiki/${fields.slug}`} key={id}>
            <div className="mb-2 font-medium text-gray-600 hover:text-indigo-500">
              {frontmatter.title}
            </div>
          </Link>
        ))}
      </div>
      <div className="w-3/4 max-w-2xl mx-auto overflow-y-auto">{children}</div>
    </div>
  )
}

export default FaqLayout
