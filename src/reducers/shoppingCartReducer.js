import { ADD_TO_CART } from "../actions";

const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:

      const index = action.payload.index

      return [...state, index]

    default:
      return state
  }
}

export default shoppingCartReducer