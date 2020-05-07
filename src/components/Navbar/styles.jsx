import styled from "styled-components"

export const Navigation = styled.nav`
  background: #242423;
  border-bottom: 2px solid #797979;
  padding: 16px;
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
  }
`
