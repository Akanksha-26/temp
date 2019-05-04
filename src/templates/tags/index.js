import React from "react";
import PropTypes from "prop-types";
// Components
import Link from "gatsby-link";
import './index.css'

const Tags = ({ pathContext, data }) => {
    const { tag } = pathContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`;
    
    return (
        <div className="tags-container">
            <h1>{tagHeader}</h1>
            <div className="tags-list">
                <ul>
                    {edges.map(({ node }) => {
                        const { path, title } = node.frontmatter;
                        return (
                            <li key={path}>
                                <Link to={path}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/*
            This links to a page that does not yet exist.
            We'll come back to it!
            */}
            <Link className="button all-tags-btn center -alge" to="/tags">All tags</Link>
        </div>
    );
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;