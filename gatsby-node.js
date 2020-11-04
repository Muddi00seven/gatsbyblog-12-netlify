exports.createPages = async function ({ graphql, actions}) {

  const query = await graphql(`
        query {    
                allContentfulBlogPost {
                    edges {
                        node {
                            title
                            author
                            slug
                            image {
                                file {
                                  url
                                }
                              }
                            content {
                                json
                              }
                              publicationDate
                        }
                    }
                }
            }
        `);

    console.log(JSON.stringify(query));

    const posts =   query.data.allContentfulBlogPost.edges;

    posts.map((post) => {
        actions.createPage({
            path: post.node.slug,
            component: require.resolve(`./src/templates/blog-post.tsx`),
            context: post.node,
        });
    })

    
    console.log("End of Gatsby Node File");
}