import React, { useState } from 'react'
import Itemlist from './ItemList'
import { Container } from './styles'
import store from '../../store/store'

export function List() {

  const [articles, setArticles] = useState( store.getState().cart )

  store.subscribe( () => {
    setArticles( store.getState().cart )
  } )

  return (
    <Container>
      {
        articles.map( ( { image, title, description, category, name }, index: number ) => {
          return (
            <Itemlist
              key={ index }
              image={ image }
              title={ title }
              description={ description }
              category={ category }
              name={ name }
            />
          )
        } )
      }
    </Container>
  )
}
