import React, { Component } from 'react';
import Recipe from '../components/Recipe';
import CategoryCard from '../components/CategoryCard';
import MealCard from '../components/MealCard';
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
        <CategoryCard handler={this.state.handler} item={this.state.item} />
      );
    } else if (this.state.category === 'meals') {
      return (
        <MealCard handler={this.state.handler} item={this.state.item} />
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
