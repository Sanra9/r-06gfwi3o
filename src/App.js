import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    const names = ['Juan', 'Pedro', 'Germán']
    return (
      <div>
        {names.map((name) =>
          <Welcome name={name} />
        )}
      </div>
    );
  }
}

export default App;
