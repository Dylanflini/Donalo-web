import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--var-primary-dark-color);
`
const P = styled.p`
  color: white;
  margin: 0;
  padding: 10px;
`

function Footer() {
  return (
    <Container>
      <P>© Dónalo - Hackathon {new Date().getFullYear()}</P>
    </Container>
  )
}

export default Footer