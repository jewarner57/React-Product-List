import data from '../../data'
import { useSelector } from 'react-redux'
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem'

function ShoppingCart() {
  const cart = useSelector(state => state.shoppingCart)

  return (
    <div>
      <h3>Shopping Cart:</h3>
      {
        cart.map((item) => {
          const itemData = data[item.id - 1]
          return <ShoppingCartItem key={item.id} item={itemData} qty={item.qty} ></ShoppingCartItem>
        })
      }
    </div>
  )
}

export default ShoppingCart