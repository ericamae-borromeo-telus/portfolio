import '../styles/styles.css'
import cv from '../assets/docs/borromeo-cv.pdf'
import img from '../assets/imgs/pic-about.png'

const AboutSection = () => {
    return(
        <>    
            <section className="section about-section" id="aboutSection">
                <div className="about-container">
                    <h4 data-aos="fade-down">ABOUT EM</h4>
                    <div className="row basic-info">
                        <div className="col-12 col-sm-5 col-md-6 col-lg-6" >
                        <img src={img} alt="portfolio owner" data-aos="fade-right"/>
                        </div>

                        <div className="col-12 col-sm-7 col-md-6 col-lg-6" >   
                            <ul className="about-info" data-aos="fade-left">
                                <li><b>NAME</b></li>
                                <li>Erica Mae Borromeo</li>
                                <li><b>EMAIL</b></li>
                                <li> hello@emborromeo.com </li>
                                <li><b>LOCATION</b></li>
                                <li>Luzon, PH</li>
                            </ul>
                        </div>

                    </div>

                    <div className="row interests" data-aos="fade-up">
                        <p>      
                        It’s me E.M, a wanderer by heart who was fascinated by motherboards at five, now exploring her passion in the field of Information Technology and currently creating her own path to become what she always wanted to be- a full-stack developer.
                        </p>
                        <p>
                        Coding, for her, isn’t just something she wants to pursue as a career. But it is something she wants to keep doing on late evenings, friday nights and on weekends, like a hobby. (but hey she still has a life) She likes to write, travel and explore by reading good books especially the works of Plath and Poe, listen to indie folk songs and do yoga when not in front of her laptop.
                        </p>
                       
                        <a href={cv} target="_blank"><button type="button" className="btn cv-button" >Download CV</button> </a>
            

                    </div>
                </div>
            </section>

        
        </>
    )

}

export default AboutSection