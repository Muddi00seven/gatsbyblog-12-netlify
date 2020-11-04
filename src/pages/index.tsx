import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from 'gatsby-image';

import Layout from "../components/layout";

export default ({data}) => {
    console.log(data);
    const posts = data.allContentfulBlogPost.edges.map((post) =>
      <li><Link to={post.node.slug}>{post.node.title}            </Link>
      </li>
    );
    return (
      <Layout>

        <ul>
            {/* {posts} */}
            {
                        data.allContentfulBlogPost.edges.map(edge=>{
                            return (
                                <li className="post" key={edge.node.id} >
                                    <h2>
                                        <Link to={`/${edge.node.slug}`}>
                                            {edge.node.title}
                                        </Link>
                                    </h2>
                                    <div className="meta">
                                        <span>Posted on {edge.node.publicationDate}</span>
                                    </div>
                                       <img src={edge.node.userImage.file.url} />

                                {/* <p>{edge.node.content.json}</p> */}
                                    <p className="excerpt">
                                        {/* {edge.node.excerpt.childMarkdownRemark.excerpt} */}
                                    </p>
                                    <div className="button">
                                        <Link to={`/${edge.node.slug}`}>Read More</Link>
                                    </div>
                                </li>
                            )
                        })
                    }
        </ul>
        </Layout>

    );
}


export const query = graphql`
  query {
    allContentfulBlogPost(sort: {fields: publicationDate, order: DESC}, filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            title
            slug
            author
            userName
            image {
              file {
                url
              }
            }
            userImage{
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
`