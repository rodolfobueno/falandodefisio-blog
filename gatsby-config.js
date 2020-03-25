require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

const plugins = [
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-relative-images",
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 650,
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: "gatsby-remark-copy-linked-files",
          options: {
            destinationDir: "static",
          },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
        `gatsby-remark-external-links`,
      ],
    },
  },
  {
    // needs to be the first to work with gatsby-remark-images
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/static/assets`,
      name: `uploads`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/posts`,
      name: `posts`,
    },
  },
  `gatsby-plugin-resolve-src`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-transition-link`,
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
