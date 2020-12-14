import React, { Component } from 'react';
import PropTypes from 'prop-types';
import layer1 from './brain/layer1.png';
import layer2 from './brain/layer2.png';
import layer3 from './brain/layer3.png';
import layer4 from './brain/layer4.png';
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";


console.log(layer1);

class Me extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: 'about', // can be ABOUT || EMBEDDED || COMPSCI || ML
        }
    }

    about(){
        return(
            <div className="body">
            <p>
                I am an engineer of electronics and computer science interested in abstraction layers from assembly to system software and back-end to front-end in web and app development.

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
        return(
            <div className="body">
                <div className="brainbase">
                    {/* <div class="braintop bottom"> */}
                    <img src={layer3} className="braintop bottom"/>
                    <img src={layer2} className="braintop middle"/>
                    <img src={layer1} className="braintop top"/>
                    <img src={layer4}/>
                        {/* </div>	 */}
                    {/* <div class="braintop middle"><img src="../css/brain/layer2.png" class="braintop middle" style="height:400px;"/></div>
                    <div class="braintop top"><img src="../css/brain/layer1.png" class="braintop top" style="height:400px;"/></div> */}
                    {/* <img src=""/> */}
                </div><br/><br/>
                <h1>
                Software
                </h1>
                <p>
                After my introduction to web technologies, I started to love teaching myself different frameworks and modern tools and used them for my start-up.
                </p>

                <p>
                <a href="https://gitjournal.com" className="inline-link">Git Journal</a>: A version controlled journalling application, built using the <b>MERN</b> stack, that offer a new kind of writing and authoring experience.
                </p>

                <p>
                <a href="https://lookingbus.com" className="inline-link">Looking bus</a>: An <b>android app</b> that communicates with street beacon devices to make travel on buses easier and safer for blind or visually impaired people.
                </p>
            </div>
        );
    }

    embedded(){
        return(
            <div className="body">
                <h1> Embedded Systems</h1>
                <p>I played with circuits and programmed since 13, and I love both EE and CS. I find Embedded Systems to be the best of both worlds.</p>
                <h1>Projects:</h1>
                <p><a className="inline-link">Crowd Sourced Rescue Robot</a>: Sending rescue robots into disaster struck areas to aid rescue workers through crowd help. The deep dive into the project is written in the presentation.</p>

                <p><a className="inline-link">Virtual Reality Controller Headset</a>: Giving an intuitive and immersive control for the rescue worker with VR control.</p>

                <p><a className="inline-link">Looking Bus Beacon</a>: A beacon device that make bus travel easy and safe for visually impaired people. </p>
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
                    <a onClick={() => {this.setState({location: 'about'})}}> chingun kh </a>
                </h1>
                <p className="navbar-links">
                    <a onClick={() => {this.setState({location: 'embedded'})}}> Embedded </a>
                    <a onClick={() => {this.setState({location: 'csml'})}}> CS & ML </a>
                    <a href="https://www.linkedin.com/in/chingun-khasar-93157a11a/"> linkedin </a>
                    <a href="mailto:chingun@umich.edu"> email </a>
                    <a href="https://github.com/chingun"> gitjournal </a>
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