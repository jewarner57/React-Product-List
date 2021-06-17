import { useDispatch } from 'react-redux';
import { removeFromCart, clearFromCart } from '../../actions';
import './ShoppingCartItem.css'

function ShoppingCartItem(props) {
  const { name, price, id } = props.item
  const total = (price.slice(1) * props.qty).toFixed(2)
  const dispatch = useDispatch()

  return (
    <div className="ShoppingCartItem">
      <p>{name} x {props.qty} = {total}</p>
      <div onClick={() => dispatch(removeFromCart(id))} className="cartButton removeFromCart">-</div>
      <div onClick={() => dispatch(clearFromCart(id))} className="cartButton clearFromCart">X</div>
    </div>
  )
}

export default ShoppingCartItem