import React, { memo } from 'react'
import useModal from '../modal/useModal'
import Modal from '../modal'

import { Item, Title, Image, Body, Description } from './styles'
import Button from '../Button'

function Itemlist( { image, title, description, category, name } ) {

    const [isOpen, openModal, closeModal] = useModal()

    return (
        <>
            <Item onClick={ openModal } >
                <Image src={ image } />
                <Body>
                    <Title>{ title }</Title>
                </Body>
            </Item>
            <Modal isOpen={ isOpen } closeModal={ closeModal } >
                <Item backgroundColor='none' shadow='none' cursor='default' >
                    <Title>{ title.toUpperCase() }</Title>
                    <Image src={ image } margin={'0 10%'} width='80%' height='100%' />
                    <Body align='flex-start' backgroundColor='none' >
                        <Description><b>Descripción: </b>{ description }</Description>
                        <Description><b>Categoría:</b> { category }</Description>
                        <Description><b>Donador: </b>{ name }</Description>
                        <Button onClick={ () => { } }>Contactar</Button>
                    </Body>
                </Item>
            </Modal>
        </>
    )
}

export default memo( Itemlist )