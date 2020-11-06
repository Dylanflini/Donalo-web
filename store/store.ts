import { createStore } from 'redux';
import { actions } from './actionCreators'

const reducer = ( state, action ) => {

  switch ( action.type ) {
    case actions.ADD_TO_STORE:
      return {
        ...state,
        cart: [...state.cart, action.article]
      }

    default:
      break;
  }

  return state
}

const initialArticles = [
  {
    image: 'https://bata.digitag.cl/48557-large_default/zapatilla-hombre-titan.jpg',
    title: 'zapatillas',
    description: 'Zapatillas en buen estado!',
    category: 'Vestimenta',
    name: 'Dylan Rodríguez',
    contact: '+56 9 3129 1291'
  },
  {
    image: 'https://d2ry86xmro5c1v.cloudfront.net/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/1/0/106444_fit_burdeo_iso_1.jpg',
    title: 'Mochila',
  },
  {
    image: 'https://billabongcl.vtexassets.com/arquivos/ids/158965-440-440?width=440&height=440&aspect=true',
    title: 'Poleras',
  },
  {
    image: 'https://i.linio.com/p/555ea6df0dcc0fb5b31aab89c7a09d18-product.jpg',
    title: 'Notebook',
  },
  {
    image: 'https://images.segundamano.mx/api/v1/smmx/images/45/4571573527.jpg?rule=medium',
    title: 'Celular',
  },
  {
    image: 'https://static.ideal.es/www/multimedia/201801/11/media/cortadas/abrigozara8995euros-kknC-U5059697548948D-624x550@Ideal.jpg',
    title: 'Abrigo',
  },
  {
    image: 'https://vanscl.vteximg.com.br/arquivos/ids/540172-1000-1000/VN0A3MVU_Y28_1.jpg?v=637259889815600000',
    title: 'Zapatillas',
  },
  {
    image: 'https://sodimac.scene7.com/is/image//SodimacCL/1087878',
    title: 'Microondas',
  },
  {
    image: 'https://celta.cl/wp-content/uploads/2019/10/300012-300x300.jpg.webp',
    title: 'Cama',
  },
  {
    image: 'https://static.mercadoshops.com/celular-usado-star-b94m-android-45-pulgadas-12-megapixeles_iZ999429993XvZgrandeXpZ3XfZ97175612-481380107-3XsZ97175612xIM.jpg',
    title: 'celular',
  },
  {
    image: 'https://images.segundamano.mx/api/v1/smmx/images/45/4571573527.jpg?rule=medium',
    title: 'Celular',
  },
  {
    image: 'https://bata.digitag.cl/48557-large_default/zapatilla-hombre-titan.jpg',
    title: 'zapatillas',
    description: 'Son unas zapatillas usadas pero bonitas :D',
    category: 'Vestimenta',
    name: 'Dylan Rodríguez',
    contact: '+56 9 3129 1291'
  },
  {
    image: 'https://static.ideal.es/www/multimedia/201801/11/media/cortadas/abrigozara8995euros-kknC-U5059697548948D-624x550@Ideal.jpg',
    title: 'Abrigo',
  },
  {
    image: 'https://vanscl.vteximg.com.br/arquivos/ids/540172-1000-1000/VN0A3MVU_Y28_1.jpg?v=637259889815600000',
    title: 'Zapatillas',
  },

  {
    image: 'https://static.ideal.es/www/multimedia/201801/11/media/cortadas/abrigozara8995euros-kknC-U5059697548948D-624x550@Ideal.jpg',
    title: 'Abrigo',
  },
  {
    image: 'https://vanscl.vteximg.com.br/arquivos/ids/540172-1000-1000/VN0A3MVU_Y28_1.jpg?v=637259889815600000',
    title: 'Zapatillas',
  },
  {
    image: 'https://sodimac.scene7.com/is/image//SodimacCL/1087878',
    title: 'Microondas',
  },
  {
    image: 'https://celta.cl/wp-content/uploads/2019/10/300012-300x300.jpg.webp',
    title: 'Cama',
  },
  {
    image: 'https://static.mercadoshops.com/celular-usado-star-b94m-android-45-pulgadas-12-megapixeles_iZ999429993XvZgrandeXpZ3XfZ97175612-481380107-3XsZ97175612xIM.jpg',
    title: 'celular',
  },
]

export default createStore( reducer, { cart: initialArticles } )