import { ADD_TO_CART } from "../actions";

const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload.index]
    default:
      return state
  }
}

export default shoppingCartReducer