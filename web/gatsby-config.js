module.exports = {
  siteMetadata: {
    title: `Divelement`,
    description: `Divelement`,
    author: `Divelement <divelement.io>`,
    siteUrl: `https://www.example.com`, // need to be changed
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/static/fonts/`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-css-modules-typings`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ockwuoxx",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Divelement`,
        short_name: `Divelement`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@scenes": "src/scenes",
          "@styles": "src/styles",
          "@hooks": "src/hooks",
          "@routes": "src/routes",
        },
        extensions: ["js", "scss", "sass"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
