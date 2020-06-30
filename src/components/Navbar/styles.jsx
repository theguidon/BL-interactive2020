import styled from "styled-components"

export const Navigation = styled.nav`
  background: #242423;
  border-bottom: 2px solid #797979;
  padding: 16px 0 8px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  width: 90%;
  margin: auto;
`

export const Icon = styled.a`
  float: right;
  margin-left: 16px;
  margin-top: -28px;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: -5px;
  }
`
