import data, { categoryCountsObjectArr } from '../../data'
import Category from '../Category/Category';
import './CategoryList.css';

function CategoryList(props) {
  return (
    <div className="CategoryList">
      <Category key={-1} name="All" count={data.length} setCategory={props.setCategory} category={props.category}></Category>
      {categoryCountsObjectArr.map((category, index) => {
        return <Category key={index} name={category.name} count={category.count} setCategory={props.setCategory} category={props.category}></Category>
      })}
    </div>
  );
}

export default CategoryList;
