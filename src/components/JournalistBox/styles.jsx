import styled from "styled-components"

export const Item = styled.div`
  margin: 20px 30px;
  flex: 0 0 26%;
  @media only screen and (max-width: 767px) {
    flex: 0 0 80%;
    padding: 16px 0;
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
    color: #c23a3a;
  }
`

export const Desc = styled.div`
  line-height: 24px;
  font-size: 16px;
  color: #cccccc;
`

export const Event = styled.div`
  color: #8e0000;
  font-weight: 900;
  font-family: Open Sans;
  font-style: normal;
  font-size: 18px;
`
