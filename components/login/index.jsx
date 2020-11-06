import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import styled from '@emotion/styled'

import 'firebase/auth';
import { firebaseConfig } from '../../config/fire-config';

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


if ( !firebase.apps.length ) {
  firebase.initializeApp( firebaseConfig );
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope( 'profile' );
  provider.addScope( 'email' );

  const result = await firebase.auth().signInWithPopup( provider )

  var token = result.credential.accessToken;
  var user = result.user;

  window.sessionStorage.setItem( 'TOKEN', token );

  console.log( token )
  console.log( user )

  return [token, user]

};


const Div = styled.div`
  margin: 40px auto;
`

export default function Login( { setUser } ) {

  const router = useRouter()
  console.log( router )

  const [token, setToken] = useState( null )

  async function handleClick() {
    const [token, user] = await signInWithGoogle()
    setToken( token )
    setUser( user )
  }

  useEffect( () => {
    if ( token ) {
      router.push( '/' )
    }
  }, [token] )

  return (
    <Div>
      <Button color='red' onClick={ handleClick } >
        <b> Iniciar sesión con Google </b>
      </Button>
    </Div>
  )

}
