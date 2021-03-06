import React from "react"
import { Item, Event, Link, Name, Desc } from "./styles"

const JournalistBox = ({ event, link, name, date, place, description }) => (
  <Item display={name === ""}>
    <Name>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {name}{" "}
      </Link>
      <Event>{event}</Event>
    </Name>
    <Desc>
      {date}
      <br></br>
      {place}
      <br></br>
      <br></br>
    </Desc>
    <Desc dangerouslySetInnerHTML={{ __html: description }} />
  </Item>
)

export default JournalistBox
