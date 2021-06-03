import data from '../../data'
import Product from '../Product/Product';
import './ProductList.css';

function ProductList(props) {
  return (
    <div className="ProductList">
      {
        data.filter((product) => {
          // Is the product's category currently selected
          if (props.filter.includes(product.category) || props.filter.includes('All')) {
            return product
          }
          return null
        }).map((product, index) => {
          return <Product key={index} name={product.name} price={product.price} category={product.category} ></Product>
        })
      }
    </div>
  );
}

export default ProductList;
