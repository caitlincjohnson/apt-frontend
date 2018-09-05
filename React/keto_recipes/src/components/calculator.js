import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      totaledIngredients: []
    }
  }

  clicked = (recipes) => {
    let newGroceryList = []
    let counter = 0
    for (let i = 0; i < recipes.length; i++) {
      let {ingredient_names, ingredient_amounts, ingredient_units} = recipes[i]
      for (let i = 0; i < ingredient_names.length; i++) {
        if (ingredient_amounts[i] === 0) {
          newGroceryList[counter] = `${ingredient_names[i]}`
          counter++
        } else {
          newGroceryList[counter] = `${ingredient_amounts[i]} ${ingredient_units[i]} of ${ingredient_names[i]}`
          counter++
        }
      }
    }
    this.setState({totaledIngredients: newGroceryList})
  }

  render() {

    let recipeList = this.props.recipes
    let groceryList = this.state.totaledIngredients

    return (
      <section>
        <p>Select the recipes you want to cook and generate a grocery shopping list.</p>
        <button type="button" onClick={this.clicked.bind(this,recipeList)} >Generate Shopping List</button>
        <div>
          {groceryList.map(txt => <p>{txt}</p>)}
        </div>
      </section>
    );
  }
}

export default Calculator;
