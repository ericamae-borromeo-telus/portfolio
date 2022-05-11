import '../styles/styles.css'
import  React, {useState} from 'react';

import Modal from '../components/Modal';


const ProjectSection = (props) => {
  const [status, setStatus] = useState(false);
  const [projID, setProjID] = useState();

  const projTitle = ["Game Builder", "Interior Design", "Stoic API & Firefox Add-on", "Code Snippets", "ELLE", "Weekend React" ]
    
  const projDescription = [
    "A game builder template made for both teachers and students to use. This game builder is a multiple choice type of quiz game where students can have fun and be motivated in gaining knowledge because of its engaging game features such as quests or maps, and reward system ",
    "This is a responsive website for a business that offers Interior and Exterior Design. Every choice of design elements from layout, colors and fonts used suits what the business is. ",
    "This is a free api with collections of sayings from ancient stoic philosophers such as Marcus Aurelius, Seneca and Epictitus.", 
    "This is a web application with collections of code snippets to help developers remember syntax and snippets easily.", 
    "This is a website for a cafe and resto business which displays and tells the story of Elle Cafe & Resto, the feel and taste of what they offer. The design has a unique parallax scrolling effect that suits the theme of the business.", 
    "This is a website about weekend plans created using React and Bootstrap."
  ];

  const projFeatures = [
   [
      "Admin side",
      "User/ Player side", 
      "Gamified Adventure-type quiz", 
      "Create, edit and delete quizzes", 
      "Share quiz code to student"],

    [
      "Home section",
      "About section",
      "Project section",
      "Services section",
      "Process section",
      "Contact & Footer section"
    ],
    [
      "Live Demo for the random route",
      "GET All",
      "GET by ID",
      "GET by Author",
      "GET random",
      "Twitter share button"
    ],
    [
      "Add code snippets",
      "Delete a snippet & Delete All", 
      "Search according to title, description, body and author", 
      "Responsive design"
    ],
    [
      "Parallax Scrolling Effect",
      "About/ Discover section", 
      "Menu", 
      "Contact section"
    ],
    [
      "Home section",
      "Saturday section", 
      "Sunday section", 
      "Creative UI with rounded corner container", 
    ]
   
  ];

  const projTools = [
    [
      "Javascript",
      "MySQL", 
      "PHP", 
      "HTML & CSS",
      "Bootstrap" 
    ],

    [
      "HTML",
      "CSS", 
      "Bootstrap", 
      "HTML & CSS",
      "Javascript",
      "VSCode"
    ],
    [
      "Nodejs",
      "Expressjs",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap"
    ], 
    [
      "Embedded Javascript",
      "Nodejs",
      "Expressjs", 
      "MongoDB"
    ],
    [
      "Vue",
      "CSS",
      "Bootstrap", 
      "Photoshop"
    ],
    [
      "Reactjs",
      "CSS",
      "Bootstrap", 
      "Photoshop"
    ],
   
  ];
  const projLinks = [
    " ", 
    "https://interior-design-website.herokuapp.com/", 
    "https://stoic-api.herokuapp.com/", 
    "https://node-snippet.herokuapp.com/", 
    "https://elle-cafe.emborromeo.repl.co/", 
    "https://ericamaeborromeo.github.io/ericamaeborromeo/"
  ];

  const projRepo = [
    " ", 
    "https://github.com/TIP-Internal-Project/TIDS-ADS-Interns/tree/TeamBASTS/DesignToHTML/Erica-Homepage-D", 
    "https://github.com/emborromeo/stoic-sayings-api", 
    "https://github.com/TIP-Internal-Project/TIDS-ADS-Interns/tree/EricaBorromeo/blog-app", 
    "https://github.com/emborromeo/elle-cafe", 
    "https://github.com/TIP-Internal-Project/TIDS-ADS-Interns/tree/EricaBorromeo/reactjscss03072022"
  ]
  
  return(
        <>
          {status && (
            <Modal closeModal={() => setStatus(false)} 
              title={projTitle[projID]} description={projDescription[projID]} link={projLinks[projID]} repo={projRepo[projID]} features={projFeatures[projID]} tools={projTools[projID]} projId={projID}> 
            </Modal>
          )}
       
          <section className="section project-section" id="projectSection">
              
            <div className="project-container">
              <h4 data-aos="fade-down">PROJECTS</h4>
              <div className="row row-one g-0">

                <div className="col col-12 col-md-6 col-lg-4 proj-card" onClick={() => {setStatus(true); setProjID(0)}} data-aos="fade-up">
                  <img className="img-fluid" src="https://i.ibb.co/YZwT6D9/game-builder.png" alt="project mock up"/>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 proj-card" onClick={() => {setStatus(true); setProjID(1)}} data-aos="fade-down">
                  <img className="img-fluid" src="https://i.ibb.co/j5MKm1t/interior-website.png" alt="project mock up"/>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 proj-card" onClick={() => {setStatus(true); setProjID(2)}} data-aos="fade-up">
                  <img className="img-fluid" src="https://i.ibb.co/fS6bLNq/stoic-api.png" alt="project mock up"/>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 proj-card" onClick={() => {setStatus(true); setProjID(3)}} data-aos="fade-down">
                  <img className="img-fluid" src="https://i.ibb.co/TR3tSTx/blog-site.png" alt="project mock up"/>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 proj-card" onClick={() => {setStatus(true); setProjID(4)}} data-aos="fade-up">
                  <img className="img-fluid" src="https://i.ibb.co/yNcr8GH/elle.png" alt="project mock up"/>
                </div>

                <div className="col col-12 col-md-6 col-lg-4 proj-card" onClick={() => {setStatus(true); setProjID(5)}} data-aos="fade-down">
                  <img className="img-fluid" src="https://i.ibb.co/Vgh9Mvd/weekend-site.png" alt="project mock up"/>
                </div>

                <a href="https://github.com/emborromeo" target="_blank"><button type="button" className="btn cv-button" >More projects <i class='bx bx-right-arrow-alt'></i></button> </a>

              </div>
            </div>
        
          </section>  
              
        </>
    )



}


export default ProjectSection