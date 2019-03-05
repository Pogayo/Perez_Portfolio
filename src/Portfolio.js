import React, { Component } from 'react';
import './App.css';
import NishatiPower from './NishatiPower.js'
import Vuga from './Vuga.js'

class Portfolio extends Component {
    render() {
        return (
            <div className="pages">
                <p>Portfolio</p>
                <NishatiPower/>
                <Vuga/>
            </div>
        );
    }
}
export default Portfolio;