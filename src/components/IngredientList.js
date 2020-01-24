import React, { Component } from 'react';

class IngredientList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: props.ingredients,
    };
  }

  render(){
    return (
      <div className="IngredientContainer">
        {
          this.state.ingredients.map((ingredient, index) => (
              <p key={index}>{ingredient.ingredient} : {ingredient.measurement}</p>
          ))
        }
      </div>
    );
  }
}

export default IngredientList;
