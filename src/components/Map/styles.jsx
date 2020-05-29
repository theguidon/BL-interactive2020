import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    flex-flow: column wrap;
    margin: 0;
    padding: 0;
  }
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 60px 0 100px 0;
  flex: 1 0 50%;
`

export const MapWrapper = styled.div`
  height: 895px;
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
  `

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  width: 40%;
  flex-flow: column wrap;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

export const Name = styled.span`
  color: #C23A3A;
  font-family: TiempoBold, sans-serif;
  font-weight: 900;
  font-size: 28px;
  line-height: 34px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Year = styled.span`
  color: #8E0000;
  font-family: Tiempo, sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Desc = styled.p`
  font-size: 18px;
  line-height: 27px;
`

export const Deaths = styled.div`
  display: flex;
  flex-flow: column;
  @media only screen and (max-width: 768px) {
    top: -300px;
    position: absolute;
    flex-flow: column-reverse;
  }
`
export const Text = styled.div`
  color: #797979;
  fontWeight: 900;
  letter-spacing: 0.08em;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.04em;
  }
`
export const Span = styled.p`
@media only screen and (max-width: 768px) {
    display: none;
  }
`
export const Number = styled.span`
  color: #C23A3A;
  font-size: 72px;
  font-weight: 900;
  line-height: 98px;
  letter-spacing: 0.04em;
  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
  }
`