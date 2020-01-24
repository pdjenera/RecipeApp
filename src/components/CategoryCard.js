import React, { Component } from 'react';

class CategoryCard extends Component {
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
  }
}

export default CategoryCard;
