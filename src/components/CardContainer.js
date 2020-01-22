import React, { Component } from 'react';
import Card from '../components/Card'

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.categories
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded || items.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="row inline">
          <div className="col s12 m9 center">
            <div className="CardContainer">
              {items.map(item => (
                <Card key={item.idCategory} item={item}/>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CardContainer;
