import data from '../../data'
import Product from '../Product/Product';
import './ProductList.css';

function ProductList() {
  return (
    <div className="ProductList">
      {data.map((product, index) => {
        return <Product index={index} name={product.name} price={product.price} category={product.category} ></Product>
      })}
    </div>
  );
}

export default ProductList;
