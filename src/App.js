import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import { CATEGORIESURL } from './url.js';

class App extends Component {
  state = {
    url:CATEGORIESURL,
    category:'categories'
  }
  render(){
    return (
      <div>
        <Header/>
        <CardContainer props={this.state}/>
      </div>
    );
  }
}

export default App;
