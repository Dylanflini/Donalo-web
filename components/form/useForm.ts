import React from 'react'
import { addToStore } from '../../store/actionCreators';

const initialPost = {
  title: '',
  description: '',
  category: 'Categoría',
  contactData: '',
  image: 'https://bata.digitag.cl/48557-large_default/zapatilla-hombre-titan.jpg',
}

export function useForm() {

  const [post, setPost] = React.useState( initialPost );

  function handleChange( e ) {
    const { name, value } = e.target;

    if ( name === 'image' ) {
      const file = e.target.files[0]
      setPost( prevState => ( { ...prevState, [name]: file } ) );
    } else {
      setPost( prevState => ( { ...prevState, [name]: value } ) );
    }

  };

  const handleSubmit = ( e ) => {
    e.preventDefault()
    addToStore( post )
  }

  return [post, handleChange, handleSubmit]
}