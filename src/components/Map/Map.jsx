import React from 'react'
import { Wrapper, MapWrapper, TextWrapper, Name, Year, Desc, Deaths, Text, Span, Number } from "./styles"
import mapImg from "../../images/map.jpg"


function Map() {
  return (
    <Wrapper>
      <MapWrapper>
        <img src={mapImg} style={{ width: 100 + "%" }} />
      </MapWrapper>
      <TextWrapper>
        <Name>Admin</Name>
        <Year>()</Year>
        <Desc>
          Estrada was described by Reporters Without Borders as “less tolerant” of the media because he allegedly put pressure on news organizations that were critical of his administration. According to the Center for Media Freedom and Responsibility, Estrada’s brief tenure as president saw at least six journalist murders. Out of the six, only four have been named, based on the Committee to Protect Journalists’ (CPJ) data.
          <br></br>
          <br></br>
        </Desc>
        <Deaths>
          <Text>
            <Span>NUMBER OF </Span>DEATHS
          </Text>
          <Number> 4 </Number>
        </Deaths>
      </TextWrapper>
    </Wrapper>
  )
}

export default Map
