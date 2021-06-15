import data from '../../data'
import { useSelector } from 'react-redux'

function ShoppingCart() {
  const cart = useSelector(state => state.shoppingCart)
  const items = cart.map(item => <p key={item} >{data[item].name}</p>)

  return (
    <div>
      <h3>Shopping Cart:</h3>
      {items}
    </div>
  )
}

export default ShoppingCart