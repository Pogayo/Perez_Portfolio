import React,{Component} from 'react'

export class Footer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div id="footer" className="bars">
              <span> @copy Perez Ogayo 2019. All rights reserved</span>
                <div className="right-justified">
                    <a className="nav-links">Github</a>
                    <a className="nav-links">LinkedIn</a>
                    <a className="nav-links">Twitter</a>
                    <a className="nav-links">Facebook</a>
                </div>
            </div>
        );
    }
}