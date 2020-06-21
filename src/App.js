import React from 'react';
import logo_1 from './img/logo/logo_1.png';
import badge_1 from './img/front-end.png';
import badge_2 from './img/back-end.png';
import badge_3 from './img/tools.png';
import pro_pic_1 from './img/profile-pic3.png';
import project_p1 from './img/bantuweb-add-translation.png';
import { FaLinkedin, FaFacebook, FaTwitter, FaPython, FaAngular, FaJs, FaBootstrap, FaGithub, FaExternalLinkAlt, FaEnvelope } from 'react-icons/fa';
import { DiDjango, DiPostgresql, DiAws } from 'react-icons/di';
import './App.css';

function App() {
  return (
    <div className="App">

     <div className="header">
      <div className="header__logo-box">
        <img srcset={logo_1} alt="logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary"> 
          <span className="heading-primary--main">Hi, I'm Jackson</span>
          <span className="heading-primary--sub">I develop software</span>
        </h1>

        <a href="#projects" className="btn btn__bicolor--antiquewhite btn--animated">  Resume </a>
        <a href="#projects" className="btn btn__bicolor--dark btn--animated"> My Work </a>

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
          <li className="navigation__item"><a href="#about" className="navigation__link">About</a></li>
          <li className="navigation__item"><a href="#education" className="navigation__link">Education</a></li>
          <li className="navigation__item"><a href="#experience" className="navigation__link">Experience</a></li>
          <li className="navigation__item"><a href="#tools" className="navigation__link">Tools</a></li>
          <li className="navigation__item"><a href="#projects" className="navigation__link">Projects</a></li>
        </ul>
      </nav>
    </div> 
     <main>
      <section className="section-about" id="about">
        <div className="u-center-text u-margin-bottom-big--about">
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
                <ul className="composition composition_list">
                  <li className="composition__item"><a href="https://linkedin.com/in/jackson-thapelo-moji-5515167a" className="composition__link"><FaLinkedin /></a></li>
                  <li className="composition__item"><a href="mailto:jacksonmoji@gmail.com" className="composition__link"><FaEnvelope /></a></li>
                  <li className="composition__item"><a href="https://twitter.com/jacksonmoji" className="composition__link"><FaTwitter /></a></li>
                  <li className="composition__item"><a href="https://github.com/jacksonmoji" className="composition__link"><FaGithub /></a></li>
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

      <section className="section-education" id="education">
        <div className="u-center-text u-margin-bottom-big--about">
          <h1 className="heading-secondary">
           Education
          </h1>    
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h2>UNIVERSITY OF CAPE TOWN</h2>
            <h3 className="heading-tertiary u-margin-bottom-small"> MSC COMPUTER SCIENCE </h3>  
            <p> - </p>    
            <p> Busy with Dissertation </p>          

          </div>

          <div className="col-1-of-2">
            <h2>UNIVERSITY OF SUNDERLAND</h2>
            <h3 className="heading-tertiary u-margin-bottom-small"> BSc (Hons) COMPUTER SYSTEMS ENGINEERING </h3>  
            <p> 2:1 </p>    
            <p> 09/2011 - 07/2015 </p>          
          </div>
  
        </div>
      </section>

      <section className="section-experience" id="experience">
        <div className="u-center-text u-margin-bottom-big--about">
          <h2 className="heading-secondary">
           Experience
          </h2>    
        </div>
        <div class="row timeline">
          <div class="timeline__container timeline__container--left">
            <div class="content">
              <h1>A24 GROUP</h1>
              <h2>SOFWARE ENGINEER</h2>
              <h3>10/2019 - Present</h3>
              <p className="paragraph">Working on a legacy enterprise system for recruitment processes in the health industry. We are currently maintaining the a24group enterprise system which will be phased out over-time implementing new and up to date technologies using Node.js, React.js, and MongoDB from PHP and relational databases (MySQL, MSSQL ).</p>
            </div>
          </div>
          <div class="timeline__container timeline__container--right">
            <div class="content">
              <h1>THOUGHT EXPRESS</h1>
              <h2>SOFWARE ENGINEER | BUSINESS PROCESS ENGINEER</h2>
              <h3>01/2019 - 11/2019</h3>
              <p className="paragraph">Successfully finished leading data migration/conversion from client's Oracle DBMS to Thought Express's System. Delivering the milestones before the deadlines. We believe in under-promising and over-delivering. Below are the activities performed in my role: Lead the business requirements analysis, design, development and quality assurance of technical/business solutions. Reviewed and re-designed existing processes to provide faster and more effective solutions. Engaged with clients in understanding the particular business needs/problems they needed to solve in relation to their business processes. Combined analytical thinking with process understanding to meet and solve problems. Collaborated internally with the project team to design and build the proposed business process solution. Worked individually towards my own deadlines while simultaneously engaging with the team in achieving collective goals and deadlines.</p>
            </div>
          </div>
          <div class="timeline__container timeline__container--left">
            <div class="content">
              <h1>SQLI</h1>
              <h2>WEB DEVELOPER</h2>
              <h3>06/2018 - 01/2019</h3>
              <p className="paragraph">Developed extensions and applications in PHP Developed integrations from 3rd party systems into our systems Performed code reviews and design reviews from team members Provided input regarding new web technologies Performed Troubleshooting and fixed problems Reviewed and participated in testing Worked with customer service to correct issues identified by users</p>
            </div>
          </div>
          <div class="timeline__container timeline__container--right">
            <div class="content">
              <h1>OPEN SOFTWARE</h1>
              <h2>JUNIOR WEB DEVELOPER</h2>
              <h3>06/2015 - 03/2017</h3>
              <p className="paragraph">Successfully finished leading data migration/conversion from client's Oracle DBMS to Thought Express's System. Delivering the milestones before the deadlines. We believe in under-promising and over-delivering. Below are the activities performed in my role: Lead the business requirements analysis, design, development and quality assurance of technical/business solutions. Reviewed and re-designed existing processes to provide faster and more effective solutions. Engaged with clients in understanding the particular business needs/problems they needed to solve in relation to their business processes. Combined analytical thinking with process understanding to meet and solve problems. Collaborated internally with the project team to design and build the proposed business process solution. Worked individually towards my own deadlines while simultaneously engaging with the team in achieving collective goals and deadlines.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-tools" id="tools">

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
                  <li>JavaScript 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>CSS - SASS - HTML - XML 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>React 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Angular 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Bootstrap 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
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
                  <li>PHP 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Python 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Java 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>SQL - MySQL / PostgreSQL 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>NoSQL - MongoDB / ElasticSearch 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Redis 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Django 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Laravel 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Magento 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>NodeJs 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
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
                  <li>AWS 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Git - Github 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>NPM - Yarn 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Linux 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Apache 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                </ul>
              </p>

            </div>
          </div>

          
        </div>

      </section>

      <section className="section-projects" id="projects">
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
         <img src={logo_1} alt="logo" className="footer__logo"></img>
       </div>
       <div className="row">
          <div className="col-2-of-4">
            <div className="footer__social">
                <ul className="footer_list">
                  <li className="footer__item"><a href="https://linkedin.com/in/jackson-thapelo-moji-5515167a" className="footer__link"><FaLinkedin /></a></li>
                  <li className="footer__item"><a href="mailto:jacksonmoji@gmail.com" className="footer__link"><FaEnvelope /></a></li>
                  <li className="footer__item"><a href="https://twitter.com/jacksonmoji" className="footer__link"><FaTwitter /></a></li>
                  <li className="footer__item"><a href="https://github.com/jacksonmoji" className="footer__link"><FaGithub /></a></li>
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
