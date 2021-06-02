import './Category.css';

function isSelected(props) {
  if (props.category === props.name) {
    return 'selected'
  }
  return ''
}

function Category(props) {
  return (
    <div className={`Category ${isSelected(props)}`} onClick={() => props.setCategory(props.name)}> { props.name} < span className="catCount" > {props.count}</span ></div >
  );
}

export default Category;
