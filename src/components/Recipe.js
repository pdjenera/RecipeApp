import React, { Component } from 'react';
import IngredientList from '../components/IngredientList';

class Recipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.recipe,
    };
  }

  render(){
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image recipe">
              <img src={this.state.item.strMealThumb}></img>
            </div>
            <span className="card-title">{this.state.item.strMeal}</span>
            <div className="card-content">
              <span className="card-title small">Ingredients</span>
              <div><IngredientList ingredients={this.state.item.ingredients}/></div>
            </div>
            <div className="card-content">
              <span className="card-title small">Instructions</span>
              <p>{this.state.item.strInstructions}</p>
            </div>
            <div className="card-action">
              <a href={this.state.item.strYoutube} target="_blank">YouTube Video</a>
              <a href={this.state.item.strSource} target="_blank">Link to Recipe</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Recipe;
