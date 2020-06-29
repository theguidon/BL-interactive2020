import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 100px 96px 100px;

  @media only screen and (max-width: 768px) {
    height: 28vh;
    margin: 0 60px;
  }

  @media (max-width: 540px) {
    margin: 0 30px;
  }

  @media (max-width: 375px) {
    margin: 0 16px;
  }
`

export const ImageWeb = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const ImageMobile = styled.img`
  display: none;
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 30px;
  }
`
