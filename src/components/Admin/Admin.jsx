import React, { useState } from 'react'
import { SliderWrapper, PresWrapper, ImgWrapper, Btn, Line, Wrapper, Header,  Name, Year, Desc } from "./styles"
import AquinoImg from "../../images/Aquino.jpg"
import RamosImg from "../../images/Ramos.jpg"
import EstradaImg from "../../images/Estrada.jpg"
import ArroyoImg from "../../images/Arroyo.jpg"
import AquinoIIIImg from "../../images/AquinoIII.jpg"
import DuterteImg from "../../images/Duterte.jpg"

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

  return (
    <>

      <SliderWrapper>
        <PresWrapper onClick={() => Corazon()}> <ImgWrapper> <img src={AquinoImg} alt="logo" style={{ width: 100 + '%' }} /> </ImgWrapper> Corazon <Btn /> </PresWrapper>
        <PresWrapper onClick={() => Ramos()}> <ImgWrapper> <img src={RamosImg} alt="logo" style={{ width: 100 + '%' }} /> </ImgWrapper> Fidel Ramos <Btn /> </PresWrapper>

        <PresWrapper onClick={() => Estrada()}> <ImgWrapper> <img src={EstradaImg} alt="logo" style={{ width: 100 + '%' }} /> </ImgWrapper> Joseph Estrada <Btn />  </PresWrapper>

        <PresWrapper onClick={() => Arroyo()}> <ImgWrapper> <img src={ArroyoImg} alt="logo" style={{ width: 100 + '%' }} /> </ImgWrapper> Arroyo <Btn /> </PresWrapper>

        <PresWrapper onClick={() => Aquino()}> <ImgWrapper> <img src={AquinoIIIImg} alt="logo" style={{ width: 100 + '%' }} /> </ImgWrapper> Aquino III <Btn /> </PresWrapper>

        <PresWrapper onClick={() => Duterte()}> <ImgWrapper> <img src={DuterteImg} alt="logo" style={{ width: 100 + '%' }} /> </ImgWrapper> Duterte <Btn />  </PresWrapper>
      </SliderWrapper>
      <Line />

      <Wrapper>
        <Header>
          <Name>{name}</Name>
          <Year>({year})</Year>
        </Header>
        <Desc>{desc}</Desc>
      </Wrapper>
      </>
  );
}

export default Admin