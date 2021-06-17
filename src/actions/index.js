export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_FROM_CART = 'CLEAR_FROM_CART'

export const addToCart = (index) => {
  return {
    type: ADD_TO_CART,
    payload: { index }
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id }
  }
}

export const clearFromCart = (id) => {
  return {
    type: CLEAR_FROM_CART,
    payload: { id }
  }
}