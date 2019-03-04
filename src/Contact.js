import React, { Component } from 'react';
import './App.css';
import phone from "./img/phone-icon.svg";
import email from "./img/email-icon.svg";
import post from "./img/post-icon.svg";
import {ContactForm} from './ContactForm'

class Contact extends Component {
    render() {
        return (
            <div className="pages ">
                <div className="contact-page">
                <ContactForm/>
                <div id="contact-inf-container" className="flex-container-col" >
                    <div id="phone" className="contact-inf">
                        <img src={phone} alt="phone icon" width="70px" height="70px" />
                        <div >
                            +254790697295<br/>
                            +250785774412
                        </div>
                    </div>
                    <div id="cont-email" className="contact-inf">
                        <img src={email} alt="phone icon" width="70px" height="70px" />
                        <div>
                            pogayo17@gmail.com<br/>
                            perezogayo@gmail.com
                        </div>
                    </div>
                    <div id="phone" className="contact-inf">
                        <img src={post} alt="phone icon" width="70px" height="70px" />
                        <div>
                            African Leadership University<br/>Kigali Heights Complex, 2nd floor<br/>
                            KG 7 Avenue,Kigali Rwanda
                        </div>
                    </div>
                </div>
                </div></div>
        );
    }
}

//ReactDOM.render(<Contact/>, document.getElementById('contact'));



export default Contact;