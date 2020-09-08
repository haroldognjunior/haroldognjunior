import React from 'react'
import './App.css'
import SocialFollow from "./SocialFollow"
import image from "./skill.png"

class App extends React.Component {
  
    
    render() {
       
        return (
            <div>
            <div className="app">
            <h1>JUNIOR NOGUEIRA</h1>
            <h3>My background combines IT & HR. As Recruiter IT I knew IT World and I loved it, so I studied Fullstack Development, Designer UX/UI and IT Career.</h3>
            <h3>JavaScript, NodeJS, Ajax, DOM, HTML, CSS, JSON, Reactjs, Redux, Github, PostgreSQL, Bootstrap, Redux, Expressjs, NoSql. </h3>
            <div className="card">
              
                <h2>WORK EXPERIENCE</h2>
                <span>
                <h3>HENRY - FULLSTACK DEVELOPER / JUN 2020 - AUG 2020 - Argentina</h3>
                <h4>• E-commerce and digital wallet development with better code and practices.
                <br /> • SCRUM use with current daily with SCRUM Master. 
                <br />• Tolerance to frustation development. 
                <br/>• Use with: JavaScript, NodeJS, Ajax, DOM, HTML, CSS, JSON, Reactjs, Redux, Github, PostgreSQL, Bootstrap, Redux, Expressjs, Sequelize.
                <br />• Tools use: Visual Code Studio, Postman, Pgadmin, git bash.
                </h4>
                </span>

                <span>
                <h3>ACCENTURE SRL - HR ANALYST / AUG 2016 - OCT 2019 - Argentina</h3>
                <h4>• IT HR to clients in Brazil, Spain, Portugal and Israel.
                <br />• Interaction with global teams in China, India and USA.
               </h4>
                </span>

                <h2>TRAININGS</h2>
                <h4>
                • Seminars in: JavaScript, Oracle, Linux, Project Management, Computer Security, Python, WEB Programming, Java, 2020. Educación IT - Argentina.
                <br />• Security of Sensitive Information at Work, Accenture - 2018.
                <br /> • IT Skills, 2016. Conexion HR - Argentina.
                </h4>

                <h2>EDUCATION</h2>
                <h3>TECLAB - PROGRAMMING CAREER / APR 2020 – FORECAST DEC 2021 - Argentina </h3>
                <h4>• Software developoment on web platforms in HTML, CSS and Java.
                <br />• Databases configuration and implementation using SQL and Oracle.
                <br />• Evoluation the quality of the software through unit tests.
                <br />• Authentication implementation and configuration and access control services.
                <br />• Software management life cycles with project management tools.
                <br />• Software implementation development process in continuous integration systems.
                <br />• Management of structured development design techniques , logic and algorithms.
                <br />• Programming on mobile devices: JAVA and developments for Android. Software development kit (SDK).
                <br />• Android Studio and Android virtual device (AVD).
                <br />• Apps creator with Material Design and Responsive Design.           
                </h4>

                <h3>HENRY TECNOLOGÍAS S.A.S - FULLSTACK WEB DEVELOPER / APR 2020 – AUG 2020 - Argentina </h3>
                <h4>• HTML / CSS
                <br />• Javascript
                <br />• React / Redux
                <br />• Node JS / Express
                <br />• SQL / Mongo / Postgres                
                </h4>
                <h2>LANGUAGES</h2>
                <h4>• Spanish
                <br />• English
                <br />• Portuguese              
                </h4>
                <div id="skill">
                <h2>SKILL</h2>
                <img src={image} alt="image" />
                </div>
            </div>
          </div>
          <footer>
          <SocialFollow />
          </footer>
          </div>

        );
    }
}

export default App