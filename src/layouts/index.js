import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import '../static/font-awesome-4.7.0/css/font-awesome.css'

import Header from '../components/Header/index';

export default ({ data, children }) => {
  return (
    <div style={{margin:"1em"}}>
      <Header data={data}/>
      {children()}
    </div>
  )
};

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`