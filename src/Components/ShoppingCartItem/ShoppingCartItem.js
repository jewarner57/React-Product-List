import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearFromCart, setCartQuantity } from '../../actions';
import './ShoppingCartItem.css'

function ShoppingCartItem(props) {
  const { name, price, id } = props.item
  const total = (price.slice(1) * props.qty).toFixed(2)
  const dispatch = useDispatch()

  return (
    <div className="ShoppingCartItem">
      <p>{name} x </p>
      <input className="cartAmount" type="number" value={props.qty} onChange={
        (e) => {
          console.log(e.target.value)
          dispatch(setCartQuantity(id, e.target.value))
        }
      } />
      <p> = {total}</p>
      <div onClick={() => dispatch(addToCart(id))} className="cartButton addToCart">+</div>
      <div onClick={() => dispatch(removeFromCart(id))} className="cartButton removeFromCart">-</div>
      <div onClick={() => dispatch(clearFromCart(id))} className="cartButton clearFromCart">X</div>
    </div>
  )
}

export default ShoppingCartItem