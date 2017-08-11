import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const image = "https://avatars0.githubusercontent.com/u/15239463?v=4&s=460"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={image} className="App-logo"/> 
          <h2>Amid's Portfolio</h2>
          <p className="Header-desc"> Welcome to my portfolio webpage. Here you will find how
            much I suck at programming.
          </p>
        </div>
        <p className="App-intro">
            Below you can find a list of all the projects that I have worked on. 
        </p>

      </div>
    );
  }
}

export default App;
