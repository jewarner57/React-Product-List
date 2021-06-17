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
      <p>
        Total: $
        {
          cart.reduce((accumulator, item) => {
            const itemData = data[item.id - 1]
            return accumulator + ((itemData.price.slice(1) * item.qty))
          }, 0).toFixed(2)
        }
      </p>
    </div>
  )
}

export default ShoppingCart