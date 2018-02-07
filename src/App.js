import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count:0,
      value:1
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.lowerValue = this.lowerValue.bind(this);
    this.raiseValue = this.raiseValue.bind(this);
    /*
    Binding means inside of "increment" the "this" keyword is the component
    */
  }

  increment() {
    this.setState({count: this.state.count + this.state.value});
  }

  decrement() {
    this.setState({count: this.state.count - this.state.value});
  }

  resetCount() {
    this.setState({count: 0});
    this.setState({value: 1});
  }

  lowerValue(x) {
    this.setState({value: this.state.value - 1});
    console.log(this.value);
  }
  raiseValue() {
    this.setState({value: this.state.value + 1});
    console.log(this.value);
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        
        <button onClick={this.raiseValue}>+1 Increment</button>
        <button onClick={this.lowerValue}>-1 Increment</button>

        <button onClick={this.resetCount}>Reset</button>
        
        <h4>Increment: {this.state.value}</h4>
        <h1>{this.state.count}</h1>
      </div>
    );

  }
}

export default App;
