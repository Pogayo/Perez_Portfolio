import React ,{Component} from 'react'
import{NavLink} from "react-router-dom";

export class NavBar extends Component { //the NavBar is stateless now

    constructor(props) {
        super(props);
        //this.clickHandler=this.clickHandler.bind(this);
    }



    render() {

        return(
        <div id="nav" className="bars">
            <div>
         <NavLink className="nav-links" to="/" >Perez Ogayo</NavLink>
                <div className="right-justified">
            <NavLink className="nav-links" to="/about" >About</NavLink>
            <NavLink className="nav-links" to="/portfolio">Portfolio</NavLink>
            <NavLink className="nav-links" to="/contact">Contact</NavLink>
                    <NavLink className="nav-links" to="">Gallery</NavLink></div>
            </div>
        </div>);

    }


}
