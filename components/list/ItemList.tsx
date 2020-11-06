import React, { memo } from 'react'
import useModal from '../modal/useModal'
import Modal from '../modal'
import styled from '@emotion/styled'

import { Item, Title, Image, Body, Description } from './styles'
export const buttonPropsDefault = {
    color: 'var(--var-primary-dark-color)',
    children: 'button',
  }
  
  
  function Button( { children = buttonPropsDefault.children, onClick, color = buttonPropsDefault.color } ) {
  
    const ButtonStyle = styled.button`
    width: 100%;
    max-width: 300px;
    position: relative;
    display: block;
    margin: 1rem auto;
    padding: 0;
    overflow: hidden;
    border-width: 0;
    border-radius: var(--var-border);
    box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
        0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
    background-color: ${ color };
    color: #ecf0f1;
    transition: background-color .3s;
  
    &:hover, &:focus {
      opacity: 0.8;
      cursor: pointer
    }
  
    & > * {
      position: relative;
    }
  
    & span {
      display: block;
      padding: 12px 24px;
    }
  
    &:before {
      content: "";
      
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 0;
      padding-top: 0;
      border-radius: 100%;
      background-color: rgba(236, 240, 241, .3);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  
    &:active:before {
      width: 120%;
      padding-top: 120%;
      transition: width .2s ease-out, padding-top .2s ease-out;
    }
  `
  
    return (
      <ButtonStyle onClick={ onClick } >
        <span>{ children }</span>
      </ButtonStyle>
    )
  }

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