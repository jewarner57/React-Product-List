import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions';
import './Product.css';

function Product(props) {
  const dispatch = useDispatch()

  return (
    <div className="Product">
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <p>{props.category}</p>
      <div className="addToCartButton" onClick={() => dispatch(addToCart(props.index))}>Add To Cart</div>
    </div>
  );
}

export default Product;
