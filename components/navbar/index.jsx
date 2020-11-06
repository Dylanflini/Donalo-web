import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BranName, Icon, Nav, NavContainer, NavItem } from './styles'
import styled from '@emotion/styled'
import { closeSession, getTokenSession } from '../../hooks/getTokenSession'
import Button from '../button'

const CircleIcon = styled.img`
  width: 2rem;
  border-radius: 50%;
`

const Name = styled.div`
  font-size: .8rem;
  margin-right: 1rem;
`

const UserContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`

function ProfileUser( { user } ) {

  // getTokenSession.photoURL

  console.log( user.displayName )
  console.log( user.photoURL )

  return (
    <div>
      {
        user ?
          <UserContainer>
            <Name>{ user.displayName }</Name>
            <CircleIcon src={ user.photoURL } />
            {/* <img src='/power.svg' onClick={ closeSession } >Cerrar sesión</img> */ }
          </UserContainer>
          : null
      }
    </div>
  )

}

// const getTokenSession = false; 


const Div = styled.div`
  user-select: none;
`

function NavBar( { user } ) {

  const [x, setX] = useState( false )

  useEffect( () => {
    setX( getTokenSession() )
    console.log( x )
  } )

  return (
    <Nav>
      <BranName>
        <Link href='/' >
          <Icon src='/donalo_icon.svg' />
        </Link>
        <Div>
          Dónalo
        </Div>
      </BranName>
      <NavContainer>
        <NavItem>
          {
            user ? <ProfileUser user={ user } /> : <Link href='/loginUser' >Login</Link>
          }

        </NavItem>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
