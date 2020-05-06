import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Admin from "../components/admin"
import Journalists from "../components/journalists"
import Graph from "../components/graph"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Admin />
    <Journalists />
    <Graph />

    <footer>


      <p>ABOUT THE INTERACTIVE</p>
      <p> An immersive journalism project by The GUIDON in 2020 </p>
      <p>Interactive by Bea Martin, Bea Sison, Cobbie Quintos, Giddy Garcia, and Harvey Sison </p>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Layout>
)

export default IndexPage