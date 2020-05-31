import React from "react"
import styles from "./JournalistBox.module.scss"

const JournalistBox = ({ event, link, name, date, place, description }) => (
  <div className={styles.item}>
    <div className={styles.event}>{event}</div>
    <div className={styles.name}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          cursor: "pointer",
          color: "#de8484",
        }}
      >
        {name}{" "}
      </a>
    </div>
    <div className={styles.desc}>
      {date}
      <br></br>
      {place}
      <br></br>
      <br></br>
      {description}
    </div>
  </div>
)

export default JournalistBox
