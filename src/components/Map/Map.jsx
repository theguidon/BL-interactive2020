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
  MobileSpan,
} from "./styles"

function Map({ data }) {
  return (
    <Wrapper>
      <MapWrapper>
        <img src={data.map} style={{ width: 100 + "%" }} alt="map" />
      </MapWrapper>
      <TextWrapper>
        <Name>{data.name}</Name>
        <Year>({data.year})</Year>
        <Desc dangerouslySetInnerHTML={{ __html: data.description }} />

        <br></br>
        <br></br>
        <Deaths>
          <Text>
            <Span>NUMBER OF DEATHS:</Span>
          </Text>
          <MobileSpan>Deaths</MobileSpan>
          <Number> {data.number} </Number>
        </Deaths>
      </TextWrapper>
    </Wrapper>
  )
}

export default Map
