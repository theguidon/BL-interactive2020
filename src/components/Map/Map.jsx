import React from "react"
import styles from "./Map.module.scss"

function Map({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.MapWrapper}>
        <img
          src={data.map}
          style={{ width: 100 + "%" }}
          alt={`${data.name}-map`}
        />
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.name}>{data.name}</span>
        <span className={styles.year}>({data.year})</span>
        <p className={styles.desc}>
          {data.description}
          <br></br>
          <br></br>
        </p>
        <div className={styles.deaths}>
          <div className={styles.text}>
            <p className={styles.span}>NUMBER OF DEATHS</p>
          </div>
          <span className={styles.number}> {data.number} </span>
        </div>
      </div>
    </div>
  )
}

export default Map
