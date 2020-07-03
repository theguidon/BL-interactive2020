import React from "react"
import { Wrapper,ImageWeb, ImageMobile } from "./styles"

import graphWeb from "../../images/graph.png"
import graphMobile from "../../images/graphM.png"

const Graph = () => (
  <Wrapper>
    <ImageWeb src={graphWeb} alt="graph-web"/>
    <ImageMobile src={graphMobile} alt="graph-mobile"/>
  </Wrapper>
)

export default Graph
