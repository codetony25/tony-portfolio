import React from "react"
import './contact.css';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact-page">
      <div className="contact-header">
        <h1>contact</h1>
        <h2>where you can reach me?</h2>
      </div>
      <div className="contact-section">
        <p>You can contact me at me@codetony.com</p>
      </div>
    </section>
  </Layout>
)

export default ContactPage
