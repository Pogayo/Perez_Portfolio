import React,{Component} from 'react';
import vuga from "./img/Vuga-hackathon-.jfif";

class Vuga extends Component{

    render() {
        return (
            <div id="vuga-comp" style={{display:"grid",gridTemplateColumns:" 6fr 4fr",gridColumnGap:"30px",boxSizing:"borderBox",paddingLeft:"40px",paddingRight:"40px" }}>
                <div>
                    <h3>Vuga App(Mozilla Common Voice Challenge)</h3>
                    <div>
                        This was an app we created in a team of 4 during Voice Interaction hackathon organized by GIZ, Mozilla and kLab in February 12th 2019.
                        With voice technologies  being adopted at a very fast rate, it is necessary that we have a large data bank of voice recordings for training the AI models. Infrastructure and algorithms to do so already exist, however, there are insufficient voice recordings especially in less spoke languages.
                        Our challenge  was how to incentivize the collection of voice data in  Kinyarwanda.
                        <br/>Vuga  is a mobile app where users share their ‘voices’. This voice comes in forms of jokes, Motivationals, Preachings, and speeches.  Think of Vuga as a social media platform where people communicate mostly through exchange of voices.From the platform, we then collect labelled and unlabelled voice data which can then be used to train AI models.
                        <br/>The app is buid using  Flutter and available for Android OS.
                    </div>
                </div>
                <div>
                    <img src={vuga} alt="Pitching during Hult Prize" style={{width:"100%"}}/>
                </div>

            </div>
        );
    }


}
export default Vuga;