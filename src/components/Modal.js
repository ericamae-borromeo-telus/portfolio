import React from 'react';
import '../styles/styles.css'
import FontAwesome from 'react-fontawesome';

const Modal = (props) => {
 
  const { closeModal } = props;

  const title = props.title;
  const description = props.description;
  const features = props.features;
  const tools = props.tools;
  const link = props.link;
  const repo = props.repo;

  const closeicon = () => (
    //Close icon
    <FontAwesome
    name="times"
    onClick={closeModal}
    style={{
      color: '#000000',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 0,
      position: 'absolute',
      top: '0.3rem',
      right: '0.5rem',
    }}
    />
  );
  //array of project images
  const projImg = ["https://i.ibb.co/YZwT6D9/game-builder.png", "https://i.ibb.co/j5MKm1t/interior-website.png", "https://i.ibb.co/fS6bLNq/stoic-api.png", "https://i.ibb.co/TR3tSTx/blog-site.png", "https://i.ibb.co/yNcr8GH/elle.png","https://i.ibb.co/Vgh9Mvd/weekend-site.png" ];

  const leftImg = ["https://i.ibb.co/8DZYN77/lears-admin.png", "https://i.ibb.co/JjjxfSp/interior.png", "https://i.ibb.co/RSx0pjg/stoic.png", "https://i.ibb.co/GRynD3y/snippet.png", "https://i.ibb.co/tYpPGYv/elle1.png", "https://i.ibb.co/7NXrNY8/weekend.png"];

  const rightImg = ["https://i.ibb.co/sCbwM3S/lears-quest1.png", "https://i.ibb.co/8r7WzdY/interior-2.png", "https://i.ibb.co/3dByCNP/stoic-doc.png", "https://i.ibb.co/rHc0Kp6/snippet-1.png" , "https://i.ibb.co/jrb5hb0/elle-1.png" , "https://i.ibb.co/c69kn94/weekends.png" ];
 
  return (
    <>
    <div className="overlay">
      <div className="content">
        {closeicon()}
        {props.children}
          <div className="project-modal">
              <h3>{title}</h3>
              <img src={projImg[props.projId]} style={{width: '90%'}} alt="mock image of project" /> 
              <br/>
              {/*Brief Description */}  
              <br/>
              <p>{description}</p>

              <div className="row tools">
                <div className="col-12 col-md-6">
                  {/*Features */}  
                  <h5>Features</h5>
                  <ul>  
                    {features.map(feature => <li>{feature} </li>)}
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  {/*Tech Used */}  
                  <h5>Tools & Technology</h5>    
                  <ul>
                    {tools.map(tool => <li>{tool} </li>)}
                  </ul>
                </div>
              </div>

              {/*Screenshots */}  
              <div className="row gy-2">
                <div className="col-12 col-sm-6">
                  <img src={leftImg[props.projId]} style={{width: '90%'}} alt="screenshot one of the project"/> 
                </div>
                <div className="col-12 col-sm-6">
                  <img src={rightImg[props.projId]} style={{width: '90%'}} alt="screenshot two of the project" /> 
                </div>                
              </div>

              {/*Link and repo*/}  
              <div className="links d-flex justify-content-between">
                <a href={link} target="_blank"><button type="button" className="btn btn-demo">Demo</button> </a>
                <a href={repo} target="_blank"><button type="button" className="btn btn-repo">Repo</button> </a> 
              </div>

          </div>
      </div>
    </div>
    </>
    );

 
  
};


export default Modal;
