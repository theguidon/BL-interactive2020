import React from "react"
import {
  Container,
  Card,
  Title,
  Description,
  ButtonWrapper,
  ViewButton,
  ExitButton,
} from "./styles"

const ContentWarning = ({ toggleNext }) => {
  return (
    <Container>
      <Card>
        <Title>Content warning</Title>
        <Description>
          This entire interactive discusses multiple cases of murder. Viewer
          discretion is advised. Do you want to proceed?
        </Description>
        <ButtonWrapper>
          <a href="https://interactive.theguidon.com/">
            <ExitButton>Exit</ExitButton>
          </a>
          <ViewButton onClick={toggleNext}>View Interactive</ViewButton>
        </ButtonWrapper>
      </Card>
    </Container>
  )
}

export default ContentWarning
