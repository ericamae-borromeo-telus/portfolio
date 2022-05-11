import '../styles/styles.css'
import  React, {useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import {NavLink, Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = () =>{
    useEffect(() => {
        AOS.init({ duration: 800});
      }, []);
  
  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid ">
                    <div className="justify-content-start collapse navbar-collapse d-flex align-items-center min-vh-100"  id="navbarTogglerDemo02">
                        <ul className="navbar-nav social-links " >
                            
                            <li className="nav-item">
                                <Link 
                                smooth to="/portfolio/#heroSection" >
                                <i className="bx bx-home"></i>
                                </Link>                          
                            </li>

                            <li className="nav-item">
                                <Link 
                                smooth to="/portfolio/#aboutSection">
                                <i className="bx bx-user"></i>
                                </Link>              
                            </li>
            
                            <li className="nav-item">
                                <Link 
                                smooth to="/portfolio/#skillSection" >
                                <i className="bx bx-code-curly"></i>
                                </Link>                                
                            </li>

                            <li className="nav-item">
                                <Link 
                                smooth to="/portfolio/#projectSection" >
                                <i className="bx bx-folder"></i>
                                </Link>   
                            </li>

                            <li className="nav-item">
                                <Link 
                                smooth to="/portfolio/#blogSection" >
                                <i className="bx bx-receipt"></i>
                                </Link> 
                            </li>

                            <li className="nav-item">
                                <Link 
                                smooth to="/portfolio/#contactSection" >
                                <i className="bx bx-envelope"></i>
                                </Link>
                            </li>  
                           
                                 
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />

        </>
    )
}

export default NavBar