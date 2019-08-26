import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
