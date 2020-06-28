import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Footer from "../footer/footer"
import "./layout.css"
import "./normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"codetony.com"} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
