import React, { Component } from 'react';
import './App.css';
import Video from './Video';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Video />
        </div>
      </div>
    );
  }
}

export default App;
