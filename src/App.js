import React, { Component } from 'react';
// import logo from './logo.svg';
import Gallery from './Demo'
// import PhotoGallery from './filter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery/>
        {/* <PhotoGallery/> */}
      </div>
    );
  }
}

export default App;
