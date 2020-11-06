import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import styled from '@emotion/styled'
import '../styles/globals.css'

const Main = styled.main`
  padding-top: var(--var-navbar-height);
`

function MyApp( { Component, pageProps } ) {

  const [user, setUser] = useState( null )

  return (
    <>
      <Head>
        <link rel="icon" href="/donalo_icon.svg" />
      </Head>
      <NavBar user={ user } />
      <Main>
        <Component { ...pageProps } user={ user } setUser={ setUser } />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
