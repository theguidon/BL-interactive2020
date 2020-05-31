import React from "react"
import AquinoImg from "../../images/Aquino.png"
import RamosImg from "../../images/Ramos.png"
import EstradaImg from "../../images/Estrada.png"
import ArroyoImg from "../../images/Arroyo.png"
import AquinoIIIImg from "../../images/AquinoIII.png"
import DuterteImg from "../../images/Duterte.png"
import "./styles.scss"

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

      <div className="sliderWrapper">
        <div
          className={president === 0 ? "PresWrapper active" : "PresWrapper"}
          onClick={Corazon}
        >
          <div className="ImgWrapper">
            {/* <AquinoImg /> */}
            <img src={AquinoImg} alt="Corazon Aquino" />
          </div>
          <span>Corazon Aquino</span> <div className="circle"> </div>
        </div>

        <div
          className={president === 1 ? "PresWrapper active" : "PresWrapper"}
          onClick={Ramos}
        >
          <div className="ImgWrapper">
            {/* <RamosImg /> */}
            <img src={RamosImg} alt="Fidel Ramos" />
          </div>
          <span>Fidel Ramos</span> <div className="circle"></div>
        </div>

        <div
          className={president === 2 ? "PresWrapper active" : "PresWrapper"}
          onClick={Estrada}
        >
          <div className="ImgWrapper">
            {/* <EstradaImg /> */}
            <img src={EstradaImg} alt="Joseph Estrada" />
          </div>
          <span>Joseph Estrada</span> <div className="circle"></div>
        </div>

        <div
          className={president === 3 ? "PresWrapper active" : "PresWrapper"}
          onClick={Arroyo}
        >
          <div className="ImgWrapper">
            {/* <ArroyoImg /> */}
            <img src={ArroyoImg} alt="Gloria Macapagal Arroyo" />
          </div>
          <span>Gloria Macapagal Arroyo</span> <div className="circle"></div>
        </div>

        <div
          className={president === 4 ? "PresWrapper active" : "PresWrapper"}
          onClick={Aquino}
        >
          <div className="ImgWrapper">
            {/* <AquinoIIIImg /> */}
            <img src={AquinoIIIImg} alt="Benigno Aquino III" />
          </div>
          <span>Benigno Aquino III</span> <div className="circle"></div>
        </div>

        <div
          className={president === 5 ? "PresWrapper active" : "PresWrapper"}
          onClick={Duterte}
        >
          <div className="ImgWrapper">
            {/* <DuterteImg /> */}
            <img src={DuterteImg} alt="Rodrigo Duterte" />
          </div>
          <span>Rodrigo Duterte</span> <div className="circle"></div>
        </div>
      </div>
      <div className="Line"></div>

      {data.map((datum, index) => {
        if (index === president) {
          const { name } = datum
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
                  {president === 0 ? (
                    <img src={AquinoImg} alt={name} />
                  ) : president === 1 ? (
                    <img src={RamosImg} alt={name} />
                  ) : president === 2 ? (
                    <img src={EstradaImg} alt={name} />
                  ) : president === 3 ? (
                    <img src={ArroyoImg} alt={name} />
                  ) : president === 4 ? (
                    <img src={AquinoIIIImg} alt={name} />
                  ) : (
                    // <DuterteImg />
                    <img src={DuterteImg} alt={name} />
                  )}
                  {/* <img src={image} alt={name} /> */}
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
