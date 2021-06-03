import data from '../../data'
import Product from '../Product/Product';
import './ProductList.css';

function ProductList(props) {
  return (
    <div className="ProductList">
      {data.filter((product) => {
        const { filter } = props
        // If the product category is in the filter list
        if (filter.includes(product.category) || filter.includes('All')) {
          return product
        }
        return null
      }).map((product, index) => {
        return <Product key={index} name={product.name} price={product.price} category={product.category} ></Product>
      })}
    </div>
  );
}

export default ProductList;
