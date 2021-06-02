import data from '../../data'
import Product from '../Product/Product';
import './ProductList.css';

function ProductList(props) {
  return (
    <div className="ProductList">
      {data.filter((product) => {
        for (let category in props.filter) {
          if (props.filter[category] === product.category || props.filter[category] === 'All') {
            return product
          }
        }
      }).map((product, index) => {
        return <Product key={index} name={product.name} price={product.price} category={product.category} ></Product>
      })}
    </div>
  );
}

export default ProductList;
