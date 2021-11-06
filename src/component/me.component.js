import React, { Component } from 'react';
import layer1 from './brain/layer1.png';
import layer2 from './brain/layer2.png';
import layer3 from './brain/layer3.png';
import layer4 from './brain/layer4.png';
import heart from './circuit/retroheart.png';
import circuit from './circuit/retroboardclean.png';
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";


class Me extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: 'about', // can be ABOUT || EMBEDDED || COMPSCI || ML
            items: []
        }
    }

    about(){
        return(
            <div className="body">
            <p>
                I am a graduate student at NYU studying <a onClick={() => {this.setState({location: 'csml'})}} className="inline-link">Deep Reinforcement Learning</a> for Robotic Applications.
            </p>
            <p>
                I spend a lot of my time developing <a href="https://gitjournal.com/explore" className="inline-link">Gitjournal</a>, Github for notes. </p> 
            <p>
                Before grad school, I worked as a firmware engineer at <a href="https://apple.com" className="inline-link">Apple</a>.
            </p> 
            <p>
                I am an computer engineer who love building awesome things.</p><p>
                I professionally develop <b>firmware</b> in Internet of Things & <br/><b>full-stack</b> in web apps. <br/>

                {/* i spend a lot of time w/ api’s these days, as the<br/>
                founder of Alloy Automation (YC W20)<br/><br/>

                before, i wrote code at <b>Apple</b>, <b>GitJournal</b>, & others<br/><br/>

                i also spent time in VC, at Dorm Room Fund & Sway Ventures,<br/>
                which led to my interest in no-code & dev tools<br/><br/>

                during my undergrad at University of Michigan, i helped run<br/>
                HackLodge, Harvard China Forum, HackHarvard<br/><br/>

                on nights i can't sleep, i'll work on NIGHTSHIFT<br/><br/>

                i like foreign films, history museums, books, photography<br/> */}
            </p>
            {/* <p className="footnotes">
            i like foreign films, history museums, books, photography, and udon, which i used to make at Yume <br/> <br/>
            [63% ATL] - [4% SH] - [23% LA] - [5% BOS] - [5% SF]
            </p> */}
            </div>
        );
    }

    csml(){ 
        if (this.state.location !== "csml"){
            return(<></>)
        }
          return(
            <div className="body">
                <div className="brainbase">
                    <div class="braintop bottom">
                        <img src={layer3} className="braintop bottom"/>
                    </div>	
                    <div class="braintop middle">
                        <img src={layer2} className="braintop middle"/>
                    </div>	
                    <div class="braintop top">
                        <img src={layer1} className="braintop top"/>
                    </div>	
                    <img src={layer4}/>
                </div><br/><br/>
                <h2>  Software </h2>
                <p>

                </p>
                <p>
                <a href="https://gitjournal.com/explore" className="inline-link">Git Journal</a>: A version controlled journalling application, built using the <b>MERN</b> stack, that offer a new kind of writing and authoring experience.
                </p>
                <p>
                <a href="https://lookingbus.com/" className="inline-link">Looking bus</a>: An <b>android app</b> that communicates with street beacon devices to make travel on buses easier and safer for blind or visually impaired people.
                </p>
                <p className="footnotes">
                <h3>Proficient Skills:</h3>
                Libraries: Pytorch, Redux, MongoDB, ExpressJS, ReactJS and NodeJS<br/>
                Languages: C, C++, Javascript, Python, Swift, Assembly and Verilog
                </p> <br/>
                {/* // <p> */}
            </div>
        );
    }
      
    embedded(){
        if (this.state.location !== "embedded"){
            return(<></>)
        }
        return(
            <div className="body">
                <div className="embedbase">
                    <img src={circuit} className="embed"/>
                    <div className="embed top">
                        <img src={heart} className="embed top"/>
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
            </div>
        );
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
        return(
        <div className="main-container">
            <div className="navbar">
                <h1>  
                    <a className="h1-logo" onClick={() => {this.setState({location: 'about'})}}> chingun kh </a>
                </h1>
                <p className="navbar-links">
                    <a onClick={() => {this.setState({location: 'embedded'})}}> Firmware </a>
                    <a onClick={() => {this.setState({location: 'csml'})}}> CS & ML </a>
                    <a href="https://www.linkedin.com/in/chingun-khasar-93157a11a/"> linkedin </a>
                    <a href="mailto:chingun@umich.edu"> email </a>
                    <a href="https://github.com/chingun"> git </a>
                </p>
            </div>
            {this.state.location === "csml" ? this.csml() : this.state.location === "embedded" ? this.embedded() : this.about()}
            <br/>
            <p className="footnotes">
            © All Rights Reserved by Chingun Khasar
            </p>
        </div>)
    }
}

export default Me;