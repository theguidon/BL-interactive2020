/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SEO from "./seo"
import { useStaticQuery, graphql } from "gatsby"

import "normalize.css"
import "../stylesheets/main.css"

const Main = styled.main`
  min-height: 100vh;
  width: 75%;
  margin: auto;
  padding: 90px 0;
`
const Layout = ({ children }) => {
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
      <Main>
        <Fragment>{children}</Fragment>
      </Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
