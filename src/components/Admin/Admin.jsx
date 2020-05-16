import React, { useState } from "react"
import AquinoImg from "../../images/Aquino.jpg"
import RamosImg from "../../images/Ramos.jpg"
import EstradaImg from "../../images/Estrada.jpg"
import ArroyoImg from "../../images/Arroyo.jpg"
import AquinoIIIImg from "../../images/AquinoIII.jpg"
import DuterteImg from "../../images/Duterte.jpg"
import "./style.scss"

const data = [
  {
    name: "Corazon Aquino",
    year: "1986-1992",
    desc:
      "The Center for Media Freedom and Responsibility estimates that `at least 21 journalists were killed during Corazon Aquino's administration.",
  },
  {
    name: "Fidel Ramos",
    year: "1992-1998",
    desc:
      "The Committee to Protect Journalists database lists six journalists (CPJ) killed under the Ramos administration, but CMFR data reveals at least 11 were killed. The CPJ noted that at the time of the last journalist killed under Fidel Ramos, there had been a total of 33 journalist deaths since Ferdinand Marcos' ourster.",
  },
  {
    name: "Joseph Estrada",
    year: "1998-2001",
    desc:
      "According to the Center for Media Freedom and Responsibility, Estrada's brief tenure as president saw 6 journalist murders. The CPJ, however, lists only 4 deaths.",
  },
  {
    name: "Gloria Macapagal Arroyo",
    year: "2001-2010",
    desc: `The Arroyo administration saw the highest number of journalist deaths in a single day as a result of the infamour Ampatuan massacre, more popularly known as the "Maguindanao massacre." The Center for Media Freedom and Responsibility claims that there were 83 journalist murders during Arroyo\'s 9-year presidency`,
  },
  {
    name: "Benigno Aquino III",
    year: "2010-2016",
    desc:
      "Even though the death toll dropped by more than half, the second Aquino administration still posted the second-highest number of media-related killings since Marcos' ouster with at least 31 slain individuals—though data collected shows 34—based on the Center for Media Freedom and Responsibility's estimates.",
  },
  {
    name: "Rodrigo Duterte",
    year: "2016 to present",
    desc:
      "A feature of the Duterte presidency has been the crackdown on dissent. With two more years to go in his term, data from several sources reveal at least 14 journalists have been killed under Duterte.",
  },
]
function Admin() {
  const [president, setPresident] = useState(0)

  function Corazon() {
    return setPresident(0)
  }

  function Ramos() {
    return setPresident(1)
  }

  function Estrada() {
    return setPresident(2)
  }
  function Arroyo() {
    return setPresident(3)
  }
  function Aquino() {
    return setPresident(4)
  }
  function Duterte() {
    return setPresident(5)
  }

  return (
    <section>
      <div className="SliderWrapper">
        <div
          className={president === 0 ? "PresWrapper active" : "PresWrapper"}
          onClick={Corazon}
        >
          {" "}
          <div className="ImgWrapper">
            {" "}
            <img src={AquinoImg} alt="logo" style={{ width: 100 + "%" }} />{" "}
          </div>{" "}
          <span>Corazon Aquino</span> <div className="circle"> </div>{" "}
        </div>

        <div
          className={president === 1 ? "PresWrapper active" : "PresWrapper"}
          onClick={Ramos}
        >
          {" "}
          <div className="ImgWrapper">
            {" "}
            <img src={RamosImg} alt="logo" style={{ width: 100 + "%" }} />{" "}
          </div>{" "}
          <span>Fidel Ramos</span> <div className="circle"></div>{" "}
        </div>

        <div
          className={president === 2 ? "PresWrapper active" : "PresWrapper"}
          onClick={Estrada}
        >
          {" "}
          <div className="ImgWrapper">
            {" "}
            <img
              src={EstradaImg}
              alt="logo"
              style={{ width: 100 + "%" }}
            />{" "}
          </div>{" "}
          <span>Joseph Estrada</span> <div className="circle"></div>{" "}
        </div>

        <div
          className={president === 3 ? "PresWrapper active" : "PresWrapper"}
          onClick={Arroyo}
        >
          {" "}
          <div className="ImgWrapper">
            {" "}
            <img src={ArroyoImg} alt="logo" style={{ width: 100 + "%" }} />{" "}
          </div>{" "}
          <span>Gloria Macapagal Arroyo</span> <div className="circle"></div>{" "}
        </div>

        <div
          className={president === 4 ? "PresWrapper active" : "PresWrapper"}
          onClick={Aquino}
        >
          {" "}
          <div className="ImgWrapper">
            {" "}
            <img
              src={AquinoIIIImg}
              alt="logo"
              style={{ width: 100 + "%" }}
            />{" "}
          </div>{" "}
          <span>Benigno Aquino III</span> <div className="circle"></div>{" "}
        </div>

        <div
          className={president === 5 ? "PresWrapper active" : "PresWrapper"}
          onClick={Duterte}
        >
          {" "}
          <div className="ImgWrapper">
            {" "}
            <img
              src={DuterteImg}
              alt="logo"
              style={{ width: 100 + "%" }}
            />{" "}
          </div>{" "}
          <span>Rodrigo Duterte</span> <div className="circle"></div>{" "}
        </div>
      </div>
      <div className="Line"></div>

      {data.map((datum, index) => {
        if (index === president) {
          const { name, year, desc } = datum
          return (
            <div className="Wrapper">
              <div className="Header">
                <div className="Name">{name}</div>
                <div className="Year">({year})</div>
              </div>
              <div className="desc">{desc}</div>
            </div>
          )
        }
      })}
    </section>
  )
}

export default Admin
