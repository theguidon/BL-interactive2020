import React from "react"
import {
  Wrapper,
  MapWrapper,
  TextWrapper,
  Name,
  Year,
  Desc,
  Deaths,
  Text,
  Span,
  Number,
} from "./styles"

function Map({ data }) {
  return (
    <Wrapper>
      <MapWrapper>
        <img src={data.map} style={{ width: 100 + "%" }} />
      </MapWrapper>
      <TextWrapper>
        <Name>{data.name}</Name>
        <Year>({data.year})</Year>
        <Desc>
          {data.description}
          <br></br>
          <br></br>
        </Desc>
        <Deaths>
          <Text>
            <Span>NUMBER OF DEATHS</Span>
          </Text>
          <Number> {data.journalists.length} </Number>
        </Deaths>
      </TextWrapper>
    </Wrapper>
  )
}

export default Map
