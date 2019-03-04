import React,{Component} from 'react';
import hultpitch from "./img/hult-pitching.jpg";

class NishatiPower extends Component{

    render() {
        return (
            <div id="nishati-comp" style={{display:"grid",gridTemplateColumns:"4fr 6fr",gridColumnGap:"30px",boxSizing:"borderBox",paddingLeft:"40px",paddingRight:"40px" }}>
                <div>
                    <img src={hultpitch} alt="Pitching during Hult Prize" style={{width:"100%"}}/>
                </div>
                <div>
                    <h3>Nishati Power(Hult Prize 2018)</h3>
                    <div>
                        Faced with the challenge of Harnessing the power energy to transform the world for good,
                        Together with five other passionate and enthusiastic friends, we birthed Nishati Power.Nishati Power is a social enterprise that seeks to provide clean and affordable energy to low-income earners in Kigali. This will be done by setting up a state of the art biomethane plant that recycles biodegradable wastes from the city to produce high energy biomethane gas for cooking. The gas is then bottled into cylinders and sold to local households at a very affordable price.
                        We won in the Campus Finals and qualified for Regionals in Nairobi where we were at the top 6.
                        <br/>During these project, I got to apply and advance my business development , entrepreneurship, financial modelling and business communication skills as the Chief Finance Officer . I also learnt about the energy ecosystem in Africa and the challenges that faces the sector.
                    </div>
                </div>
            </div>
        );
    }


}
export default NishatiPower;
