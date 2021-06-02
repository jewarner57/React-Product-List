import './Product.css';

function Product(props) {
  return (
    <div className="Product" key={props.index} >
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <p>{props.category}</p>
    </div>
  );
}

export default Product;
