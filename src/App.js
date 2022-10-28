import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return( <div className = "App" >
      <Calculator />
      </div>
    );
  }
}

export default App;
