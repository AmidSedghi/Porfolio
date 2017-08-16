import React from 'react';
import ReactDOM from 'react-dom'; 
import logo from './../logo.svg';

export class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      descs: [
        {text: <p>banana</p>}
      ]
    }
  }
  render() {
    return (
      this.state.descs[0].text
    );
  }
}

export class ShowHide extends React.Component {
  constructor() {
    super();
    this.state = {
      childVisible: false,
      images: [
        {image: logo}
      ]
    }

  }

  render() {
    return (
      <div>
        <div onClick={() => this.onClick()}>
          <img src={this.state.images[0].image}/>
        </div>
        {
          this.state.childVisible
            ? <Child />
            : null
        }
      </div>
    )
  }

  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
};

//React.render(<ShowHide />, document.getElementById('container'));
