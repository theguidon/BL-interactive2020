import React from "react"
import styles from "./ContentWarning.module.scss"

const ContentWarning = ({ toggleNext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.title}>Content warning</h3>
        <p className={styles.description}>
          This entire interactive discusses multiple cases of murder. Viewer
          discretion is advised. Do you want to proceed?
        </p>
        <div className={styles.wrapper}>
          <a href="https://interactive.theguidon.com/">
            <button className={styles.exitButton}>Exit</button>
          </a>
          <button className={styles.viewButton} onClick={toggleNext}>
            View Interactive
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentWarning
