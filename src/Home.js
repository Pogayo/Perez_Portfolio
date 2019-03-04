import React, { Component } from 'react';
import './App.css';
import codepic from "./img/code-pic.jpg";
import Skills from "./Skills"
import FromMyPorfolio from "./FromMyPorfolio";

class Home extends Component {
    render() {
        return (
            <div id="home" className="pages">
                <div className="top-pic">
                    <img src={codepic} alt="a picture of perez Ogayo" class="full-width-img"/>
                    <p className="centered">I<span className="purple">'</span>M PEREZ OGAYO<span className="purple">.</span></p>
                </div>
                <div id="summary" >
                    <p style={{width:"350px"}}>I identify as a people-loving young African female existing to leverage the existing technology and the fantastic potential in humanity to transform the world.  I am a passionate entrepreneur who cofounded Nishati Power, Pick&Go and Mshauri Trust.</p>
                </div>
                <Skills/>
                <FromMyPorfolio/>
            </div>
        );
    }
}
export default Home;