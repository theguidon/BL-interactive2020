import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./styles"

import graphImg from "../../images/graph.jpg"

const Graph = () => (
  <Wrapper>
    <img src={graphImg} alt="logo" style={{width: 100+'%'}} />
  </Wrapper>
)

export default Graph