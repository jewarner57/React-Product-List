import './Category.css';

function isSelected(props) {
  // Because props.category is an object we use forin
  for (const category in props.category) {
    if (props.category[category] === props.name) {
      return 'selected'
    }
  }

  return ''
}

function Category(props) {
  return (
    <div className={`Category ${isSelected(props)}`} onClick={() => props.setCategory(props.name)}>
      {props.name}
      <span className="catCount"> {props.count}</span>
    </div>
  );
}

export default Category;
