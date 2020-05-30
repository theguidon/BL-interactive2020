import React from "react"
import { Item, Event, Name, Desc } from "./styles"

const JournalistBox = ({ event, link, name, date, place, description }) => (
  <Item>
    <Event>{event}</Event>
    <Name>
      <a href={link} target="_blank"
        rel="noopener noreferrer" style={{
          textDecoration: "none",
          cursor: "pointer",
          color: "#de8484"}}> 
          {name} </a>
    </Name>
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
