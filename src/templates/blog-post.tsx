import React from "react";
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout";

import Img from 'gatsby-image';

export default ({pageContext}) => {
  console.log("Page Context: " + JSON.stringify(pageContext));
  return (
    <Layout>    <div>
            {/* <div>{pageContext.title}</div>

            <p className="content">{pageContext.publicationDate}</p>
            {documentToReactComponents(pageContext.content.json)}

            <figure>
          <img src={pageContext.image.file.url} />
                        
        </figure> */}


        <div className="content">
                <h1>{pageContext.title}</h1>
         
                {
                    pageContext.image && (
                      <img src={pageContext.image.file.url} />

                    )
                }
                {/*JSON.stringify(props.data.contentfulBlogPost.body.json)*/}
                {documentToReactComponents(pageContext.content.json)}
            </div>
            <span className="meta">
                    Post on {pageContext.publicationDate}
                </span>
    </div>
    </Layout>

  )
}



export const query = graphql`
  query {
    allContentfulBlogPost(sort: {fields: publicationDate, order: DESC}, filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            title
            slug
            userName
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
`