module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Merriweather:300,400,700`],
      },
    },
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
  ],
}
