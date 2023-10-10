import React from "react"
import './about.css';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about-page">
      <div className="about-header">
        <h1>about</h1>
        <h2>who am I?</h2>
      </div>
      <div className="about-section">
        <p>My name is Tony Tai Nguyen, I reside in Los Angeles, California.</p>
        <p>I'm a full stack software engineer and I specialize in building web or mobile applications. My GitHub <a href="https://github.com/codetony25">here</a></p>
        <p>Have questions? Contact me at me@codetony.com or visit my <a href="www.linkedin.com/in/tony-nguyen-87b19585" target="_blank">LinkedIn</a></p>
      </div>
    </section>
  </Layout>
)

export default AboutPage
