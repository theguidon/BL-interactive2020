import React, { useState } from "react"
import {
  Wrapper,
  WebWrapper,
  MobileWrapper,
  Pagination,
  Prev,
  PagesWrapper,
  Page,
  Next,
} from "./styles"
import JournalistBox from "../JournalistBox"

const Journalists = ({ journalists, president }) => {
  const [page, setPage] = useState(1)

  const NextPage = () => {
    return setPage(page + 1)
  }

  const PrevPage = () => {
    return setPage(page - 1)
  }

  return (
    <div>
      <Wrapper>
        <WebWrapper>
          {journalists.map((journalist, index) => (
            <JournalistBox
              key={index}
              event={journalist.event}
              link={journalist.link}
              name={journalist.name}
              date={journalist.date}
              place={journalist.place}
              description={journalist.description}
            />
          ))}
        </WebWrapper>
      </Wrapper>
      <MobileWrapper>
        {president === 1 || president === 2 ?
        journalists.map((journalist, index) => (
          <JournalistBox
            key={index}
            event={journalist.event}
            link={journalist.link}
            name={journalist.name}
            date={journalist.date}
            place={journalist.place}
            description={journalist.description}
          />
        )) : 
        journalists
          .slice(
            (journalists.length / 3) * (page - 1),
            (journalists.length / 3) * page
          )
          .map((journalist, index) => (
            <JournalistBox
            key={index}
              event={journalist.event}
              link={journalist.link}
              name={journalist.name}
              date={journalist.date}
              place={journalist.place}
              description={journalist.description}
            />
          ))}
          {
            president === 1 || president === 2 ? null : 
            (
        <Pagination>
          {page !== 1 ? <Prev onClick={PrevPage}> &#10094; </Prev> : null}
          <PagesWrapper>
            <Page onClick={() => setPage(1)} />
            <Page onClick={() => setPage(2)} />
            <Page onClick={() => setPage(3)} />
          </PagesWrapper>
          {page !== 3 ? <Next onClick={NextPage}> &#10095; </Next> : null}
        </Pagination>
            )
          }
        
      </MobileWrapper>
    </div>
  )
}

export default Journalists
