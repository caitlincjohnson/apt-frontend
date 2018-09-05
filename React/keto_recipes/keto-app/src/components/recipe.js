import React, { Component } from 'react';
import './recipe.css';

class Recipe extends Component {

  generateIngredientList(names, amounts, units){
    let ingredientList = []
    for (var i = 0; i < names.length; i++) {
      if (amounts[i] === 0) {
        ingredientList[i] = `${names[i]}`
      } else {
        ingredientList[i] = `${amounts[i]} ${units[i]} of ${names[i]}`
      }
    }
    return ingredientList
  }

  render() {

    let {name, ingredient_names, ingredient_amounts, ingredient_units} = this.props
    let ingredientList = this.generateIngredientList(ingredient_names,ingredient_amounts,ingredient_units)
    return (
      <recipe-card>
        <h3>{name}</h3>
        <div>
          {ingredientList.map(txt => <p>{txt}</p>)}
        </div>
      </recipe-card>
    );
  }
}

export default Recipe;
