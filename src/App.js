import React from 'react';
import './App.css';
import CategoryList from './Components/CategoryList/CategoryList'
import ProductList from './Components/ProductList/ProductList';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

class App extends React.Component {

  constructor() {
    super()

    this.state = { category: ["All"] };
    this.updateSelectedCategories = this.updateSelectedCategories.bind(this);
  }

  updateSelectedCategories(catName) {

    let catList = this.state.category

    // If category is already in list
    if (this.state.category.includes(catName)) {
      // filter it out
      catList = this.state.category.filter(cat => cat !== catName);
      this.setState({ category: catList })
    }
    // otherwise
    else {
      // add it to the list
      catList.push(catName)

      // If the added item was 'All'
      // remove all other filters
      if (catName === "All") {
        catList = ["All"]
      }
    }

    this.setState({ category: catList })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="pageTitle">
            <h1>Stuff Mart</h1>
          </div>
          <CategoryList setCategory={this.updateSelectedCategories} category={this.state.category}></CategoryList>
          <ShoppingCart></ShoppingCart>
          <ProductList filter={this.state.category} ></ProductList>
        </div>
      </Provider>
    )
  }
}

export default App;
