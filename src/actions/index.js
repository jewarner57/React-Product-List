export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (index) => {
  return {
    type: ADD_TO_CART,
    payload: { index }
  }
}

