/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const faqTemplate = path.resolve("src/templates/faqTemplate.js")

  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___index, order: ASC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const posts = result.data.allMdx.nodes
  // create page for each mdx file
  posts.forEach(post => {
    createPage({
      path: `/wiki${post.fields.slug}`,
      component: faqTemplate,
      context: {
        slug: post.fields.slug,
      },
    })
  })
}
