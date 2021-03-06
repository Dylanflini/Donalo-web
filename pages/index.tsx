import Head from 'next/head'
import styled from '@emotion/styled'
import { List } from '../components/list'
import AddItem from '../components/add-item'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default function Home() {

  return (
    <div>
      <Head>
        <title>Dónalo App  📦 </title>
      </Head>

      <Container>
        <List />
        <AddItem />
      </Container>
    </div>
  )
}

Home.getInitialProps = async () => {

  return {
    // options: await fetchPokemonTypes(),
  }
}
