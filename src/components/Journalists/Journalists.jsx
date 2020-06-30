import React from "react"
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
import Ampatuan from "../Ampatuan"

const Journalists = ({
  journalists,
  president,
  page,
  setPage,
  NextPage,
  PrevPage,
}) => (
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
        {president === 3 ? <Ampatuan /> : null}
      </WebWrapper>
    </Wrapper>
    <MobileWrapper>
      {president === 1 || president === 2
        ? journalists.map((journalist, index) => (
            <JournalistBox
              key={index}
              event={journalist.event}
              link={journalist.link}
              name={journalist.name}
              date={journalist.date}
              place={journalist.place}
              description={journalist.description}
            />
          ))
        : president === 0 || president === 5
        ? journalists
            .slice(
              (journalists.length / 3) * (page - 1),
              (journalists.length / 3) * page
            )
            .map((journalist, index) => {
              return (
                <JournalistBox
                  key={index}
                  event={journalist.event}
                  link={journalist.link}
                  name={journalist.name}
                  date={journalist.date}
                  place={journalist.place}
                  description={journalist.description}
                />
              )
            })
        : president === 4
        ? journalists
            .slice(
              (journalists.length / 6) * (page - 1),
              (journalists.length / 6) * page
            )
            .map((journalist, index) => {
              return (
                <JournalistBox
                  key={index}
                  event={journalist.event}
                  link={journalist.link}
                  name={journalist.name}
                  date={journalist.date}
                  place={journalist.place}
                  description={journalist.description}
                />
              )
            })
        : journalists
            .slice(
              (journalists.length / 5) * (page - 1),
              (journalists.length / 5) * page
            )
            .map((journalist, index) => {
              return (
                <JournalistBox
                  key={index}
                  event={journalist.event}
                  link={journalist.link}
                  name={journalist.name}
                  date={journalist.date}
                  place={journalist.place}
                  description={journalist.description}
                />
              )
            })}
      {president === 3 && page === 5 ? <Ampatuan /> : null}
      {president === 1 || president === 2 ? null : (
        <Pagination>
          {page !== 1 ? <Prev onClick={PrevPage}> &#10094; </Prev> : null}
          <PagesWrapper>
            <Page active={page === 1} onClick={() => setPage(1)} />
            <Page active={page === 2} onClick={() => setPage(2)} />
            <Page active={page === 3} onClick={() => setPage(3)} />
            {president === 4 || president === 3 ? (
              <Page active={page === 4} onClick={() => setPage(4)} />
            ) : null}
            {president === 4 || president === 3 ? (
              <Page active={page === 5} onClick={() => setPage(5)} />
            ) : null}
            {president === 4 ? (
              <Page active={page === 6} onClick={() => setPage(6)} />
            ) : null}
          </PagesWrapper>

          {(president === 0 && page !== 3) ||
          (president === 5 && page !== 3) ||
          (president === 3 && page !== 5) ||
          (president === 4 && page !== 6) ? (
            <Next onClick={NextPage}> &#10095; </Next>
          ) : null}
        </Pagination>
      )}
    </MobileWrapper>
  </div>
)

export default Journalists
