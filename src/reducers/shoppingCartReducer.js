import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_FROM_CART } from "../actions";

const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:

      const index = action.payload.index
      const cart = state

      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === index) {
          cart[i].qty += 1
          return [...cart]
        }
      }

      return [...state, { id: index, qty: 1 }]

    case REMOVE_FROM_CART:

      const id = action.payload.id
      const cartForRemoving = state

      return cartForRemoving.map((item) => {
        if (item.id === id) {
          item.qty -= 1
        }
        return item
      }).filter(item => item.qty > 0)

    case CLEAR_FROM_CART:

      const cartForClearing = state

      return cartForClearing.filter((item) => {
        return item.id === action.payload.id ? false : true
      })

    default:
      return state
  }
}

export default shoppingCartReducer