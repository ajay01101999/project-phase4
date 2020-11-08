import React from 'react';
import './Contact.css';

const Contact=()=>{
    return(
        <div className="contact" style={{backgroundColor:'#5a5959'}} id="cont">
        <h1>Contact us</h1>      
        <span><a href="#nav"><i class="fas fa-angle-double-up"></i></a></span>
        <div className="i4">
        <i style={{marginLeft:"60px",fontSize:'70px'}} className="fab fa-facebook"></i>
        <i style={{marginLeft:"60px",fontSize:'70px'}} className="fab fa-linkedin"></i>
        <i style={{marginLeft:"60px",fontSize:'70px'}} className="far fa-envelope"></i>
        </div>
        <div className="i0">
        <input type="email" placeholder="Enter your E-mail" className="i1"/>
        <input type="text" placeholder="Enter your query" className="i2"/>
        <input type="text" placeholder="Enter your feedbacks" className="i3"/>
        </div>

        </div>
    )
}

export default Contact;