import React, { Component } from 'react';
import Recipe from '../components/Recipe';
import {normalizeRecipe} from '../utils.js';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      handler: props.handler,
      category: props.type
    };
  }

  render(){
    if(this.state.category === 'categories'){
      return (
        <div className="col s4">
          <div className="card medium" onClick={(strCategory) => this.state.handler(this.state.item.strCategory)}>
            <div className="card-image">
              <img src={this.state.item.strCategoryThumb}></img>
            </div>
            <span className="card-title">{this.state.item.strCategory}</span>
            <div className="card-content">
              <p className="description">{this.state.item.strCategoryDescription}</p>
            </div>
          </div>
        </div>
      );
    } else if (this.state.category === 'meals') {
      return (
        <div className="col s4">
          <div className="card medium" onClick={(idMeal) => this.state.handler(this.state.item.idMeal)}>
            <div className="card-image recipe">
              <img src={this.state.item.strMealThumb}></img>
            </div>
            <span className="card-title recipe">{this.state.item.strMeal}</span>
          </div>
        </div>
      );
    } else if (this.state.category === 'recipe') {
      let recipe = normalizeRecipe(this.state.item);
      return (
        <Recipe recipe={recipe}/>
      );
    }
  }
}

export default Card;
