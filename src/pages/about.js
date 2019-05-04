import React, { Component } from "react";
import { withPrefix } from 'gatsby-link'
import './about.css'

class AboutPage extends Component {
  render() {
    const {data} = this.props;
    var node = data.allFile.edges[0].node;
    var url = withPrefix(node.publicURL);
    return (
      <div>
        <div className='masthead'>
          <p className='masthead-intro'>Hi I'm</p>
          <h1 className='masthead-heading'>Dhruv!</h1>
        </div>
        <div className="avatar-header">
          <div className="avatar"></div>
          <a href={url}>
            <img className="avatar-img" src={ require('./download.png') }/>
          </a>
        </div>
        <div style={{textAlign:"center"}}>
          Developer. JavaScript Aficionado. UI/UX. 😎
        </div>
        <div className="about-me">
          I am a Javascript developer based in India with Computer Science background.
          I love turning complex problems into simple solutions.I believe in programming in a creative fashion.
          <br/>
          I have had the chance to work on a blend of FrontEnd and BackEnd JavaScript based technologies.
          It has helped me see the bigger picture and to relate the overall goals of the customer.
        </div>
        <div className="sill-free-time-container">
          <div className="skill-container">
            <h3>Skills</h3>
            {/* <p>HTML</p> */}
            <div className="skill-list">
              <span className="skills-span">JavaScript</span>
              <div className="skills">
                <div className="skills-score js"></div>
              </div>
            </div>

            <div className="skill-list">
              <span className="skills-span">ReactJs</span>
              <div className="skills">
                <div className="skills-score reactjs"></div>
              </div>
            </div>

            <div className="skill-list">
              <span className="skills-span">NodeJs</span>
              <div className="skills">
                <div className="skills-score node"></div>
              </div>
            </div>

            <div className="skill-list">
              <span className="skills-span">LoopbackJs</span>
              <div className="skills">
              <div className="skills-score loopback"></div>
              </div>
            </div>

            <div className="skill-list">
              <span className="skills-span">HTML</span>
              <div className="skills">
              <div className="skills-score html"></div>
              </div>
            </div>
            <div className="skill-list">
              <span className="skills-span">CSS</span>
              <div className="skills">
              <div className="skills-score css"></div>
              </div>
            </div>
          </div>
          <div className="free-time-container">
            <h3>In my free time I love</h3>
            <ul className="about-me-free-time-list">
              <li><span>taking long drives 🚗</span></li>
              <li><span>playing video games 🎮</span></li>
              <li><span>contributing to the open source community as much as I can 🤖</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;

export const query = graphql`
  query DownloadQuery {
    allFile (filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

//<div>
//  <h3>My Skills</h3>
//  <ul>
//    {/* backend */}
//    <li>NodeJs</li>
//    <li>Loopback</li>
//    
//    {/* frontend */}
//    <li>Reactjs</li>						
//    <li>Angular4</li>
//
//    {/* ci/cd */}
//    <li>Docker</li>
//    <li>TravidCI</li>
//
//    {/* css component frameworks */}
//    <li>MaterialUI</li>
//    <li>Angular Material2</li>
//  </ul>
//</div>