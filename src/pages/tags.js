import React from "react";
// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import Helmet from "react-helmet";
import Link from "gatsby-link";
import {TagButton} from "../components/TagButton/index"

const listStyle={
  margin:"2em",
  height:"3em",
  width: "10em"
}

const TagsPage = ({
    data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
    <div>
      <h1>Tags</h1>
      <ul>
          {group.map(tag => (
            <TagButton key={tag.fieldValue} 
              tagStyle={listStyle}
              link={tag.fieldValue} 
              text={`${tag.fieldValue} (${tag.totalCount})`}/>
          ))}
      </ul>
    </div>
);

export default TagsPage;

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;