import React from 'react'
import styled from '@emotion/styled'

const IconStyle = styled.img`
  display: inline;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 10px;
  background-color: var(--var-background-color);
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
`;

export function Icon( { src } ) {

  return (
    <IconStyle src={ src } />
  )
}
