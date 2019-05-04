import React from 'react';
import './index.css';
import './index.scss';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import kebabCase from "lodash/kebabCase";

const getClass = () => {
    var defualtClass = "button center"
    var colorClass = [" -green", " -blue", " -salmon", " -sun", " -alge"];
    var rand = colorClass[Math.floor(Math.random() * colorClass.length)];
    var returnClass = defualtClass + rand
    return returnClass;
}

export const TagButton = ({text, link, tagStyle}) => (
    <OutboundLink className="button-link" href={`/tags/${kebabCase(link)}/`}>
        <div className={getClass()} style={tagStyle}>{text}</div>
    </OutboundLink>
)