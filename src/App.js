import logo from './logo.svg';
import data, { allCategories, categoriesAndCounts, uniqueCategories, categoryCountsObjectArr } from './data'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <p>Products: </p>
      <div>
        {categoryCountsObjectArr.map((category) => {
          return <div>{category.name} <span>{category.count}</span></div>
        })}
      </div>
      {console.log(data)}
      {console.log(allCategories)}
      {console.log(uniqueCategories)}
      {console.log(categoriesAndCounts)}
      {console.log(categoryCountsObjectArr)}
    </div>
  );
}

export default App;
