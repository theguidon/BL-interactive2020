import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 540px) {
    align-items: flex-end;
  }
`

export const Card = styled.div`
  background: #2e2e2e;
  border-radius: 2px;
  padding: 24px 45px;
  max-width: 600px;

  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 16px 30px;
  }

  @media (max-width: 540px) {
    padding: 16px;
    position: absolute;
    bottom: 0;
  }
`

export const Title = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 8px;
  color: #c23a3a;

  @media (max-width: 540px) {
    text-align: left;
  }
`

export const Description = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 540px) {
    text-align: left;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 540px) {
    justify-content: flex-end;
  }

  button {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 8px 16px;
  }
`

export const ViewButton = styled.button`
  margin: 0 16px;
  background: #c23a3a;
  border-radius: 4px;
  border: 1px solid #c23a3a;

  @media (max-width: 540px) {
    margin: 0 8px 0 0;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    color: #c23a3a;
  }
`

export const ExitButton = styled.button`
  margin: 0 16px;
  background: #797979;
  border-radius: 4px;
  border: 1px solid #797979;

  @media (max-width: 540px) {
    margin: 0 8px 0 0;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    color: #797979;
  }
`
