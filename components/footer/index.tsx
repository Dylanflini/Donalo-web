import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
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


// <!--?xml version="1.0" encoding="UTF-8"?-->
// <resources>
//   <color name="primaryColor">#43a047</color>
//   <color name="primaryLightColor">#76d275</color>
//   <color name="primaryDarkColor">#00701a</color>
//   <color name="primaryTextColor">#fafafa</color>
// </resources>