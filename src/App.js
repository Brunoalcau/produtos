import React, { Component } from 'react';
import './App.scss';
import InpuGroup from './components/molecules/Input-group/input-group';

class App extends Component {
  render() {
    return (
      <div className="App">
          <InpuGroup />
      </div>
    );
  }
}

export default App;
