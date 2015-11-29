import React, { Component } from 'react';
import { Color } from './colors';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Hello World!
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld color={Color} />
      </div>
    );
  }
}