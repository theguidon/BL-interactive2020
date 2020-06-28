import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;

  @media only screen and (max-width: 768px) {
    height: 28vh;
  }
`


export const ImageWeb = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ImageMobile = styled.img`
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`