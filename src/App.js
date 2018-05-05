import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {  
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      sobrenome: ""
    }
  }

  handleChange = (e) => {
    //console.log(e);
    let {id, value} = e.target;
    console.log("nome: " + id);
    console.log("value: " + value);    
    const valor = this.state;
    console.log(valor);

    this.setState({
      ...valor,
      [id]: value
    });

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <input id="nome" value={this.state.nome} onChange={this.handleChange} />
          <input id="sobrenome" value={this.state.sobrenome} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;
