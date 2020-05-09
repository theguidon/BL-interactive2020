import React from "react"
import { Item, Name, Desc } from "./styles"

const JournalistBox = ({ name, date, place, description }) => (
  <Item>
    <Name>{name}</Name>
    <Desc>
      {date}
      <br></br>
      {place}
      <br></br>
      <br></br>
      {description}
    </Desc>
  </Item>
)

export default JournalistBox
