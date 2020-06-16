import React, {Component} from 'react';
import './App.css';
import { Button } from "./components/button";
import { Input } from "./components/input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input : ""
    }
  }

  clear = () => {
    this.setState({
      input:""
    });
  }

  calculate = () => {
    var chars = {'×':'*','÷':'/'};
    var replace = this.state.input.replace(/[×÷]/g, m => chars[m]);
    if(replace.charAt(0) === '0'){
      replace = replace.substr(1);
    }
    this.setState({
      input: eval(replace)
    })
  }

  input = (val) => {
    this.setState({
      input: this.state.input + val
    })
  }

  delete = () => {
    this.setState({
      input: this.state.input.slice(0,-1)
    })
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-wrapper">
          <Input input={this.state.input}/>
          <hr></hr>
          <div className="row">
            <Button click={this.clear}>AC</Button>
            <Button click={this.input}>(</Button>
            <Button click={this.input}>)</Button>
            <Button click={this.input}>&divide;</Button>
          </div>
          <div className="row">
            <Button click={this.input}>7</Button>
            <Button click={this.input}>8</Button>
            <Button click={this.input}>9</Button>
            <Button click={this.input}>&times;</Button>
          </div>
          <div className="row">
            <Button click={this.input}>4</Button>
            <Button click={this.input}>5</Button>
            <Button click={this.input}>6</Button>
            <Button click={this.input}>-</Button>
          </div>
          <div className="row">
            <Button click={this.input}>1</Button>
            <Button click={this.input}>2</Button>
            <Button click={this.input}>3</Button>
            <Button click={this.input}>+</Button>
          </div>
          <div className="row">
            <Button click={this.delete}>&larr;</Button>
            <Button click={this.input}>0</Button>
            <Button click={this.input}>.</Button>
            <Button click={this.calculate}>=</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default App