import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Modal, Button, } from 'react-bootstrap';

function App() {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setshow1] = React.useState(false);
  const handleshow1Close = () => setshow1(false);
  const handleshow1Show = () => setshow1(true);

  const [show2, setshow2] = React.useState(false);
  const handleshow2Close = () => setshow2(false);
  const handleshow2Show = () => setshow2(true);

  const [show3, setshow3] = React.useState(false);
  const handleshow3Close = () => setshow3(false);
  const handleshow3Show = () => setshow3(true);

  const [show4, setshow4] = React.useState(false);
  const handleshow4Close = () => setshow4(false);
  const handleshow4Show = () => setshow4(true);

  return (
    <div className="App">

      {/* navbar */}
      <header id="header" class="fixed-top ">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-xl-9 d-flex align-items-center justify-content-between">
              <h1 class="logo"><a href="index.html">Jacky Nguyen</a></h1>
              <nav class="nav-menu d-none d-lg-block">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#resume">Skills</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* body/hero section */}
      <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8">
              <h1>Jacky Nguyen</h1><br/>
              <h2>Information Technology Major at Ontario Tech University
                <br/><br/>Full Stack Developer
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div id="projects"></div>
      <section class="projects">
        <div class="container">

          <div class="section-title">
            <h2 style={{ color: "white", textAlign: "center" }}> <b>Projects</b></h2>
            <h5 style={{ color: "white", textAlign: "center" }}><b>School Projects, Personal Projects and Hackathons</b></h5>
          </div>

          <div class="row">

            <div class="col-lg-4 col-md-6">
              <div class="title">
                <div class="pic"><img style={{ border: "1px solid #555" }} src={require('./Components/images/decoy.png')} class="img-fluid" alt="" onClick={handleShow} /></div>
                <div class="info">
                  <h4>Decoy</h4>
                  <div>Hack for the People - Winner</div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="title">
                <div class="pic"><img style={{ border: "1px solid #555" }} src={require('./Components/images/Episode.png')} class="img-fluid" alt="" onClick={handleshow3Show} /></div>
                <div class="info">
                  <h4>Episode</h4>
                  <div>Personal Project</div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="title">
                <div class="pic"><img style={{ border: "1px solid #555" }} src={require('./Components/images/recipeHunt.png')} class="img-fluid" alt="" onClick={handleshow4Show} /></div>
                <div class="info">
                  <h4>Recipe Hunt</h4>
                  <div>Personal Project</div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="title">
                <div class="pic"><img style={{ border: "1px solid #555" }} src={require('./Components/images/LoLProfile.png')} class="img-fluid" alt="" onClick={handleshow1Show} /></div>
                <div class="info">
                  <h4>LoLProfileCustomizer</h4>
                  <div>Personal Project</div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="title">
                <div class="pic"><img style={{ border: "1px solid #555" }} src={require('./Components/images/C19Stats.png')} class="img-fluid" alt="" onClick={handleshow2Show} /></div>
                <div class="info">
                  <h4>COVID19 Stats Tracker</h4>
                  <div>BOTHACKS</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <br />
            <h2 style={{ textAlign: "center" }}> <b>Skills</b></h2>
            <h5 style={{ textAlign: "center" }}><b>Education, Programming Languages and Technologies</b></h5>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">About Me</h3>
              <div class="resume-item pb-0">
                <h4>Jacky Nguyen</h4>
                <p>
                  <ul>
                    <li>Maple, Ontario</li>
                    <li>jacky.h.nguyen@gmail.com</li>
                  </ul>
                </p>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Bachelor of Information Technology</h4>
                <h5>Expected Graduation: April 2022</h5>
                <p><em>University of Ontario Institute of Technology</em></p>
              </div>
              <div class="resume-item">
                <h4>Ontario Secondary School Diploma</h4>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Experience</h3>
              <div class="resume-item">
                <h4>Programming Languages:</h4>
                <p>
                  <ul>
                    <li><b>Proficient:</b> Python, HTML, Javascript</li>
                    <li><b>Exposure:</b> CSS </li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Frameworks and Libraries</h4>
                <p>
                  <ul>
                    <li>React, Bootstrap, Flask</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Databases</h4>
                <p>
                  <ul>
                    <li>MySQL, MongoDB</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><a href ="https://devpost.com/software/decoy">Decoy</a></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Description:</b><br/>
          Decoy runs as soon as the browser is opened. The user then must state "close program" or "stop program" to authorize themselves as the owner of the laptop/computer within 8 seconds. Once 8 seconds has passed, Decoy takes a picture of the unauthorized user via webcam and retrieves the location (IP Address, City, Latitude, Longitude), sending the information to the owner of the laptop/computer via email. Lastly, Decoy will track anything the unauthorized user types and sends this information via email every 100 letters.
        <br/><br/> 
        <b>My contribution:</b><br/>
        While collaborating with two other developers, we were able to win category for "Best Digital Privacy Hack" out of over 700 participants.
        I implemented the part where Decoy tracks the keys typed of the unauthorized user using the pynput library and limited it to 100 characters per email in order to update the owner of their laptop/computer's activities near instantaneously.
        <br/><br/>
        <b>Preview:</b>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/XdKzwtFOFWE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/><br/>
        <b>Technologies Used:</b>
        <br/>
        <ul>  
        <li>SpeechRecognition</li>
        <li>pipwin</li>
        <li>pyaudio</li>
        <li>opencv-python</li>
        <li>pynput</li>
        <li>cv2</li>
        <li>webbrowser</li>
        <li>smtplib</li>
        <li>requests</li>
        </ul>
        <b>GitHub: </b><br/>
        <a href ="https://github.com/jacky-h-nguyen/Decoy">https://github.com/jacky-h-nguyen/Decoy</a>
        <br/><br/>
        <b>Devpost: </b><br/>
        <a href = "https://devpost.com/software/decoy">https://devpost.com/software/decoy</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} size="lg" onHide={handleshow1Close}>
        <Modal.Header closeButton>
          <Modal.Title><a href ="https://github.com/jacky-h-nguyen/LoLProfileCustomizer">LoL Profile Customizer</a></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <b>Description:</b><br/>
        Lol Profile Customizer allows League of Legends players to style their client-sided profiles by making use of public Riot Games APIs, connecting to the League of Legends client through lcu-driver.
        <br/><br/> 
        <b>Technologies Used:</b>
        <br/>
        <ul>  
        <li>lcu-driver</li>
        </ul>
        <b>GitHub: </b><br/>
        <a href ="https://github.com/jacky-h-nguyen/LoLProfileCustomizer">https://github.com/jacky-h-nguyen/LoLProfileCustomizer</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleshow1Close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} size="lg" onHide={handleshow2Close}>
        <Modal.Header closeButton>
        <Modal.Title><a href ="https://github.com/jacky-h-nguyen/COVID19-Stats-Tracker">COVID19 Stats Tracker</a></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Description:</b><br/>
          COVID-19 is a worldwide pandemic that was first identified in late 2019 in Wuhan, China. As of August 2020, more than 20 million cases resulting in over 800,000 deaths have been documented worldwide. Information regarding the COVID19 Stats Tracker is scattered and countless individuals have found it exceedingly difficult to scavenge for information while balancing their readjusted life due to the pandemic. COVID19 Stats Tracker acts as a haven of live information regarding the virus, incorporating various pandemic-related APIs as well as voice activated commands.
        <br/><br/> 
        <b>My contribution:</b><br/>
        I implemented functions relating to the web browser and os libraries. I also assisted with API calls pertaining to the news articles portion of the program. 
        <br/><br/>
        <b>Technologies Used:</b>
        <br/>
        <ul>  
        <li>SpeechRecognition</li>
        <li>pipwin</li>
        <li>pyaudio</li>
        <li>pyttsx3</li>
        <li>newsapi-python</li>
        <li>datetime</li>
        <li>os</li>
        <li>tkinter</li>
        <li>webbrowser</li>
        </ul>
        <b>GitHub: </b><br/>
        <a href ="https://github.com/jacky-h-nguyen/COVID19-Stats-Tracker">https://github.com/jacky-h-nguyen/COVID19-Stats-Tracker</a>
        <br/><br/>
        <b>Devpost: </b><br/>
        <a href = "https://devpost.com/software/coronaverse">https://devpost.com/software/COVID19-Stats-Tracker</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleshow2Close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show3} size="lg" onHide={handleshow3Close}>
        <Modal.Header closeButton>
          <Modal.Title><a href ="https://github.com/jacky-h-nguyen/Episode">Episode</a></Modal.Title>
        </Modal.Header>
        <Modal.Body>          
          <b>Description:</b><br/>
          Episode is a React web application that allows users to register, sign in, add shows to their watched list, remove shows from their watched list and search for shows in the database.
        <br/><br/> 
        <b>Preview:</b><br/>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/NdMknoayho8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/><br/>
        <b>Technologies Used:</b>
        <br/>
        <ul>
        <li>React</li>  
        <li>react-router-dom</li>
        <li>react-dom</li>
        <li>react-bootstrap</li>
        <li>mobx</li>
        <li>mobx-react</li>
        <li>reactstrap</li>
        <li>bcrypt</li>
        <li>express</li>
        <li>express-mysql-session</li>
        <li>express-session</li>
        <li>mysql</li>
        </ul>
        <b>GitHub: </b><br/>
        <a href ="https://github.com/jacky-h-nguyen/Episode">https://github.com/jacky-h-nguyen/Episode</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleshow3Close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show4} size="lg" onHide={handleshow4Close}>
        <Modal.Header closeButton>
          <Modal.Title><a href ="https://github.com/jacky-h-nguyen/Recipe-Hunt">Recipe Hunt</a></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <b>Description:</b><br/>
        Recipe Hunt is a web application, developed in React with a Flask back end server that allows users to search for recipes using a keyword.
        <br/><br/> 
        <b>Preview:</b><br/>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/K8D1UXQ0lX4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/><br/>
        <b>Technologies Used:</b>
        <br/>
        <ul>
        <li>React</li>  
        <li>react-router-dom</li>
        <li>react-dom</li>
        <li>react-bootstrap</li>
        <li>flask</li>
        <li>flask_cors</li>
        <li>requests</li>
        </ul>
        <b>GitHub: </b><br/>
        <a href ="https://github.com/jacky-h-nguyen/Recipe-Hunt">https://github.com/jacky-h-nguyen/Recipe-Hunt</a></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleshow4Close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
}

export default App;
