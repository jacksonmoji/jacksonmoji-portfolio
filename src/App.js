import React from 'react';
import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="header">
      <div className="header__logo-box">
        <img src={logo} alt="logo" className="header__logo"></img>
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary"> 
          <span className="heading-primary--main">Hi, I'm Jackson</span>
          <span className="heading-primary--sub">I create software</span>
        </h1>

        <a href="#" className="btn btn--white btn--animated"> Lets work </a>
      </div>
     </div>
    </div>
  );
}

export default App;
