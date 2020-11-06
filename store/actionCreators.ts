import store from './store'

export function addToStore( article ) {
  store.dispatch( {
    type: actions.ADD_TO_STORE,
    article,
  } )
}

export const actions = {
  ADD_TO_STORE: "ADD_TO_STORE",
}