import React,{Component} from 'react';
import NishatiPower from './NishatiPower.js'

class FromMyPorfolio extends Component{

    render(){
        return(
            <div id="from-my-portfolio" style={{height:"400px",backgroundColor:"#313B54", textAlign:"center",color:"white"}}>
                <h3>From My Portfolio</h3>
                <NishatiPower/>
            </div>
        );
    }

}
export default FromMyPorfolio;