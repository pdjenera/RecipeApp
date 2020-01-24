import React, { Component } from 'react';

class MealCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      handler: props.handler
    };
  }

  render(){
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
  }
}

export default MealCard;
