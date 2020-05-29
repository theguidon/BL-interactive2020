import React from "react"
import { Item, Event, Name, Desc } from "./styles"

const JournalistBox = ({ event, name, date, place, description }) => (
  <Item>
    <Event>{event}</Event>
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
