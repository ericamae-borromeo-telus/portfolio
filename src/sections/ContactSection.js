
import logo from '../assets/imgs/new-logo.png';
import {useState} from 'react';
import * as emailjs from "@emailjs/browser";

const ContactSection = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [from_name, setName] = useState("");
    let messageStatus = "Send message";
    
    //email js credentials

    const SERVICE_ID = "service_q466ovw";
    const TEMPLATE_ID = "template_ihpyhcg";
    const USER_ID = "6n8ioGGC6b0q8Ie5A";

    const handleClick = () => {
        //to send message to my email
        let data = {
          reply_to:email,
          message:message,
          from_name:from_name,
        };
        
        emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
        .then(
          function (response) {
            messageStatus = "Message sent"
            console.log(response.status, response.text);
          },
          function (err) {
            console.log(err);

          }
        );
      }
    return (
        <>

            <section className="section contact-section" id="contactSection">

                <div className="row">                 
                    <a href="https://blog.emborromeo.com/" target="_blank"><button type="button" className="btn more-button" >More blogs <i class='bx bx-right-arrow-alt'></i></button> </a>

                    <div className="contact-form">
                        <h4 data-aos="fade-down">GET IN TOUCH</h4>       
                        <form onSubmit={handleClick} data-aos="fade-up">
                            <div className="form-group ">
                                <input type="text" name="from_name" className="form-control" placeholder="Name" id="name"   onChange={(event) => setName(event.target.value)} required />
                            </div>
                            <div className="form-group ">
                                <input type="email" className="form-control" placeholder="Email" name="email" id="email"   onChange={(event) => setEmail(event.target.value)} required />
                            </div>
                            <div className="form-group ">
                                <textarea className="form-control" name="message" placeholder="Message..." rows="6"   onChange={(event) => setMessage(event.target.value)} required></textarea>
                            </div>
                
                            <div className="text-center"><button type="submit" className="btn btn-send">{messageStatus}</button></div>
                        </form>
                    </div>  
                </div>
                               
            </section>

            <footer className="section footer"  id="#footerSection">
                <img src={logo} alt="logo" id="logo"/>
                <div className="copyright">
                    &copy; EM Borromeo 2022
                </div>
            </footer>    
        </>    
     
    )
    
}

export default ContactSection;