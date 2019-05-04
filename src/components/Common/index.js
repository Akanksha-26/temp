import React from "react";
import g from "glamorous";
import { rhythm } from "../../utils/typography";
import { css } from "glamor";
import Link from "gatsby-link";
import './index.css'
import {TagButton} from '../TagButton/index'

export const BlogListTitle = ({slug, title, date, subTitle, tags}) => (
    <div className="wrapper">
        <div className="card card-1">
            <Link
                to={slug}
                css={{ textDecoration: `none`, color: `inherit` }}
            >
                <BlogListTitleHeader title={title} date={date}/>
            </Link>
            <g.P padding={'10px'}>
                {subTitle}
            </g.P>
            <div className="button-container">
                {tags.map((tag,index) =>
                    <TagButton key={index} text={tag} link={tag}/>
                )}
            </div>
        </div>
    </div>
);

export const BlogHeaderMenuItem = ({text, path}) => {
    var className = "menu-item ";
    if(text === 'About'){
        className += "about-menu-item"
    }
    if(text === 'Contact'){
        className += "contact-menu-item"
    }
    return(
        <Link to={path} className={className}>
            {text}
        </Link>
    )
}

export const BlogHeaderTitle = ({title}) => (
    <g.H3
        display={`inline-block`}
        fontStyle={`normal`}
        color={`white`}
    >
        {title}
    </g.H3>
)

const BlogListTitleHeader = ({title, date}) => (
    <g.H3 
        marginBottom={rhythm(1 / 4)}
        padding={'10px'}
    >
        {title}{" "}<br/>
        <BlogListTitleDate date={date}/>
    </g.H3>
);

const BlogListTitleDate = ({date}) => (
    <g.Span color="#BBB">— {date} </g.Span>
);