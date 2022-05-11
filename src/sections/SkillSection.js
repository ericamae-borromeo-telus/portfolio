import '../styles/styles.css'

import react from '../assets/imgs/react.png'
import html from '../assets/imgs/html.png'
import node from '../assets/imgs/node.png'
import css from '../assets/imgs/css.png'
import js from '../assets/imgs/js.png'
import git from '../assets/imgs/git.png'
import github from '../assets/imgs/github.png'


const SkillSection = () => {
    return(
        <>
            <section className="section skill-section"  id="skillSection">
                <div className="skill-container">
                    <h4 data-aos="fade-down">SKILLS</h4>
                    <div className="row skill-tools g-0" data-aos="fade-up">
                        <div className="col col-3">
                            <img className="img-fluid" src={react} alt="skill logo"/>
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={git} alt="skill logo"/>
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={github} alt="skill logo"/>
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={node} alt="skill logo"/>
                        </div>
                    </div>

                    <div className="row skill-tools g-0" data-aos="fade-up">
                        <div className="col col-3">
                            <img className="img-fluid" src={html} alt="skill logo"/>
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={css} alt="skill logo"/>
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={js} alt="skill logo"/>
                        </div>
                       
                    </div>
                </div> 

            </section>
        
        
        </>
    )


}


export default SkillSection