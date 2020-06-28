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
        <p>Familiarity with how the Devops, Front End, Back End all come together. Able to adapt at bridging the gap between visual elements and server-side infrastructure while defining application presentation and functionality.</p>
        <p>Possessing excellent communication and interpersonal skills to work effectively with immediate team members and key stakeholders. Feel free to connect with me to learn more about how I can add value to your organization.</p>
        <p>Proudly lead a team to successfully with live streaming application on Amazon, iOS, Android, Web Application in a single maintainable code base and as well held many presentations that have increased my colleagues knowledge and productivity.</p>
        <p>Worked on high traffic websites which includes NFL.com, FOX.com, Sonicbox.com</p>
      </div>
    </section>
  </Layout>
)

export default AboutPage
