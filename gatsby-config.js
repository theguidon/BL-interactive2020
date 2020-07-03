module.exports = {
  pathPrefix: `/2020/07/under-fire`,
  assetPrefix: `https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap`,
  siteMetadata: {
    title: `Under fire`,
    description: `The Philippines' deep history of attacks against the free press merits a look into the cases of the named and unnamed journalists slain under the administrations that succeeded the late dictator Ferdinand Marcos' rule.`,
    author: `@theguidon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `G-R7ZZDB3G10`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Under fire | Guidon Interactives`,
        short_name: `BL UnderFire`,
        start_url: `/`,
        background_color: `#242423`,
        theme_color: `#C23A3A`,
        display: `minimal-ui`,
        // edit below
        icon: `src/images/logo.svg`,
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
