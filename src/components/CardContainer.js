import React, { Component } from 'react';
import Card from '../components/Card';
import { MEALSURL } from '../url.js';
import { RECIPEURL } from '../url.js';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.props.url,
      isLoaded: false,
      category: props.props.category,
      type: props.props.category,
      items: [],
      stateHistory:[]
    };

    this.state.stateHistory.push(this.state);
    this.handleMeals = this.handleMeals.bind(this);
    this.handleRecipe = this.handleRecipe.bind(this);
  }

  handleMeals(props) {
    let previousState = this.state;
    this.state.stateHistory.push(previousState);
    let stateHistory = this.state.stateHistory;
    this.fetchItems(MEALSURL + props);
    this.setState({
      url: MEALSURL + props,
      category: 'meals',
      type:'meals',
      items: [],
      stateHistory:stateHistory
    });

  }

  handleRecipe(props) {
    let previousState = this.state;
    this.state.stateHistory.push(previousState);
    let stateHistory = this.state.stateHistory;
    this.fetchItems(RECIPEURL + props);
    this.setState({
      url:  RECIPEURL + props,
      category: 'meals',
      type:'recipe',
      items: [],
      stateHistory:stateHistory
    });
  }

  fetchItems(url){
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result[this.state.category]
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  goBack(){
    let previousState = this.state.stateHistory.pop();
    this.fetchItems(previousState.url);
    this.setState({
      url: previousState.url,
      category: previousState.category,
      type:previousState.type,
      items: [],
      previousState: previousState.previousState
    });
  }

  canGoBack(){
    if(this.state.stateHistory.length > 1){
      return true;
    } else {
      return false
    }
  }

  componentDidMount() {
    this.fetchItems(this.state.url)
  }

  render(){
    const { error, isLoaded, items } = this.state;
    let handler = {};
    let button;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded || items.length === 0) {
      return <div>Loading...</div>;
    } else {

      if(this.state.type === 'categories') {
        handler = this.handleMeals;
      } else if (this.state.type === 'meals'){
        handler = this.handleRecipe;
      }

      if(this.canGoBack()){
        button =<i className="material-icons" onClick={() => this.goBack()}>keyboard_backspace</i>;
      }

      return (
        <div className="row inline">
          <div className="backButton">
            {button}
          </div>
          <div className="col s12 m9 center">
            <div className="CardContainer">
            {
              items.map((item, index) =>  (
                  <Card key={index} item={item} type={this.state.type} handler={handler}/>
              ))
            }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CardContainer;
