module.exports = {
  plugins: [
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: 'src/posts',
      }
    },
    {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
      {
        resolve: "gatsby-remark-images"
      }
     ]
    }
    }
  ],
}