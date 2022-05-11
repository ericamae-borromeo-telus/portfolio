import '../styles/styles.css'

const HeroSection = () => {

    return(
        <>

        <section className="section hero-section" id="heroSection">
            <div className="header container-fluid" data-aos="fade-right">
                <h1>Hello, it's EM</h1>
                <h3>a full stack developer</h3>

                <div className="contact-links" >
                    <a href="https://dev.to/yugtotech" target="_blank”"className="dev-to"><i className="bx bxl-dev-to"></i></a>
                    <a href="https://twitter.com/emsapinit" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/emborromeo/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://blog.emborromeo.com/" target="_blank" className="globe"><i className="bx bx-globe"></i></a>         
                    <a href="https://github.com/emborromeo" target="_blank" className="github"><i className="bx bxl-github"></i></a>
            
                </div>   
                <a href="mailto:hello@emborromeo.com"><button className="btn hero-btn" data-aos="fade-right">let's get in touch</button> </a> 


            </div>
          
        </section>


        </>
    )
 


}


export default HeroSection