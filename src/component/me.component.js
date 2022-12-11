import React, { Component } from 'react';
import layer1 from './brain/layer1.png';
import layer2 from './brain/layer2.png';
import layer3 from './brain/layer3.png';
import layer4 from './brain/layer4.png';
import heart from './circuit/retroheart.png';
import circuit from './circuit/retroboardclean.png';
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import fdl from "./papers/FDL.pdf";
import dl from "./papers/DL.pdf";


class Me extends Component {
    constructor(props){
        super(props);
        const current = new Date();
        const months = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec']
        const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`

        this.state = {
            location: 'about', // can be ABOUT || EMBEDDED || COMPSCI || ML
            items: [],
            date: date
        }
    }

    about(){
        return(
        <div className="body">
            <p> I am a graduate student at NYU researching <a href="https://github.com/jiachenzhu/VICReceiver" onClick={() => {this.setState({location: 'csml'})}} className="inline-link">Self-Supervised Learning</a> and <a href="/#" onClick={() => {this.setState({location: 'csml'})}} className="inline-link">Deep Reinforcement Learning</a>. </p>
            <p> I am also building a startup <a href="https://www.absurdum.in" className="inline-link">Absurdum</a>, a  democratized fine art print website. </p> 
            <p> Before grad school, I worked at <a href="https://apple.com" className="inline-link">Apple</a> as a firmware engineer. </p>  
        </div>
        );
    }

    cs(){ 
        if (this.state.location !== "cs"){
            return(<></>)
        }
          return(
            <div className="body"> 
                <h2>  Software </h2> 
                <p> <a href="https://www.absurdum.in" className="inline-link" alt="st" >Absurdum</a>: a democratized ecommerce for artists to publish and profit from their artworks, built using <b>NextJS</b>, <b>GraphQL</b>, <b>MongoDB</b> with <b>Google Cloud Platform</b>.
                </p>
                <p> <a href="https://github.com/chingun/gitjournal-mvp" className="inline-link" alt="st" >Git Journal</a>: A version controlled journalling application, built using the <b>MERN</b> stack, that offer a new kind of writing and authoring experience.
                </p>
                <p> <a href="https://lookingbus.com/" className="inline-link" alt="st" >Looking bus</a>: An <b>android app</b> that communicates with street beacon devices to make travel on buses easier and safer for blind or visually impaired people.
                </p>
                <p className="footnotes"> <h3>Proficient Skills:</h3> 
                Libraries: NextJS, GraphQL, MongoDB, ExpressJS, ReactJS and NodeJS<br/>
                Languages: C, C++, Javascript, Python, Swift, Assembly and Verilog </p> <br/> 
            </div>
        );
    }

    ml(){ 
        if (this.state.location !== "ml"){ return(<></>) }
        return (
            <div className="body">
                <div className="brainbase">
                    <div class="braintop bottom">
                        <img src={layer3} alt="st" className="braintop bottom"/>
                    </div>	
                    <div class="braintop middle">
                        <img src={layer2} alt="st" className="braintop middle"/>
                    </div>	
                    <div class="braintop top">
                        <img src={layer1} alt="st" className="braintop top"/>
                    </div>	
                    <img src={layer4} alt="st"/>
                </div><br/><br/>
                <h2>AI Projects</h2> 
                <p> <a href="https://github.com/jiachenzhu/VICReceiver" className="inline-link" alt="st">Self-Supervised Driving</a>: developing a self supervised method to solve autonomous vision.
                </p>
                <p> <a className="inline-link" alt="st">Provable Robust Defenses against Data Poisoning Attacks</a>: Within the scope of this project, my team analyzed provable robustness against data poisoning attacks from the lenses of <br/><br/> a) randomized smoothing, <br/> b) data partition aggregation <br/> c) differential privacy.
                </p> <embed src={fdl} type="application/pdf" 
                            frameBorder="0"
                            scrolling="auto"
                            height="500px"
                            width="100%" />
                <p> <a href="https://www.absurdum.in" className="inline-link" alt="st">Benchmark for Instance-Level Recognition</a>: An efficient model for large-scale landmark recognition and retrieval.
                </p> <embed src={dl} type="application/pdf" 
                            frameBorder="0"
                            scrolling="auto"
                            height="500px"
                            width="100%" />
                <p className="footnotes">
                <h3>Proficient Skills:</h3>
                ML Tools: Pytorch, Redux, NextJS, GraphQL, MongoDB, ExpressJS, ReactJS and NodeJS<br/> 
                </p> <br/> 
            </div>
        );
    }
      
    embedded(){
        if (this.state.location !== "embedded"){ return(<></>) }
        return(
            <div className="body">
                <div className="embedbase">
                    <img src={circuit} className="embed" alt="st"/>
                    <div className="embed top">
                        <img src={heart} className="embed top" alt="st"/>
                    </div>	
                </div><br/><br/><br/>
                <h2> Firmware Projects:</h2>
                <p>I love both EE and CS. I find Embedded Systems to be the best of both worlds.</p>
                <p><a href="https://www.spaceplant.io" className="inline-link">Space Plant</a>: A plant app and sensor combo that tells you everything about your plant with capacitive sensors and AI. </p>
                <p><a href="https://lookingbus.com/" className="inline-link">Looking Bus Beacon</a>: A beacon device that make bus travel easy and safe for visually impaired people. </p>
                <p><a href="https://www.youtube.com/watch?v=RmNvX2cUl6A&ab_channel=ElectricalandComputerEngineeringatMichigan" className="inline-link">Crowd Sourced Rescue Robot</a>: Sending rescue robots into disaster struck areas to aid rescue workers through crowd help.</p>
                <p className="footnotes">
                <h3>Proficient Skills:</h3>
                 RTOS development <br/>Protocols & JTAG debugging<br/>Device Driver programming (LKM)<br/>FPGA & Assembly development<br/>Hardware Bring <br/>GPIO, I2C, SPI, UART and BLE communication
                </p> <br/>
            </div> );
    }

    bottom_links(){
        return(
        <div className="footnotes-icons">
            <AiFillGithub href="https://github.com/chingun"/>
            <AiFillInstagram href="https://www.instagram.com/chingunkh"/>
            <AiFillMail href="mailto:chingun@umich.edu"/>
        </div>);
    }
    
    render(){
        return (
            <div className="main-container">
                <div className="navbar">
                    <h1><a className="h1-logo" onClick={() => {this.setState({location: 'about'})}} href="/#"> chingun kh </a> </h1>
                    <p className="navbar-links">
                        <a onClick={() => {this.setState({location: 'ml'})}} href="/#"> AI Research </a>
                        <a onClick={() => {this.setState({location: 'cs'})}} href="/#"> Software </a>
                        <a onClick={() => {this.setState({location: 'embedded'})}} href="/#"> Embedded  </a>
                        <a href="https://www.linkedin.com/in/chingun-khasar-93157a11a/"> linkedin </a>
                        <a href="mailto:chingun@umich.edu"> email </a>
                        <a href="https://github.com/chingun"> git </a> 
                    </p>
                </div>
                {this.state.location === "ml" ? this.ml() : this.state.location === "cs" ? this.cs() : this.state.location === "embedded" ? this.embedded() 
                :  this.state.location === "screener" ? this.screener() : this.about()}
                <br/>
                <p className="footnotes">
                © {this.state.date} All Rights Reserved by Chingun Khasar 
                </p>
            </div> 
        )
    }
}

export default Me;