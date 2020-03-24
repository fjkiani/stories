exports.createPages = async ({actions,graphql}) => {
    const {createPage} = actions
    // set up a variable equal to graphql
    //get all the data within allMdx and rename the posts to edges 
    const {
        data:{
            allMdx:{edges:posts}
        },
    } = await graphql(`
    {
        allMdx {
          edges {
            node{
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    //loop over the posts
    //grab the node item by destructuring 
    posts.forEach(({node}) => {
        // grab the slug through destructuring
        const {slug} = node.frontmatter
        //set the path property to the slug
       
        //crate page function that gives path of a slug, passes the component and gives the context 
        createPage({
            path:slug,
            component:require.resolve('./src/templates/postTemplate.js'),
            context: {
            slug:slug,
        },
      })
    })
}