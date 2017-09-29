import React, { Component } from 'react';
import logo from './assets/logo.svg';
import bookmark from './assets/bookmark.png';
import calc from './assets/calc.png';
import './App.css';

const image = "https://avatars0.githubusercontent.com/u/15239463?v=4&s=460"

class App extends Component {
  /* We'll be using the state == childVisible to keep track of 
  ** image being selected or not. If selected, we show the text
  ** otherwise not. 
  */
  constructor(){
    super(); 
    this.state = {
      children: [
        {childVisible: false},
        {childVisible: false},
        {childVisible: false},
        {childVisible: true}
      ]
    }
  }

  onClick(i) {
    /* You cannot access children's values directly. That is why you need
    ** recreate the children and change the childVisible value in the copy
    ** and then reassign the whole array of element to children using
    ** setState()
    */
    const items = this.state.children;
    items[i].childVisible = !this.state.children[i].childVisible
    this.setState({
      items
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={image} alt = "" className="App-logo"/> 
          <h2>Amid's Portfolio</h2>
          <h4 className="Header-desc">Here you will find how much I suck at programming
            and feel good about yourself.
          </h4>
        </div>
        <p className="App-intro">
            Below you can find a list of all the projects that I have worked on. 
        </p>
        <div className="Projects" id="wrapper"> 
          <ul>
            <div id="left_col">
                <li> WebApp To Do List </li>
                  <img src={logo} alt="1st" onClick={() => this.onClick(0)}/>
                  {
                      this.state.children[0].childVisible
                      ? <p> This app was build on React.js. I have recently picked up React so this was my first
                      playing around project that uses a simple clock object and a input that creates an array
                      of tasks. Each task has a checkbox associated with it which is kept track by a boolean
                      value. </p>
                      : null
                  }
                <li> Mobile Calculator</li>
                <img src={calc} onClick={() => this.onClick(1)}/>
                {
                    this.state.children[1].childVisible
                    ? <p> This iOS app is a simple Calculator app based on Swift 3 and built in xCode 9. I
                    decided to start this project based on a need to create a calculator with arabic 
                    numerals and brush up on my Swift programming skills. After compeleting
                    all the functinallities for simple arithmetic operations to the 6th decimal point, I
                    no longer felt the passion to continue the project. It 
                    </p>
                    : null
                }
                </div>
            <div id = "right_col">
             <li> Bookmark - Textbook Buy & Sell</li>
                  <img src={bookmark} onClick={() => this.onClick(2)}/>
                {
                    this.state.children[2].childVisible
                    ? <p> This iOS app was a result of a group project in a course at Simon Fraser Univerity
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
                    : null
                }
            </div>  
        </ul>
            
        </div>
      </div>
    );
  }
}

export default App;
