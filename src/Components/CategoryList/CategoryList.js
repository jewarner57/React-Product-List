import data, { categoryCountsObjectArr } from '../../data'
import Category from '../Category/Category';
import './CategoryList.css';

function CategoryList(props) {
  return (
    <div className="CategoryList">
      <Category key={-1} name="All" count={data.length} setCategory={props.setCategory}></Category>
      {categoryCountsObjectArr.map((category, index) => {
        return <Category key={index} name={category.name} count={category.count} setCategory={props.setCategory}></Category>
      })}
    </div>
  );
}

export default CategoryList;
