/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SEO from "./seo"
import { useStaticQuery, graphql } from "gatsby"

import "normalize.css"
import "../stylesheets/main.scss"

const Layout = ({ children, next }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata
  return (
    <>
      <Navbar />
      <SEO title={title} description={description} />
      <main>
        <Fragment>{children}</Fragment>
      </main>
      {next ? <Footer /> : null}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
