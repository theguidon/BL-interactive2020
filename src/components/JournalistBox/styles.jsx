import styled from "styled-components"

export const Item = styled.a`
  margin: 20px 30px;
  flex: 0 0 26%;
  @media only screen and (max-width: 767px) {
    flex: 0 0 80%;
  }
`

export const Name = styled.div`
  color: #de8484;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
`

export const Link = styled.a`
  color: #de8484;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  text-decoration: none;
  cursor: pointer;
  color: #de8484;

  &:hover {
    color: #C23A3A;
  }
`

export const Desc = styled.div`
  line-height: 22px;
  font-size: 16px;
  color: #CCCCCC;
`

export const Event = styled.div`
  color: #8E0000;
  font-weight: 900;
  font-family: Open Sans;
  font-style: normal;
  font-size: 18px;
`