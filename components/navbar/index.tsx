import Link from 'next/link'
import React from 'react'
import { BranName, Icon, Nav, NavContainer, NavItem } from './styles'

function NavBar() {
  return (
    <Nav>
      <BranName>
        <Link href='/' >
          <Icon src='/donalo_icon.svg' />
        </Link>
            Dónalo
      </BranName>
      <NavContainer>
        <NavItem>
          <Link href='/' >Login</Link>
        </NavItem>
        <NavItem>
          <Link href='/' >Registrate!</Link>
        </NavItem>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
