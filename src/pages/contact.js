import React from "react";
import './contact.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const fbProfileLink = "https://www.facebook.com/dhruv.datt";
const githubProfileLink = "https://github.com/dhruv004";
const linkedInProfileLink = "https://www.linkedin.com/in/dhruvdatt/";
const twitterProfileLink = "https://twitter.com/ddatt04";
const stackOverflowProfileLink = "https://stackoverflow.com/users/6002933/dhrdatt?tab=profile";

export default ({}) => (
    <div className="contact-app-container">
        <div style={{"textAlign":"center"}}>
            <h2>Hit me up!</h2>
        </div>
        <div>
            <div className="contact-container border-bottom">
                <OutboundLink className="fa contact-app border-right fa-facebook-square fb"
                    href={fbProfileLink} target="_blank"></OutboundLink>
                <OutboundLink className="fa contact-app border-right fa-twitter-square twitter" 
                    href={twitterProfileLink} target="_blank"></OutboundLink>
                <OutboundLink className="fa contact-app stackO" 
                    href={stackOverflowProfileLink} target="_blank"></OutboundLink>
            </div>
            <div className="contact-container">
                <OutboundLink className="fa contact-app border-right fa-linkedin-square linkedIn" 
                    href={linkedInProfileLink} target="_blank"></OutboundLink>
                <OutboundLink className="fa contact-app fa-github-square github"
                    href={githubProfileLink} target="_blank"></OutboundLink>
            </div>
        </div>
    </div>
)