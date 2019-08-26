import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
