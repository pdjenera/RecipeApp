import React, { Component } from 'react';
import M from 'materialize-css';

class Header extends Component {
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">Recipe App</a>
        </div>
      </nav>
    );
  }
}

export default Header;
