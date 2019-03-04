import React, { Component } from 'react';
import './App.css';
import NishatiPower from './NishatiPower.js'

class Portfolio extends Component {
    render() {
        return (
            <div className="pages">
                <p>Portfolio</p>
                <NishatiPower/>
            </div>
        );
    }
}
export default Portfolio;