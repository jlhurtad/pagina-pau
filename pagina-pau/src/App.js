import React, { Component } from 'react';
import './App.css';
import PhotoShowcaseContainer from './Components/PhotoShowcase/PhotoShowcaseContainer';
import TypeItStatement from './Components/TypeItStatement/TypeItStatement';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PhotoShowcaseContainer
          imgRenderStep={50}
          interval={6000}
          imgScaler={12}
          mobileImgScaler={3}
        />
        <TypeItStatement
          strings="Soy un hereje revolucionario atrapado en el cuerpo de una pelolais. <br> – <b>Paula A Secas</b>"
          loop={true}
          loopDelay={5000}
          speed={80}
        />
      </div>
    );
  }
}

export default App;
