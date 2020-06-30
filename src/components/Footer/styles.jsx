import styled from "styled-components"

export const Foo = styled.footer`
  background: #1e1e1e;
  padding: 96px 100px 72px 100px;
  position: relative;

  @media (max-width: 540px) {
    padding: 60px 30px;
  }
`

export const Container = styled.div`
  width: 100%;

  img {
    height: 30px;
  }
`

export const FooDetails = styled.div`
  margin-top: 45px;

  font-family: Tiempo, serif;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
  }
`
