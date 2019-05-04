import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import g from "glamorous"
import { css } from "glamor";
import { rhythm } from "../../utils/typography";
import './index.css';

import {BlogHeaderTitle, BlogHeaderMenuItem} from '../Common/index'
import HamBurgerMenu from '../HamBurgerMenu/index'

const Header = ({data}) => {
  return (
    <div>
      <Helmet
          title="Dhruv's Blog"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          style={[{
            "cssText": `
                body {
                    background: #fafafa;
                }
            `
        }]}
      />
      <div className="flex-header">
        <Link to={`/`} className="flex-header-title">
          <BlogHeaderTitle title={data.site.siteMetadata.title}/>
        </Link>
        <div className="flex-header-content">
          <div className="flex-header-content-search">
              {/* <input placeholder='Search...'/> */}
          </div>
          <HamBurgerMenu/>
          <div className="flex-header-content-menu">
            <BlogHeaderMenuItem text={'About'} path={`/about/`}/>
            <BlogHeaderMenuItem text={'Contact'} path={`/contact/`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
