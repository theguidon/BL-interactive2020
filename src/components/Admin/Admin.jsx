import React, { useState } from "react"
import AquinoImg from "../../images/Aquino.svg"
import RamosImg from "../../images/Ramos.svg"
import EstradaImg from "../../images/Estrada.svg"
import ArroyoImg from "../../images/Arroyo.svg"
import AquinoIIIImg from "../../images/AquinoIII.svg"
import DuterteImg from "../../images/Duterte.svg"
import "./style.scss"

function Admin({
  data,
  president,
  setPresident,
  Corazon,
  Ramos,
  Estrada,
  Arroyo,
  Aquino,
  Duterte,
}) {
  return (
    <section>
      <div className="guide">
        Click on each president to know the names of the journalists who died
        under each administration.
      </div>
      {/* change dots' to 'arrows' on mobile */}

      <div className="adminWrapper">
      <div className="sliderWrapper">
        <div
          className={president === 0 ? "PresWrapper active" : "PresWrapper"}
          onClick={Corazon}
        >
          <div className="ImgWrapper">
            <img src={AquinoImg} alt="Corazon Aquino" />
          </div>
          <span>Corazon<br></br>Aquino</span> 
          <div className="circle"></div>
        </div>

        <div
          className={president === 1 ? "PresWrapper active" : "PresWrapper"}
          onClick={Ramos}
        >
          <div className="ImgWrapper">
            <img src={RamosImg} alt="Fidel Ramos" />
          </div>
          <span>Fidel<br></br>Ramos</span> 
          <div className="circle"></div>
        </div>

        <div
          className={president === 2 ? "PresWrapper active" : "PresWrapper"}
          onClick={Estrada}
        >
          <div className="ImgWrapper">
            <img src={EstradaImg} alt="Joseph Estrada" />
          </div>
          <span>Joseph<br></br>Estrada</span> 
          <div className="circle"></div>
        </div>

        <div
          className={president === 3 ? "PresWrapper active" : "PresWrapper"}
          onClick={Arroyo}
        >
          <div className="ImgWrapper">
            <img src={ArroyoImg} alt="Gloria Macapagal Arroyo" />
          </div>
          <span>Gloria Macapagal<br></br>Arroyo</span> 
          <div className="circle"></div>
        </div>

        <div
          className={president === 4 ? "PresWrapper active" : "PresWrapper"}
          onClick={Aquino}
        >
          <div className="ImgWrapper">
            <img src={AquinoIIIImg} alt="Benigno Aquino III" />
          </div>
          <span>Benigno <br></br>Aquino III</span> 
          <div className="circle"></div>
        </div>

        <div
          className={president === 5 ? "PresWrapper active" : "PresWrapper"}
          onClick={Duterte}
        >
          <div className="ImgWrapper">
            <img src={DuterteImg} alt="Rodrigo Duterte" />
          </div>
          <span>Rodrigo<br></br>Duterte</span> 
          <div className="circle"></div>
        </div>
      </div>
        <div className="Line"></div>
      </div>

      {data.map((datum, index) => {
        if (index === president) {
          const { image, name } = datum
          return (
            <div className="mobileWrapper">
              <div class="controls">
                <div
                  class="prev"
                  onClick={() => {
                    president === 0
                      ? setPresident(president)
                      : setPresident(president - 1)
                  }}
                  style={
                    president === 0 ? { display: "none" } : { display: "block" }
                  }
                >
                  {" "}
                  &#10094;{" "}
                </div>

                <div
                  class="next"
                  onClick={() => {
                    president === 5
                      ? setPresident(president)
                      : setPresident(president + 1)
                  }}
                  style={
                    president === 5 ? { display: "none" } : { display: "block" }
                  }
                >
                  {" "}
                  &#10095;{" "}
                </div>
              </div>

              <div className="mobilePres active">
                <div className="mobileImg">
                  <img src={image} alt={name} />
                </div>
                <div className="mobileName">{name}</div>
              </div>
            </div>
          )
        }
      })}

      {data.map((datum, index) => {
        if (index === president) {
          const { name, year, desc } = datum
          return (
            <div className="Wrapper">
              <div className="Header">
                <div className="Name">{name}</div>
                <div className="Year">({year})</div>
              </div>
              <div className="Desc">{desc}</div>
            </div>
          )
        }
      })}
    </section>
  )
}

export default Admin
