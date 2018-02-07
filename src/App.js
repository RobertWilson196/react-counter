import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count:0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    /*
    Binding means inside of "increment" the "this" keyword is the component
    */
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  decrement() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <h1>{this.state.count}</h1>
      </div>
    );

  }
}

export default App;
