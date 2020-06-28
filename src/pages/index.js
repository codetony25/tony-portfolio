import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Work from "../components/work/work"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero />
    <Work />
  </Layout>
)

export default IndexPage
