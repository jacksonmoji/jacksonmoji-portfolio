import React from 'react';
import logo from './img/logo.png';
import badge_1 from './img/front-end.png';
import badge_2 from './img/back-end.png';
import badge_3 from './img/tools.png';
import pro_pic_1 from './img/pro-pic-1.png';
import project_p1 from './img/bantuweb-add-translation.png';
import { FaLinkedin, FaFacebook, FaTwitter, FaPython, FaAngular, FaJs, FaBootstrap, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { DiDjango, DiPostgresql, DiAws } from 'react-icons/di';
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
     <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Tools</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Projects</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Experience</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Education</a></li>
        </ul>
      </nav>
    </div> 
     <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
           About
          </h2>    
        </div>

        <div className="row">
        
          <div className="col-1-of-2">
            <div className="composition">
         
            <img className="composition__photo composition__photo--p1" src={pro_pic_1}/>  
            
            </div>
            <div className="composition__social">
                <ul className="composition_list">
                  <li className="composition__item"><a href="#" className="composition__link"><FaLinkedin /></a></li>
                  <li className="composition__item"><a href="#" className="composition__link"><FaFacebook /></a></li>
                  <li className="composition__item"><a href="#" className="composition__link"><FaTwitter /></a></li>
                  <li className="composition__item"><a href="#" className="composition__link"><FaGithub /></a></li>
                </ul>
            </div>

            
          </div>

          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Jackson Thapelo Moji</h3>    
            <p className="paragraph">
              I remember back when I was a little kid, I used to play with my neighbour's computer trying to make beats with FL Studio. I was horrible at beat making sadly, despite my skills, I was always curious about the inner workings of the software. Over the years my curiosity for Software and the Internet grew, leading to me taking computer classes in high school learning the architecture of computer motherboards and network topology. It wasn't till my undergrad years that I started learning how to write code in Java. I still remember sitting in front of a work station in the computer lab with the terminal open and making it print 'Hello, Jackson' for the very first time. As I went through the Java tutorial, it was almost magic, being able to get the computer to do whatever I wanted, just by typing in these funny little symbols, limited only by my own imagination and ingenuity. 
            </p>
            <p className="paragraph">
              Throughout my university years, I latched on to any ideas for projects I could get, moving from 'Hello World' all the way to a simple Morabaraba Game (African Traditional Board Game), with dozens of projects in between. I learned C#, then JavaScript, tearing through any book, course material, article, and YouTube video I could find on anything remotely related to software development. I was absolutely hooked!
            </p>
            <p className="paragraph">
              This passion led me to take on postgraduate studies at the University of Cape Town. Here there are more resources available to me than I ever could have imagined as a kid. I have been studying new languages, more algorithms, computer science research, all with pretty much the same fascination that drove me as a kid. And it is here that I learned truly how much there is yet to learn. 
            </p>
            <p className="paragraph">
              This passion remains with me in the Industry, in light of this, I have been building hands-on experience spanning 3+ years developing software for various companies offering services to clients in Health staffing and recruiting, Insurance, and Commerce. Always eager to learn new Technologies and find interesting ways of solving problems. There's certainly yet more to learn, yet more problems to solve, and yet more to build. And for this, I am very grateful.
            </p>

            {/* <a href="#" className="btn-text">Learn more &rarr;</a> */}
          </div>
        </div>

      </section>

      <section className="section-tools">

      <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary heading-secondary--tools">
            Skills
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="tool-box tool-box--floating">
           
              <i className="tool-box__icon icon-basic-webpage-multiple"></i>
              <h3 className="heading-tertiary u-margin-bottom-small"> Front End </h3>    
              <p className="tool-box__text">
                <ul>
                  <li>JavaScript</li>
                  <li>CSS - SASS - HTML - XML</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Bootstrap</li>
                </ul>
              </p>
            
            </div>
            <div className="badge badge--p1 badge--p1--floating"><img src={badge_1} /></div>
          </div>

          <div className="col-1-of-3">
            <div className="tool-box tool-box--floating">
              <div className="badge badge--p2"><img src={badge_2} /></div>
              <i className="tool-box__icon icon-basic-settings"></i>
              <h3 className="heading-tertiary u-margin-bottom-small"> Back End </h3>    
              <p className="tool-box__text">
              <ul>
                  <li>PHP</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL - MySQL / PostgreSQL</li>
                  <li>NoSQL - MongoDB / ElasticSearch</li>
                  <li>Redis</li>
                  <li>Django</li>
                  <li>Laravel</li>
                  <li>Magento</li>
                  <li>NodeJs</li>
                </ul>
              </p>

            </div>
          </div>

          <div className="col-1-of-3">
            <div className="tool-box tool-box--floating">
              <div className="badge badge--p3"><img src={badge_3} /></div>
              <i className="tool-box__icon icon-basic-gear"></i>
              <h3 className="heading-tertiary u-margin-bottom-small"> Tools </h3>    
              <p className="tool-box__text">
              <ul>
                  <li>AWS</li>
                  <li>Git - Github</li>
                  <li>NPM - Yarn</li>
                  <li>Linux</li>
                  <li>Apache</li>
                </ul>
              </p>

            </div>
          </div>

          
        </div>

      </section>

      <section className="section-projects">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Projects
          </h2>
        </div>
        <div className="row">
          <div className="col-2-of-4">
            <div className="file">
              <div className="file__side file__side--front">
                <img src={project_p1} ></img>
              </div>
              <div className="file__side file__side--back file__side--back-1">
              
                <a href="#" className="btn btn--blue btn--animated"><FaExternalLinkAlt /></a>
                <a href="#" className="btn btn--white btn--animated"><FaGithub /> </a>
              
              </div>
            </div>
          </div>
          <div className="col-2-of-4">
          <h3 className="heading-tertiary u-margin-bottom-small">BantuWeb MSc Project</h3>    
            <p className="paragraph"> 
              This is a deliverable from my MSc Computer Science research. Essentially, Bantuweb is a document discovery and crowd-sourcing platform, of which I developed in efforts to translate articles extracted from Wikipedia to indigenous South Africa languages. This is done with participants' help. Also, I incorporated gratification as a means to motivate participants to contribute and engage more in BantuWeb. Other ways to contribute in the platform is by writing blogs/stories and uploading digital documents written in any of the indigenous South African languages.
            </p>
            <p className="skills__big">
              <DiAws /> <FaPython /> <DiPostgresql /> <DiDjango /> <FaJs /> <FaAngular /> <FaBootstrap />
            </p>
          </div>
        </div>
      </section>
     </main>

     <footer className="footer">
       <div className="footer__logo-box">
         <img src={logo} alt="logo" className="footer__logo"></img>
       </div>
       <div className="row">
          <div className="col-2-of-4">
            <div className="footer__social">
                <ul className="footer_list">
                  <li className="footer__item"><a href="#" className="footer__link"><FaLinkedin /></a></li>
                  <li className="footer__item"><a href="#" className="footer__link"><FaFacebook /></a></li>
                  <li className="footer__item"><a href="#" className="footer__link"><FaTwitter /></a></li>
                  <li className="footer__item"><a href="#" className="footer__link"><FaGithub /></a></li>
                </ul>
            </div>
          </div>
          <div className="col-2-of-4">
            <div className="footer__social">
                <p className="footer__copyright">
                  Created by <span className="footer__text--name" > Jackson Moji </span>
                </p>
            </div>
          </div>
        </div>
     </footer>
     </div>
/* 
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
    </section> */
  );
}

export default App;
