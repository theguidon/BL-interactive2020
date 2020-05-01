import React from "react"
import { Link } from "gatsby"
import { Foo, Container, FooDetails } from "./styles"
import logo from "../../images/logo.png"

const Footer = () => (
  <Foo>
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <FooDetails>
        <p>ABOUT THE INTERACTIVE</p>
        <p>An immersive journalism project by The GUIDON in 2020</p>
        <p>
          Interactive by Bea Martin, Bea Sison, Cobbie Quintos, Giddy Garcia,
          and Harvey Sison
        </p>
      </FooDetails>
    </Container>
  </Foo>
)

export default Footer
