require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

const plugins = [
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-transition-link`,
  // needs to be the first to work with gatsby-remark-images
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      path: `${__dirname}/static/assets`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/content/assets`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/content/posts`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-relative-images",
          options: {
            name: "uploads",
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 960,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
      ],
    },
  },
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      queries,
      chunkSize: 10000, // default: 1000
      enablePartialUpdates: true,
    },
  },
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Blog Falando de Fisio por @pleni_saude`,
      short_name: `FFisio`,
      start_url: `/`,
      background_color: `#fbfbfb`,
      theme_color: `#f0d3e1`,
      display: `minimal-ui`,
      icon: `content/assets/falandofisio-icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-offline`,
  `gatsby-plugin-netlify-cms`,
]

if (process.env.CONTEXT === "production") {
  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false,
    },
  }
  plugins.push(analytics)
}

module.exports = {
  siteMetadata: {
    title: `A fisioterapia na dose certa para você | Falando de Fisio`,
    description: `Encontre aqui artigos exclusivos sobre Fisioterapia. Aprenda como se movimentar melhor, eliminar dores, recuperar de lesões e até melhorar sua saúde íntima.`,
    author: `@pleni_saude`,
    siteUrl: `https://falandodefisio.com.br/`,
    social: {
      twitterLink: `falandodefisio_`,
      instagramLink: `https://www.instagram.com/pleni_saude/`,
    },
  },
  plugins,
}
