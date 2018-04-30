import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoShowcaseContainer from './Components/PhotoShowcase/PhotoShowcaseContainer';

class App extends Component {

  render() {
    return (
      <PhotoShowcaseContainer imgRenderStep={100} interval={6000}/>
    );
  }
}

export default App;
