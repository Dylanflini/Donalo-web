import React from 'react'
import styled from '@emotion/styled'
import Modal from '../modal';
import useModal from '../modal/useModal';
import { Item } from '../list/styles';
import Form from '../form';


const width = '100px'

const Icon = styled.img`
  width: ${ width };
  position: sticky;
  bottom: 3rem;
  left: calc(96% - ${ width });
  opacity: 0.9;
  /* box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12); */
  &:hover{
    opacity: 1;
    transition: transform .1s;
    transform: scale(1.05);
    cursor: pointer;
  }
`


export default function AddItem() {
  const [isOpen, openModal, closeModal] = useModal( false )

  return (
    <>
      <Icon src='/add_item.svg' onClick={ openModal } />
      <Modal isOpen={ isOpen } closeModal={ closeModal }  >
        <Item backgroundColor='none' shadow='none' >
          <Form />
        </Item>
      </Modal>
    </>
  )
}
