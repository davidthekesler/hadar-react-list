import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {

      starListInput: 
                  {name: '', diameter: ''}
      ,
      starList: [ {name: 'Hadar', diameter: '100000000'},
                  {name: 'Gacrux', diameter: '1010010100100'},
                  {name: 'Kochab', diameter: '101200129412000'},
    ],

      planetList: ['Gravytrap','Ghostsphere','Crabrock']
    }//end this.state

    this.handleSubmit = this.handleSubmit.bind(this);

  }//end constructor

  handleChangeFor = (propertyName) => {
    //this is a function that returns a function
    return (event) => {
      // myObj.somthing.somethingElse
      // myObj["something"]["somethingElse"]
      this.setState({
        starListInput: {
          ...this.state.starListInput,
          [propertyName]: event.target.value,
        }
      });
    }
  }

  handleSubmit(event) {

    event.preventDefault();
    this.setState({
      starList: [
         ...this.state.starList,
         {name: this.state.starListInput.name, diameter: this.state.starListInput.diameter}
      ],
      starListInput: {
        name: '',
        diameter: ''
      }
    })
  }

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
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.starListInput.name} onChange={this.handleChangeFor("name")} placeholder='name' />
            <input value={this.state.starListInput.diameter} onChange={this.handleChangeFor("diameter")} placeholder='diameter' />

            <input type="submit" value="Submit"/>
            </form>

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
