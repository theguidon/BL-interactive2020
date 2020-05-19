import React from "react"
import { Wrapper } from "./styles"
import JournalistBox from "../JournalistBox"

const Journalists = ({ journalists }) => (
  <Wrapper>
    {journalists.map((journalist, index) => (
      <JournalistBox
        name={journalist.name}
        date={journalist.date}
        place={journalist.place}
        description={journalist.description}
      />
    ))}
  </Wrapper>
)

export default Journalists
