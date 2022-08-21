import './App.css';
import Input from './components/Input';
import List from './components/List';
import React, { Component } from 'react'

class App extends Component {

  render() {
    return (
      <div className="App App-header App-link">
        <h1>Usando Redux</h1>
      <Input/>
      <List/>
    </div>
    )
  }
}

export default App;
