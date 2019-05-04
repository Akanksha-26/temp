import React from "react";
import {BlogListTitle} from '../components/Common/index'
import './index.css'

const IndexPage = ({ data }) => {
  return (
    <div>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      <div className="Bloglist-content">
        {data.allMarkdownRemark.edges.map(({ node }) =>
            <BlogListTitle 
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title} 
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              subTitle={node.frontmatter.subTitle} />
        )}
      </div>
    </div>
  )
}
export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subTitle
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`