import React, { useState } from "react"
import styles from "./Journalists.module.scss"
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
      <div className={styles.webWrapper}>
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
      </div>
      <div className={styles.mobileWrapper}>
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
        <div className={styles.pagination}>
          {page !== 1 ? (
            <div className={styles.buttonCenter} onClick={PrevPage}>
              {" "}
              &#10094;{" "}
            </div>
          ) : null}
          <div className={styles.pageWrapper}>
            <div className={styles.page} onClick={() => setPage(1)} />
            <div className={styles.page} onClick={() => setPage(2)} />
            <div className={styles.page} onClick={() => setPage(3)} />
          </div>
          {page !== 3 ? (
            <div className={styles.buttonCenter} onClick={NextPage}>
              {" "}
              &#10095;{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Journalists
