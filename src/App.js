import React, { useState } from 'react';
import './App.css';
import CategoryList from './Components/CategoryList/CategoryList'
import ProductList from './Components/ProductList/ProductList';

function App() {
  const [category, setCategory] = useState('All');

  return (
    <div className="App">
      <div className="pageTitle">
        <h1>Stuff Mart</h1>
      </div>
      <CategoryList setCategory={setCategory}></CategoryList>
      <ProductList filter={category} ></ProductList>
    </div>
  );
}

export default App;
