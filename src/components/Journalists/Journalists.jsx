import React from "react"
import { Wrapper, Pagination, Prev, PagesWrapper, Page, Next } from "./styles"
import JournalistBox from "../JournalistBox"
import "./pagiStyles.scss"

const Journalists = ({ journalists }) => (
  <Wrapper>
    {journalists.map((journalist, index) => (
      <JournalistBox
        event={journalist.event}
        name={journalist.name}
        date={journalist.date}
        place={journalist.place}
        description={journalist.description}
      />
    ))}
    <Pagination>
      <Prev> &#10094; </Prev>
      <PagesWrapper>
        <Page /> 
        <Page />
        <Page />
      </PagesWrapper>

      <Next> &#10095; </Next>

    </Pagination>
  </Wrapper>

  
)

export default Journalists