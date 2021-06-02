import './Category.css';

function Category(props) {
  return (
    <div className="Category" onClick={() => props.setCategory(props.name)}> { props.name} < span className="catCount" > {props.count}</span ></div >
  );
}

export default Category;
