import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import styled from '@emotion/styled'

import 'firebase/auth';
import { firebaseConfig } from '../../config/fire-config';
import Button from '../button';

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
