import type { GatsbyConfig } from 'gatsby';
require('dotenv').config();

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Playfair Display`,
              variants: ['400', '500'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.READ_ONLY_DATO_CMS,
      },
    },
  ],
};

export default config;
