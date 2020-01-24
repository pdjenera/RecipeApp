import React, { Component } from 'react';
import IngredientList from '../components/IngredientList';

class Recipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.recipe,
    };
  }

  ifVideo(link){
    if(this.validURL(link)){
      return <a href={this.state.item.strYoutube} target="_blank" rel="noopener noreferrer">YouTube Video</a>
    }
    return null;
  }

  ifSource(link){
    if(this.validURL(link)){
      return <a href={this.state.item.strSource} target="_blank" rel="noopener noreferrer">Link to Recipe</a>
    }
    return null;
  }

  validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  render(){
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image recipe centerVert">
              <img alt="Recipe" src={this.state.item.strMealThumb}></img>
            </div>
            <span className="card-title">{this.state.item.strMeal}</span>
            <div className="card-content large">
              <span className="card-title small">Ingredients</span>
              <div><IngredientList ingredients={this.state.item.ingredients}/></div>
            </div>
            <div className="card-content large">
              <span className="card-title small">Instructions</span>
              <p>{this.state.item.strInstructions}</p>
            </div>
            <div className="card-action">
              {this.ifVideo(this.state.item.strYoutube)}
              {this.ifSource(this.state.item.strSource)}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Recipe;
