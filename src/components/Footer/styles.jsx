import styled from "styled-components"

export const Foo = styled.footer`
  background: #1e1e1e;
  padding: 60px 0;
  position: relative;

  @media (max-width: 540px) {
    padding: 30px 0;
  }
`

export const Container = styled.div`
  width: 90%;
  margin: auto;

  img {
    height: 30px;
  }
`

export const FooDetails = styled.div`
  margin-top: 45px;

  font-family: Tiempos Text, serif;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
  }
`
