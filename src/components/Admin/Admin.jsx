import React, { useState } from 'react'
import AquinoImg from "../../images/Aquino.jpg"
import RamosImg from "../../images/Ramos.jpg"
import EstradaImg from "../../images/Estrada.jpg"
import ArroyoImg from "../../images/Arroyo.jpg"
import AquinoIIIImg from "../../images/AquinoIII.jpg"
import DuterteImg from "../../images/Duterte.jpg"
import "./style.scss"

function Admin() {
  const [name, setName] = useState('Corazon Aquino');
  const [year, setYear] = useState('1986-1992');
  const [desc, setDesc] = useState('The Center for Media Freedom and Responsibility estimates that `at least 21 journalists were killed during Corazon Aquino\'s administration.');

  function Corazon() {
    setName('Corazon Aquino');
    setYear('1986-1992');
    setDesc('The Center for Media Freedom and Responsibility estimates that `at least 21 journalists were killed during Corazon Aquino\'s administration.');
  }
  function Ramos() {
    setName('Fidel Ramos');
    setYear('1992-1998');
    setDesc('The Committee to Protect Journalists database lists six journalists (CPJ) killed under the Ramos administration, but CMFR data reveals at least 11 were killed. The CPJ noted that at the time of the last journalist killed under Fidel Ramos, there had been a total of 33 journalist deaths since Ferdinand Marcos\' ourster.');
  }
  function Estrada() {
    setName('Joseph Estrada');
    setYear('1998-2001');
    setDesc('According to the Center for Media Freedom and Responsibility, Estrada\'s brief tenure as president saw 6 journalist murders. The CPJ, however, lists only 4 deaths.');
  }
  function Arroyo() {
    setName('Gloria Macapagal Arroyo');
    setYear('2001-2010');
    setDesc('The Arroyo administration saw the highest number of journalist deaths in a single day as a result of the infamour Ampatuan massacre, more popularly known as the "Maguindanao massacre." The Center for Media Freedom and Responsibility claims that there were 83 journalist murders during Arroyo\'s 9-year presidency');
  }
  function Aquino() {
    setName('Benigno Aquino III');
    setYear('2010-2016');
    setDesc('Even though the death toll dropped by more than half, the second Aquino administration still posted the second-highest number of media-related killings since Marcos\' ouster with at least 31 slain individuals—though data collected shows 34—based on the Center for Media Freedom and Responsibility\'s estimates.');
  }
  function Duterte() {
    setName('Rodrigo Duterte');
    setYear('2016 to present');
    setDesc('A feature of the Duterte presidency has been the crackdown on dissent. With two more years to go in his term, data from several sources reveal at least 14 journalists have been killed under Duterte.');
  }

  var btns = document.getElementsByClassName("PresWrapper");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }


      this.className += " active";
    });
  }



  return (
    <>

      <div className="SliderWrapper">
        <div className="PresWrapper active" onClick={() => Corazon()}> <div className="ImgWrapper"> <img src={AquinoImg} alt="logo" style={{ width: 100 + '%' }} /> </div> Corazon Aquino <div className="circle"> </div> </div>
        
        <div className="PresWrapper" onClick={() => Ramos()}> <div className="ImgWrapper"> <img src={RamosImg} alt="logo" style={{ width: 100 + '%' }} /> </div> Fidel <br></br> Ramos <div className="circle"></div> </div>

        <div className="PresWrapper" onClick={() => Estrada()}> <div className="ImgWrapper"> <img src={EstradaImg} alt="logo" style={{ width: 100 + '%' }} /> </div> Joseph Estrada <div className="circle"></div> </div>

        <div className="PresWrapper" onClick={() => Arroyo()}> <div className="ImgWrapper"> <img src={ArroyoImg} alt="logo" style={{ width: 100 + '%' }} /> </div> Gloria Macapagal Arroyo <div className="circle"></div> </div>

        <div className="PresWrapper" onClick={() => Aquino()}> <div className="ImgWrapper"> <img src={AquinoIIIImg} alt="logo" style={{ width: 100 + '%' }} /> </div> Benigno Aquino III <div className="circle"></div> </div>

        <div className="PresWrapper" onClick={() => Duterte()}> <div className="ImgWrapper"> <img src={DuterteImg} alt="logo" style={{ width: 100 + '%' }} /> </div> Rodrigo Duterte <div className="circle"></div>  </div>
      </div>
      <div className="Line"></div>

      <div className="Wrapper">
        <div className="Header">
          <div className="Name">{name}</div>
          <div className="Year">({year})</div>
        </div>
        <div className="desc">{desc}</div>
      </div>
      </>
  );
}

export default Admin