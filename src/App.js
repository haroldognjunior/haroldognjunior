import React from 'react'
import './App.css'
import SocialFollow from "./SocialFollow"
import image from "./skill.png"
import profile from "./profile.jpg"

class App extends React.Component {
  
    
    render() {
       
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Júnior Nogueira</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="" />
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#languages">Languages</a></li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid p-0">
        <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Júnior
                        <span class="text-primary">Nogueira</span>
                    </h1>
                    <div class="subheading mb-5">
                        Buenos Aires - Argentina ·
                        <a href="mailto:haroldognjunior@gmail.com">haroldognjunior@gmail.com</a>
                    </div>
                    <p class="lead mb-5">MY BACKGROUND COMBINES IT & HR. AS RECRUITER IT I KNEW IT WORLD AND I LOVED IT, SO I STUDIED FULLSTACK DEVELOPMENT, DESIGNER UX/UI AND IT CAREER.
JAVASCRIPT, TYPESCRIPT, AJAX, DOM, HTML, CSS, JSON, REACTJS, REACT, REDUX, GRAPHQL, GITLAB, GITHUB, POSTGRESQL, NODEJS, NESTJS, BOOTSTRAP, REDUX, EXPRESSJS, NOSQL, FIREBASE</p>
                    
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Full Stack Developer</h3>
                            <div class="subheading mb-3">@Tech - Inovação Tecnológica para a Agropecuária</div>
                            <p>• Internal integration API development (data shared between IT and Data Science) in NestJS <br />
                            • Back-end application development <br />
                            • GraphQL use to build routes that will be consumed by the application <br />
                            • Front-end application development in React <br />
                            • Consume and control API data to populate application graphs and tables (use of Redux) <br />
                            • Develop table interface <br />
                            • Develop graphics interface</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">October 2020 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Full Stack Developer</h3>
                            <div class="subheading mb-3">ONG Protectora Sarmiento</div>
                            <p>• App Development for ONG  providing information to the public and being able to collect donations, inputs, to be volunteers and people who wants to adopt the rescued animals as pets. <br />
                            • React redux and libraries use in frontend <br />
                            • Firebase connected through redux and integrations for storage and virtual wallet for donations.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2020 - October 2020</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Full Stack Developer</h3>
                            <div class="subheading mb-3">Henry</div>
                            <p>• E-commerce and digital wallet development with better code and practices. <br />
                            • SCRUM use with current daily with SCRUM Master. <br />
                            • Tolerance to frustation development.<br />
                            • Use with: JavaScript, NodeJS, Ajax, DOM, HTML, CSS, JSON, Reactjs, Redux, Github, PostgreSQL, Bootstrap, Redux, Expressjs, Sequelize. <br />
                            • Tools use: Visual Code Studio, Postman, Pgadmin, git bash.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">June 2020 - August 2020</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Hr Analyst</h3>
                            <div class="subheading mb-3">Accenture</div>
                            <p>• IT HR to clients in Brazil, Spain, Portugal and Israel.  <br />
                            • Interaction with global teams in China, India and USA.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2016 - October 2019</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">TECLAB</h3>
                            <div class="subheading mb-3">PROGRAMMING CAREER</div>
                            <h4>• Software developoment on web platforms in HTML, CSS and Java.
                            <br />• Databases configuration and implementation using SQL and Oracle.
                            <br />• Evoluation the quality of the software through unit tests.
                            <br />• Authentication implementation and configuration and access control services.
                            <br />• Software management life cycles with project management tools.
                            <br />• Software implementation development process in continuous integration systems.
                            <br />• Management of structured development design techniques , logic and algorithms.
                            <br />• Programming on mobile devices: JAVA and developments for Android. SDK.
                            <br />• Android Studio and Android virtual device (AVD).
                            <br />• Apps creator with Material Design and Responsive Design.           
                            </h4>
                           
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">April 2020 - December 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">HENRY</h3>
                            <div class="subheading mb-3">FULLSTACK DEVELOPER</div>
                            <h4>• HTML / CSS
                            <br />• Javascript
                            <br />• React / Redux
                            <br />• Node JS / Express
                            <br />• SQL / Mongo / Postgres                
                            </h4> <br /> <br />
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">April 2020 - August 2020</span></div>
                    </div>                   
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">CODER HOUSE</h3>
                            <div class="subheading mb-3">DESIGNER UX/UI</div>
                            <h4>• To analyze and to improve all the edges that involve the User Experience of digital products. <br />
                            • To create and to iterate project from an MVP conception focusing on model user.<br />
                            • To learn the use of prototyping tools in different fidelities and validate project through card sortings and usability tests. <br />
                            • To learn the design of the interface so that the project has a correct aesthetic foundation.              
                            </h4>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">April 2020 - June 2020</span></div>
                    </div>  
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>                      
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>                       
                        <li class="list-inline-item"><i class="fab fa-less"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>                        
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                        <li class="list-inline-item"><i class="fab fa-github"></i></li>
                        <li class="list-inline-item"><i class="fab fa-linux"></i></li>
                        <li>
                        <img src={image} alt="image" />
                        </li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">                      
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>                        
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I'm searching to move to Mexico.</p>
                    <p class="mb-0"> TRAININGS <br />
                
                • Seminars in: JavaScript, Oracle, Linux, Project Management, Computer Security, Python, WEB Programming, Java, 2020. Educación IT - Argentina.
                <br />• Security of Sensitive Information at Work, Accenture - 2018.
                <br /> • IT Skills, 2016. Conexion HR - Argentina.
                </p>
                </div>
            </section>
            <hr class="m-0" />
           
            <section class="resume-section" id="languages">
                <div class="resume-section-content">
                    <h2 class="mb-5">Languages</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"></span>
                            • English
                        </li>
                        <li>
                            <span class="fa-li"></span>
                            • Portuguese
                        </li>
                        <li>
                        <span class="fa-li"></span>
                        • Spanish
                        </li>                        
                    </ul>
                </div>
            </section>
        </div>  
            
          
          <footer>
          <SocialFollow />
          </footer>
          </div>

        );
    }
}

export default App