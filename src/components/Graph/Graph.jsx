import React from "react"
import styles from "./Graph.module.scss"
// import GraphImg from "../../images/graph.png"

const Graph = () => (
  <div className={styles.wrapper}>
    {/* <GraphImg /> */}
    {/* <img src={GraphImg} alt="graph" style={{ width: 100 + "%" }} /> */}
    <img src="./graph.png" alt="graph" style={{ width: 100 + "%" }} />
  </div>
)

export default Graph
