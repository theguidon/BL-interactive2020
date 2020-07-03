import React from "react"
import { Link } from "gatsby"
import { Foo, Container, FooDetails } from "./styles"
import logo from "../../images/logo.svg"

const Footer = () => (
  <Foo>
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <FooDetails>
        <p>ABOUT THE INTERACTIVE</p>
        <p>A year-long project by the Beyond Loyola Staff for AY 2019-2020</p>
        <p>
          Interactive by Bea Martin, Bea Sison, Cobbie Quintos, Giddy Garcia,
          and Harvey Sison
        </p>
      </FooDetails>
    </Container>
  </Foo>
)

export default Footer
