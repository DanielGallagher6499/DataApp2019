import React from 'react';
import '../App.css';
import Logo from './logo.png';
import Banner from './banner.jpg';

class Content extends React.Component {

  render() {
    return (
      <div className="App">
        <br></br>
        <h1>Welcome to GameSpot!</h1>
        <br></br>
        <img src={Logo} alt="website logo" />
        <br></br>
        <h1>GameSpot - The Community Run Gaming Site!</h1>
        <h3>The best community run application to see all of the best games out right now!</h3>
        <h3>Run by the community , for the community!</h3>
        <br></br>
        <h3>{new Date().toLocaleTimeString()}</h3>
        <img src={Banner} alt="website banner" />
      </div>
    );
  }
}

export default Content;