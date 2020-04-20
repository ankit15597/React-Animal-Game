import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    animals:[
      {name:'Dog', nature:'Faithful'},
     {name:'Lion', nature:'Aggressive'},
     {name:'Fox', nature:'Clever'}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      animals:[
        {name:'Fox', nature:'Clever'},
        {name:'Lion', nature:'Aggressive'},
        {name:'Dog', nature:'Faithful'},



              ]
                 }
                 )
  }

  render() {
    return (
      <div className="App">
      <h1>Hi all! This is an animal game</h1>
      <Person name = {this.state.animals[0].name} nature = {this.state.animals[0].nature} num ={'1.'}/>
      <Person name = {this.state.animals[1].name} nature = {this.state.animals[1].nature} num ={'2.'}/>
      <Person name = {this.state.animals[2].name} nature = {this.state.animals[2].nature} num ={'3.'}/>
      <button onClick={this.switchNameHandler}>Reverse Order</button>
      </div>
    );
  }
}

export default App;
