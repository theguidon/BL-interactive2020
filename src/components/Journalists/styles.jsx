import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 150px;

  @media (max-width: 768px) {
    margin: 0 60px;
  }

  @media (max-width: 540px) {
    margin: 0 30px;
  }

  @media (max-width: 375px) {
    margin: 0 16px;
  }
`

export const WebWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 40px 0;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  display: none;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: 768px) {
    display: flex;
    padding 0;
  }
`

export const Pagination = styled.div`
  flex-wrap: row wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 60px;
  }
`
export const PagesWrapper = styled.div`
  display: flex;
  flex-wrap: row wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`

export const Page = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? "white" : "#797979")};
  margin: 0 5px;
`

export const Prev = styled.div`
  align-self: center;
`

export const Next = styled.div`
  align-self: center;
`
