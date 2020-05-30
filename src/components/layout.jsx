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
import "../stylesheets/main.scss"

const Main = styled.main`
  min-height: calc(100vh - 57px);
  width: 90%;
  margin: 0 auto;
  padding: 90px 0;
  position: relative;

  @media (max-width: 540px) {
    width: ${props => (props.next ? "80%" : "auto")};
    height: auto;
    padding: 90px 0 0 0;
  }
`

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
      <Main next={next}>
        <Fragment>{children}</Fragment>
      </Main>
      {next ? <Footer /> : null}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
