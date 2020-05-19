import React from "react"
import AquinoImg from "../../images/Aquino.jpg"
import RamosImg from "../../images/Ramos.jpg"
import EstradaImg from "../../images/Estrada.jpg"
import ArroyoImg from "../../images/Arroyo.jpg"
import AquinoIIIImg from "../../images/AquinoIII.jpg"
import DuterteImg from "../../images/Duterte.jpg"
import "./style.scss"

function Admin({
  data,
  president,
  Corazon,
  Ramos,
  Estrada,
  Arroyo,
  Aquino,
  Duterte,
}) {
  return (
    <section>
      <div className="SliderWrapper">
        <div
          className={president === 0 ? "PresWrapper active" : "PresWrapper"}
          onClick={Corazon}
        >
          <div className="ImgWrapper">
            <img src={AquinoImg} alt="Corazon Aquino" />
          </div>
          <span>Corazon Aquino</span> <div className="circle"> </div>
        </div>

        <div
          className={president === 1 ? "PresWrapper active" : "PresWrapper"}
          onClick={Ramos}
        >
          <div className="ImgWrapper">
            <img src={RamosImg} alt="Fidel Ramos" />
          </div>
          <span>Fidel Ramos</span> <div className="circle"></div>
        </div>

        <div
          className={president === 2 ? "PresWrapper active" : "PresWrapper"}
          onClick={Estrada}
        >
          <div className="ImgWrapper">
            <img src={EstradaImg} alt="Joseph Estrada" />
          </div>
          <span>Joseph Estrada</span> <div className="circle"></div>
        </div>

        <div
          className={president === 3 ? "PresWrapper active" : "PresWrapper"}
          onClick={Arroyo}
        >
          <div className="ImgWrapper">
            <img src={ArroyoImg} alt="Gloria Macapagal Arroyo" />
          </div>
          <span>Gloria Macapagal Arroyo</span> <div className="circle"></div>
        </div>

        <div
          className={president === 4 ? "PresWrapper active" : "PresWrapper"}
          onClick={Aquino}
        >
          <div className="ImgWrapper">
            <img src={AquinoIIIImg} alt="Benigno Aquino III" />
          </div>
          <span>Benigno Aquino III</span> <div className="circle"></div>
        </div>

        <div
          className={president === 5 ? "PresWrapper active" : "PresWrapper"}
          onClick={Duterte}
        >
          <div className="ImgWrapper">
            <img src={DuterteImg} alt="Rodrigo Duterte" />
          </div>
          <span>Rodrigo Duterte</span> <div className="circle"></div>
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
