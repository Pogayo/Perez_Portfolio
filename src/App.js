import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Contact from "./Contact.js";
import Home from "./Home.js"
import Error from "./Error.js"
class App extends Component {
  render() {
    return (


        <BrowserRouter>
            <div>
            <NavBar/>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} />
                <Route component={Error}/>
            </Switch>
                <Footer/></div>
        </BrowserRouter>


    );
        }
}

export default App;
