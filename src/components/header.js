import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header>
    <div className="inner-header">
      <a href="http://www.theguidon.com/">
        <Image />
      </a>
    </div>
    <h1></h1>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
