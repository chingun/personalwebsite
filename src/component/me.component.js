import React, { Component } from 'react';
import PropTypes from 'prop-types';
import layer1 from './brain/layer1.png';
import layer2 from './brain/layer2.png';
import layer3 from './brain/layer3.png';
import layer4 from './brain/layer4.png';
import heart from './circuit/retroheart.png';
import circuit from './circuit/retroboardclean.png';
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import {Keyframes, Spring, animated} from 'react-spring/renderprops'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Container = Keyframes.Spring(async next => {
    while (true) {
      await next({
        from: { radians: 0, color: '#247BA0' },
        to: { radians: 2 * Math.PI },
      })
    }
})

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
                I spend a lot of my time developing <a href="https://gitjournal.com" className="inline-link">Gitjournal</a>, Github for notes. </p> 
            <p>
                During Daytime I work as a firmware engineer at <a href="https://apple.com" className="inline-link">Apple</a>.
            </p> 
            <p>
                I am an electronics and computer science engineer who love building awesome things.</p><p>
                I professionally develop <b>firmware </b> in Internet of Things &<br/> <b>full-stack</b> in web apps. <br/>

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
        const Content = ({ radians, color }) =>
        this.state.items.map((_, i) => (
            <animated.svg
                key={i}
                style={{
                width: 50,
                height: 50,
                willChange: 'transform',
                transform: radians.interpolate(
                    r =>
                    `translate3d(0, ${50 *
                        Math.sin(r + (i * 2 * Math.PI) / 5)}px, 0)`
                ),
                }}
                viewBox="0 0 400 400">
                <animated.g fill={color} fillRule="evenodd">
                    <path id="path-1" d="M20,380 L380,380 L380,380 L200,20 L20,380 Z" />
                </animated.g>
            </animated.svg>
        ))
          const { items } = this.state
          return(
            <div className="body">
                <div className="brainbase">
                    {/* <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'palevioletred',
                        }}>
                        <Container
                        reset
                        native
                        keys={items}
                        //impl={TimingAnimation}
                        config={{ duration: 2000 /*, easing: Easing.linear/ }}>
                        {Content}
                        </Container>
                    </div> */}
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
                    {/* <div class="braintop middle"><img src="../css/brain/layer2.png" class="braintop middle" style="height:400px;"/></div>
                    <div class="braintop top"><img src="../css/brain/layer1.png" class="braintop top" style="height:400px;"/></div> */}
                    {/* <img src=""/> */}
                </div><br/><br/>
                <h2>
                Software
                </h2>
                <p>
                After my introduction to web technologies, I started to love teaching myself different frameworks and modern tools and used them for my start-up.
                </p>

                <p>
                <a href="https://gitjournal.com" className="inline-link">Git Journal</a>: A version controlled journalling application, built using the <b>MERN</b> stack, that offer a new kind of writing and authoring experience.
                </p>

                <p>
                <a href="https://lookingbus.com" className="inline-link">Looking bus</a>: An <b>android app</b> that communicates with street beacon devices to make travel on buses easier and safer for blind or visually impaired people.
                </p>
                <h2>Skills:</h2><p>
                Libraries: Pytorch, Redux, MongoDB, ExpressJS, ReactJS and NodeJS<br/>
                Languages: C, C++, Javascript, Python, Swift, Assembly and Verilog</p>
            </div>
        );
    }
      
    embedded(){
        return(
            <div className="body">
                <div className="embedbase">
                    <img src={circuit} className="embed"/>
                    <div className="embed top">
                        <img src={heart} className="embed top"/>
                    </div>	
                </div><br/><br/><br/>
                <h2> Embedded Systems</h2>
                <p>I love both EE and CS. I find Embedded Systems to be the best of both worlds.</p>
                <h2>Projects:</h2>
                <p><a className="inline-link">Looking Bus Beacon</a>: A beacon device that make bus travel easy and safe for visually impaired people. </p>

                <p><a className="inline-link">Crowd Sourced Rescue Robot</a>: Sending rescue robots into disaster struck areas to aid rescue workers through crowd help.</p>

                <p><a className="inline-link">Virtual Reality Controller Headset</a>: Giving an intuitive and immersive control for the rescue worker with VR control.</p>

                <h2>Proficient Skills:</h2>
                <p> RTOS development <br/>Protocols & JTAG debugging<br/>Device Driver programming (LKM)<br/>FPGA & Assembly development<br/>Hardware Bring <br/>GPIO, I2C, SPI, UART and BLE communication</p>
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
                    <a onClick={() => {this.setState({location: 'embedded'})}}> Embedded </a>
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