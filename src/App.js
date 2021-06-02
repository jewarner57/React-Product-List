import logo from './logo.svg';
import data, { allCategories, categoriesAndCounts, uniqueCategories, categoryCountsObject } from './data'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      {console.log(data)}
      {console.log(allCategories)}
      {console.log(uniqueCategories)}
      {console.log(categoriesAndCounts)}
      {console.log(categoryCountsObject)}
    </div>
  );
}

export default App;
