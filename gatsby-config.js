module.exports = {
  siteMetadata: {
    title: `CFE Tax Services`,
    description: `Quality & Accurate
tax preparation services.`,
    author: `@nynd_x`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/src/content/wiki`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/styles`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CFE tax services`,
        short_name: `CFE tax`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cfeicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
