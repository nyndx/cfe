console.log(process.env.NODE_ENV)

module.exports = {
  siteMetadata: {
    title: `CFE Tax Services`,
    description: `We offer access to trained and experienced tax preparers year round, who are dedicated to getting the necessary deductions,tax credits, write-offs, rebates, and other methods that are entitled to our clients in an accurate manner.`,
    siteUrl:
      process.env.NODE_ENV === "development"
        ? `http://localhost:8000`
        : `https://gifted-swanson-7b0c05.netlify.app`,
    twitter: `@nynd_x`,
    author: "Max Ndundula",
    image: "/cfeicon.png",
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
        background_color: `#FFFFFF`,
        theme_color: `#7F9CF5`,
        display: `minimal-ui`,
        icon: `src/images/cfeicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
