import Head from 'next/head'
import styled from '@emotion/styled'
import { List } from '../components/list'
import AddItem from '../components/add-item'
import Login from '../components/login'

// import React from 'react'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default function LoginUser( { setUser } ) {
  return (
    <div>
      <Head>
        <title>Dónalo App  📦 </title>
      </Head>

      <Container>
        <Login setUser={ setUser } />
      </Container>
    </div>
  )
}
