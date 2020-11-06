import React from 'react'
import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import styled from '@emotion/styled'
import '../styles/globals.css'

const Main = styled.main`
  padding-top: 70px;
`

function MyApp( { Component, pageProps } ) {

  return (
    <>
      <Head>
        <link rel="icon" href="/donalo_icon.svg" />
      </Head>
      <NavBar />
      <Main>
        <Component { ...pageProps } />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
