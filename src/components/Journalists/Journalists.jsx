import React, { useState } from "react"
import {
  WebWrapper,
  MobileWrapper,
  Pagination,
  Prev,
  PagesWrapper,
  Page,
  Next,
} from "./styles"
import JournalistBox from "../JournalistBox"

const Journalists = ({ journalists }) => {
  const [page, setPage] = useState(1)

  const NextPage = () => {
    return setPage(page + 1)
  }

  const PrevPage = () => {
    return setPage(page - 1)
  }

  return (
    <div>
      <WebWrapper>
        {journalists.map((journalist, index) => (
          <JournalistBox
            event={journalist.event}
            link={journalist.link}
            name={journalist.name}
            date={journalist.date}
            place={journalist.place}
            description={journalist.description}
          />
        ))}
      </WebWrapper>
      <MobileWrapper>
        {journalists
          .slice(
            (journalists.length / 3) * (page - 1),
            (journalists.length / 3) * page
          )
          .map((journalist, index) => (
            <JournalistBox
              event={journalist.event}
              link={journalist.link}
              name={journalist.name}
              date={journalist.date}
              place={journalist.place}
              description={journalist.description}
            />
          ))}
        <Pagination>
          {page !== 1 ? <Prev onClick={PrevPage}> &#10094; </Prev> : null}
          <PagesWrapper>
            <Page onClick={() => setPage(1)} />
            <Page onClick={() => setPage(2)} />
            <Page onClick={() => setPage(3)} />
          </PagesWrapper>
          {page !== 3 ? <Next onClick={NextPage}> &#10095; </Next> : null}
        </Pagination>
      </MobileWrapper>
    </div>
  )
}

export default Journalists
