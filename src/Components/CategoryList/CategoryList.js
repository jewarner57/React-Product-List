import data, { categoryCountsObjectArr } from '../../data'
import Category from '../Category/Category';
import './CategoryList.css';

function CategoryList() {
  return (
    <div className="CategoryList">
      {categoryCountsObjectArr.map((category, index) => {
        return <Category index={index} name={category.name} count={category.count}></Category>
      })}
    </div>
  );
}

export default CategoryList;
