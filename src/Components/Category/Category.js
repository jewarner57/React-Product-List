import './Category.css';

function isSelected(props) {
  // Because props.category is an object we use forin
  const { category, name } = props
  return category.includes(name) ? 'selected' : ''
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
