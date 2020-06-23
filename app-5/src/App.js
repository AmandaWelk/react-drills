import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Image url={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpm_zWK5vJEtIifykpZ832kiDY5stoE7Aozg&usqp=CAU'} />
      </div>
    );
  }
}  

export default App;
