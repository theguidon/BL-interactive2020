import React from "react"
import { Wrapper } from "./styles"

import graphImg from "../../images/graph.png"

const Graph = () => (
  <Wrapper>
    <img src={graphImg} alt="graph" style={{ width: 100 + "%" }} />
  </Wrapper>
)

export default Graph
