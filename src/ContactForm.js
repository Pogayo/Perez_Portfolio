import React, {Component} from 'react';


const pStyle = {
    textAlign: 'center',
    marginBottom:"20px",
};


export class ContactForm extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>
                <div>
                    <div style={pStyle}>Drop me an email about a potential project or even just say hello</div>
            <form   id='form'>
                <input type="text" placeholder="Full Name" className="form-text-input"/>
                <input type="text" placeholder="Email" className="form-text-input"/>
                <textarea  placeholder="Your message" className="form-text-input"/>
                <button type="submit" id="submit-button">Send</button>
            </form>
                </div>
            </div>
        );
    }


}