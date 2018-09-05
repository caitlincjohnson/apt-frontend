import React, { Component } from 'react';
import Header from './components/header.js';
import Intro from './components/intro.js';
import Recipe from './components/recipe.js';
import Calculator from './components/calculator.js';
import Footer from './components/footer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = [
        {
          id: 1,
          name: 'Striploin Steak with Zucchini, Feta & Pine Nut Salad',
          ingredient_names: ['crumbled feta cheese', 'garlic', 'pine nuts', 'striploin (New York strip) steak', 'zucchini squash', 'black pepper', 'extra virgin olive oil', 'salt', 'virgin coconut oil'],
          ingredient_amounts: [4, 2, .25, 1.5, 4, 0, 0, 0, 0],
          ingredient_units: ['oz', 'cloves', 'cup', 'lb', 'medium', '', '', '', '']
        },
        {
          id: 2,
          name: 'Zucchini Shakshuka (North African-Style Egg Dish) with Feta',
          ingredient_names: ['crumbled feta cheese', 'diced tomatoes', 'eggs', 'garlic', 'Italian (flat-leaf) parsley', 'yellow onion', 'zucchini squash', 'black pepper', 'cumin', 'extra virgin olive oil', 'paprika', 'salt'],
          ingredient_amounts: [4, 14.5, 12, 2, 1, 1, 2, 0, 0, 0, 0, 0],
          ingredient_units: ['oz', 'oz', 'total', 'cloves', 'small bunch', 'medium', 'medium', '', '', '', '', '']
        },
        {
          id: 3,
          name: 'Steak with Asparagus & Balsamic Tomatoes',
          ingredient_names: ['asparagus', 'garlic', 'grape tomatoes', 'ribeye steak', 'balsamic vinegar', 'black pepper', 'salt', 'virgin coconut oil'],
          ingredient_amounts: [2, 2, 1, 1.5, 0, 0, 0, 0],
          ingredient_units: ['small bunches', 'cloves', 'pint', 'lb', '', '', '', '']
        }
      ]
    }

  render() {
    let recipes = this.state.map((recipe, index) => {
      return (
          <Recipe key = {index} id = {recipe.id} name = {recipe.name} ingredient_names = {recipe.ingredient_names} ingredient_amounts = {recipe.ingredient_amounts} ingredient_units = {recipe.ingredient_units}/>
      )
    })

    return (
      <div className="App">
        <Header />
        <Intro />
        <recipe-list class="scroll"> {recipes} </recipe-list>
        <Calculator recipes = {this.state}/>
        <Footer />
      </div>
    );
  }
}

export default App;
