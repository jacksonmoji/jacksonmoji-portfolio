import React from 'react';
import logo from './img/logo.png';
import profile_picture from './img/profile_.jpg';
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

     <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            A little about me
          </h2>    
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Im always coding</h3>    
            <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">When im not coding</h3>    
            <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* <a href="#" className="btn-text">Learn more &rarr;</a> */}
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <div className="composition__photo composition__photo--about">fd</div>
            </div>
          </div>
        </div>

      </section>
     </main>
{/* 
     <section className="grid-test">
      <div className="row">
        <div className="col-1-of-2">
          col 1 of 2
        </div>
        <div className="col-1-of-2">
          col 1 of 2
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          col 1 of 3
        </div>
        <div className="col-1-of-3">
          col 1 of 3
        </div>
        <div className="col-1-of-3">
          col 1 of 3
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          col 1 of 3
        </div>
        <div className="col-2-of-3">
          col 2 of 3
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          col 1 of 4
        </div>
        <div className="col-1-of-4">
          col 1 of 4
        </div>
        <div className="col-1-of-4">
          col 1 of 4
        </div>
        <div className="col-1-of-4">
          col 1 of 4
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          col 1 of 4
        </div>
        <div className="col-1-of-4">
          col 1 of 4
        </div>
        <div className="col-2-of-4">
          col 2 of 4
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          col 1 of 4
        </div>
        <div className="col-3-of-4">
          col 3 of 4
        </div>
      </div>
    </section> */}

    </div>
  );
}

export default App;
