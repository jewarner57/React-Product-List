import './Category.css';

function Category(props) {
  return (
    <div className="Category" key={props.index} >{props.name} <span className="catCount" >{props.count}</span></div>
  );
}

export default Category;
