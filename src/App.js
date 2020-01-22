import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CardContainer from './components/CardContainer'

class App extends Component {
  state = {
    url:'https://www.themealdb.com/api/json/v1/1/categories.php'
  }
  render(){
    return (
      <div>
        <Header/>
        <CardContainer url={this.state.url}/>
      </div>
    );
  }
}

export default App;
