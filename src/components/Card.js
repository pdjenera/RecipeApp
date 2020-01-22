import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }

  render(){
    return (
      <div className="col s4">
        <div className="card medium">
          <div className="card-image">
            <img src={this.state.item.strCategoryThumb}></img>
            <span className="card-title">{this.state.item.strCategory}</span>
          </div>
          <div className="card-content">
            <p>{this.state.item.strCategoryDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
