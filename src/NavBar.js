import React ,{Component} from 'react'
import ReactDOM from 'react-dom';
import Contact from './Contact.js'
export class NavBar extends Component { //the NavBar is stateless now

    constructor(props) {
        super(props);
        this.clickHandler=this.clickHandler.bind(this);
    }

    clickHandler(event){
        ReactDOM.render(<Contact/>, document.getElementById('contact'));
    }

    render() {

        return(
        <div id="nav" className="bars">
            <div>
         <a className="nav-links" href="" >Perez Ogayo</a>
                <div className="right-justified">
            <a className="nav-links" href="../public/about.html" onClick={clickHandler(this)}>About</a>
            <a className="nav-links" href="../public/portfolio.html">Portfolio</a>
            <a className="nav-links" href="../public/contact.html">Contact</a>
                    <a className="nav-links" href="../public/gallery.html">Gallery</a></div>
            </div>
        </div>);

    }


}
