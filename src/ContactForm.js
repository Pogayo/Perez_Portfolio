import React, {Component} from 'react';


export class ContactForm extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>
                <div>
                    <div>Dropme an email about a potential project or even just say hello</div>
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