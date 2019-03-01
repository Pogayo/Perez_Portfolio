import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";

import {ContactForm} from './ContactForm'

class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <ContactForm/>
                <Footer/>
            </div>
        );
    }
}

//ReactDOM.render(<Contact/>, document.getElementById('contact'));



export default Contact;