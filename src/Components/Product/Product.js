import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions';
import './Product.css';

function Product(props) {
  const dispatch = useDispatch()
  const { name, price, id, category } = props.product

  return (
    <div className="Product">
      <h2>{name}</h2>
      <h4>{price}</h4>
      <p>{category}</p>
      <div className="addToCartButton" onClick={() => dispatch(addToCart(id))}>Add To Cart</div>
    </div>
  );
}

export default Product;
