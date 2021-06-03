import './Category.css';

function Category(props) {
  // Is the category currently selected
  const isSelected = props.category.includes(props.name) ? 'selected' : ''

  return (
    <div className={`Category ${isSelected}`} onClick={() => props.setCategory(props.name)}>
      {props.name}
      <span className="catCount">{props.count}</span>
    </div>
  );
}

export default Category;
