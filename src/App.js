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
          <h4 className="Header-desc">Here you will find how much I suck at programming
            and feel good about yourself.
          </h4>
        </div>
        <p className="App-intro">
            Below you can find a list of all the projects that I have worked on. 
        </p>
        <div className="Projects"> 
          <ul>
            <li> WebApp To Do List </li>
            <p> This app was build on React.js. I have recently picked up React so this was my first
              playing around project that uses a simple clock object and a input that creates an array
              of tasks. Each task has a checkbox associated with it which is kept track by a boolean
              value. 
            </p>

            <li> Mobile Calculator</li>
            <p> This iOS app is a simple Calculator app based on Swift 3 and built in xCode 9. I
              decided to start this project based on a need to create a calculator with arabic 
              numerals and brush up on my Swift programming skills. After compeleting
              all the functinallities for simple arithmetic operations to the 6th decimal point, I
              no longer felt the passion to continue the project. It 
            </p>

            <li> Bookmark - Textbook Buy & Sell</li>
            <p> This iOS app was a result of a group project in a course at Simon Fraser Univerity
             in CMPT 275 - Intro to Software Engineering Techniques. We worked in this project in a 
             group of 4 and were able to create a solid product with a top notch design in a period
             of 4 months where 2 months was spent on ideation and documentation and 2 months on 
             implementation. 

             This beauty was built on Firebase for the purpose creating user accounts and for keeping
             track of textbook inventory. We had to create a structure that would make it extremely 
             easy for the student to find the textbook for the course. So we decided to present the
             books by the levels of 

             Department -> Course -> Course Number -> 3 Most Recent Semester's books

             It was beautiful.
            </p>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
