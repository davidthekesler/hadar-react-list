import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      starList: [ {name: 'Hadar', diameter: '100000000'},
                  {name: 'Gacrux', diameter: '1010010100100'},
                  {name: 'Kochab', diameter: '101200129412000'}
    ],

      planetList: ['Gravytrap','Ghostsphere','Crabrock']
    }//end this.state

  }//end constructor

  render() {

    let starListItemArray = this.state.starList.map ( (star) => {
      return <li key={star.name}>{star.name} has a diameter of {star.diameter}</li>
    });

    let planetListItemArray = this.state.planetList.map ( (planet) => {
      return <li key={planet}>{planet} is not my favorite planet.</li>
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <pre>
   
          </pre>
          <ul>
              {starListItemArray} 
          </ul>
          <ul>
              {planetListItemArray} 
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

 /*
.Map is a special forEach or for loop that'll return a new array.
const caterpillarToButterfly = (caterpillar) => {
  return { name: caterpillar}, isButterfly: true }
}

with ES6:

const caterpillarToButterfly = (caterpillar) => ({ name: caterpillar, isButterfly: true });

caterpillarArray = ['Josh','Joe','Jim','Jane'];

caterpillarArray.forEach((caterpillar) => {
  const newButterfly = caterpillarToButterfly(caterpillar);
  butterflyArray.push(newButterfly);
}

const butterflyArray = caterpillarArray.map( (caterpillar) => {
  caterpillarToButterfly(caterpillar)
});

  */
