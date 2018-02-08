import React, { Component } from 'react';
import Email from './Email';  // assumes a .js file by default
import LoginForm from './LoginForm';

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
    this.setValue = this.setValue.bind(this);
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
  setValue(e) {
    this.setState({value: +e.target.value});  // + in front of the string tries to make it a number
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input type="number" className="form-control" onChange={this.state.setValue} value={this.state.value}/>
          <button className="btn btn-primary" onClick={this.raiseValue}>+1 Increment</button>
          <button className="btn btn-primary" onClick={this.lowerValue}>-1 Increment</button>
        </div>

        <button className="btn btn-primary" onClick={this.increment}>+</button>
        <button className="btn btn-primary" onClick={this.decrement}>-</button>

        
        <button className="btn btn-primary" onClick={this.resetCount}>Reset</button>
        
        <h4>Increment: {this.state.value}</h4>
        <h1>{this.state.count}</h1>
        <Email />
        <LoginForm />
      </div>
    );

  }
}

export default App;
