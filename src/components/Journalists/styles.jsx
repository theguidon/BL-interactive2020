import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: flex-start;
  padding: 40px 0;
`

export const Pagination = styled.div`
  display: flex;
  flex-wrap: row wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
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
  background-color: #797979;
  margin: 0 5px;
`

export const Prev = styled.div`
  align-self: center;
`

export const Next = styled.div`
  align-self: center;
`