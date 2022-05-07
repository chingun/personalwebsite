import React, { Component } from 'react';
import layer1 from './brain/layer1.png';
import layer2 from './brain/layer2.png';
import layer3 from './brain/layer3.png';
import layer4 from './brain/layer4.png';
import heart from './circuit/retroheart.png';
import circuit from './circuit/retroboardclean.png';
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";

import '../css/Screener.css';

class Screener extends Component {
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

    screener(){
        // if (this.state.location !== "screener"){
            // return(<>Hello</>)
        // }
        return(
            <>
  {/* Hello world */}
                <table
                    width="100%"
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    className="message"
                >
                    <tbody>
                    <tr>
                        <td>
                        <font size={-1}>
                            <b>NYU Daily Screener </b>&lt;noreply@qemailserver.com&gt;
                        </font>
                        </td>
                        <td align="right">
                        <font size={-1}>Thu, May 5, 2022 at 1:26 PM</font>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ paddingBottom: 4 }}>
                        <font size={-1} className="recipient">
                            <div className="replyto">
                            Reply-To: NYU Daily Screener &lt;noreply@qemailserver.com&gt;
                            </div>
                            <div>To: ck3411@nyu.edu</div>
                        </font>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                        <table width="100%" cellPadding={12} cellSpacing={0} border={0}>
                            <tbody>
                            <tr>
                                <td>
                                <div style={{ overflow: "hidden" }}>
                                    <font size={-1}>
                                    <div>
                                        <table role="presentation" width="100%">
                                        <tbody>
                                            <tr>
                                            <td>
                                                <table
                                                role="presentation"
                                                style={{
                                                    maxWidth: 550,
                                                    margin: "0 auto",
                                                    fontFamily:
                                                    '"Gotham SSm A","Gotham SSm B",Helvetica,Arial,sans-serif',
                                                    border: "none",
                                                    borderCollapse: "collapse"
                                                }}
                                                >
                                                <tbody>
                                                    <tr style={{ background: "#28811e" }}>
                                                    <td
                                                        style={{
                                                        margin: 0,
                                                        textAlign: "center",
                                                        padding: "1rem 0"
                                                        }}
                                                        valign="middle"
                                                        width="50%"
                                                    >
                                                        <h1
                                                        style={{
                                                            fontWeight: "bold",
                                                            fontSize: "1rem",
                                                            lineHeight: "1.5rem",
                                                            color: "#fff",
                                                            textTransform: "uppercase",
                                                            margin: 0
                                                        }}
                                                        >
                                                        Screener Status:
                                                        <br />
                                                        <span
                                                            style={{
                                                            fontSize: "4rem",
                                                            lineHeight: "4rem"
                                                            }}
                                                        >
                                                            Pass
                                                        </span>
                                                        </h1>
                                                    </td>
                                                    <td
                                                        style={{ padding: "1rem 0" }}
                                                        valign="bottom"
                                                        width="50%"
                                                    >
                                                        <p
                                                        style={{
                                                            color: "#ffffff!important",
                                                            fontSize: ".9rem"
                                                        }}
                                                        >
                                                        For access to NYU buildings, you must
                                                        also be approved to be on campus and
                                                        comply with all health and safety
                                                        protocols.
                                                        </p>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td
                                                        colSpan={2}
                                                        style={{ padding: "1rem 0" }}
                                                        valign="middle"
                                                    >
                                                        <p
                                                        style={{
                                                            fontWeight: "bold",
                                                            fontSize: "1.5rem",
                                                            lineHeight: "100%",
                                                            margin: 0,
                                                            paddingBottom: ".5rem",
                                                            textAlign: "center"
                                                        }}
                                                        >
                                                        Chingun Khasar
                                                        </p>
                                                        <p
                                                        style={{
                                                            fontWeight: "bold",
                                                            fontSize: "1.5rem",
                                                            lineHeight: "100%",
                                                            margin: 0,
                                                            textAlign: "center"
                                                        }}
                                                        valign="middle"
                                                        >
                                                        {this.state.date}
                                                        </p>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <table role="presentation" width="100%">
                                        <tbody>
                                            <tr>
                                            <td>
                                                <table
                                                role="presentation"
                                                style={{
                                                    maxWidth: 550,
                                                    margin: "0 auto",
                                                    fontFamily:
                                                    '"Gotham SSm A","Gotham SSm B",Helvetica,Arial,sans-serif',
                                                    color: "#333"
                                                }}
                                                >
                                                <tbody>
                                                    <tr>
                                                    <td style={{ paddingBottom: 20 }}>
                                                        <p style={{ paddingTop: 15 }}>
                                                        <strong
                                                            style={{
                                                            textTransform: "uppercase"
                                                            }}
                                                        >
                                                            Remember
                                                        </strong>
                                                        </p>
                                                        <ul>
                                                        <li>
                                                            You need to show this screen result
                                                            to a Campus Safety Officer at the
                                                            building entrance
                                                        </li>
                                                        <li>
                                                            You must always wear a face covering
                                                            over your nose and mouth while on
                                                            NYU property unless otherwise
                                                            provided under University guidelines
                                                        </li>
                                                        <li>
                                                            For a complete list of
                                                            COVID-19-related protocols and
                                                            guidelines visit the{" "}
                                                            <a
                                                            href="https://www.nyu.edu/nyureturns"
                                                            target="_blank"
                                                            data-saferedirecturl="https://www.google.com/url?hl=en&q=https://www.nyu.edu/nyureturns&source=gmail&ust=1652044721581000&usg=AOvVaw00jrNbhqpdZiUJWw42741e"
                                                            >
                                                            NYU Returns website
                                                            </a>
                                                        </li>
                                                        </ul>
                                                        <p>
                                                        <strong
                                                            style={{
                                                            textTransform: "uppercase"
                                                            }}
                                                        >
                                                            If You Start To Feel Sick
                                                        </strong>
                                                        </p>
                                                        <ol>
                                                        <li>
                                                            Immediately find a place away from
                                                            others.
                                                        </li>
                                                        <li>
                                                            Complete the{" "}
                                                            <a
                                                            href="https://www.nyu.edu/coronavirus/reporting"
                                                            target="_blank"
                                                            data-saferedirecturl="https://www.google.com/url?hl=en&q=https://www.nyu.edu/coronavirus/reporting&source=gmail&ust=1652044721581000&usg=AOvVaw2S_zJTe80GImQYPoPAS3in"
                                                            >
                                                            COVID-19 Reporting Form
                                                            </a>{" "}
                                                            to notify the NYU COVID-19
                                                            Prevention &amp; Response Team.
                                                        </li>
                                                        <li>
                                                            Go home promptly.
                                                            <ul>
                                                            <li>
                                                                If you are a faculty member or
                                                                employee, alert your department
                                                                chair or supervisor that you
                                                                will be going home sick. You are
                                                                not required to disclose any
                                                                details about your medical
                                                                history or experiences.
                                                            </li>
                                                            <li>
                                                                If you live in an NYU Residence
                                                                Hall or NYU apartment, you
                                                                should stay in your room. If you
                                                                share common spaces with other
                                                                people, wear your face covering
                                                                and separate yourself as much as
                                                                possible. The NYU COVID-19
                                                                Prevention &amp; Response Team
                                                                will contact you between the
                                                                hours of 9:00 a.m.–9:00 p.m.
                                                            </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            If you need medical care or
                                                            additional health guidance, contact
                                                            the Student Health Center (students)
                                                            or your personal medical provider
                                                            (faculty and employees).
                                                        </li>
                                                        </ol>
                                                        <p>
                                                        <em>
                                                            The NYU Daily COVID-19 Screener for
                                                            Campus Access is not intended to
                                                            take the place of consultation with
                                                            your medical provider or for the
                                                            diagnosis or treatment of disease or
                                                            other conditions. If you're in an
                                                            emergency medical situation, please
                                                            call 911 or your local emergency
                                                            number.
                                                        </em>
                                                        </p>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    </font>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </>
        );

    }
    
    render(){
        return(
        <>
            {this.screener()}
        </>
        )
    }
}

export default Screener;