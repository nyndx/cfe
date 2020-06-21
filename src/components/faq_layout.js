import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const FaqLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
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

  return (
    <div className="relative flex h-full ">
      <div className="hidden w-1/4 px-4 pt-8 overflow-y-auto border-r border-gray-200 md:block min-h-70vh">
        {nodes.map(({ id, frontmatter, fields }) => (
          <Link to={`/wiki/${fields.slug}`} key={id}>
            <div className="mb-2 font-medium text-gray-600 hover:text-indigo-500">
              {frontmatter.title}
            </div>
          </Link>
        ))}
      </div>

      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } absolute bg-white opacity-100 h-full z-50 border-r shadow-r-lg pr-4 pt-6 overflow-y-auto w-48 transition-all ease-in`}
      >
        {nodes.map(({ id, frontmatter, fields }) => (
          <Link
            to={`/wiki/${fields.slug}`}
            key={id}
            onClick={() => setShowSidebar(false)}
          >
            <div
              className="mb-2 text-sm text-gray-600 hover:text-indigo-500"
              onClick={() => setShowSidebar(false)}
            >
              {frontmatter.title}
            </div>
          </Link>
        ))}
      </div>
      <div className="relative mx-auto overflow-y-auto sm:w-3/4 sm:max-w-2xl">
        <div className="absolute right-0 z-30 flex items-center justify-center p-2 mt-4 ml-6 bg-indigo-400 rounded-full shadow-lg bottom-6 md:hidden">
          {showSidebar ? (
            <button
              className="border-none outline-none focus:outline-none "
              onClick={() => setShowSidebar(false)}
            >
              <svg
                className="w-6 h-6 text-white border-none outline-none"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              className="border-none outline-none focus:outline-none "
              onClick={() => setShowSidebar(true)}
            >
              <svg
                className="w-6 h-6 text-white border-none outline-none"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default FaqLayout
