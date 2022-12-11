import React, { Component } from 'react'; 

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

    screener(){ 
        return(
            <> 
                <table
                    width="100%"
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    className="message"
                    style={{  fontFamily: 'Helvetica,Arial,sans-serif' }}>
                    <tbody style={{  fontFamily: 'Helvetica,Arial,sans-serif' }}>
                    <tr>
                        <td>
                        <font size={-1}>
                            <b>NYU Daily Screener </b>&lt;noreply@qemailserver.com&gt;
                        </font>
                        </td>
                        <td align="right">
                        <font size={-1}>{this.state.date} at 9:26 AM</font>
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
                                <div style={{ overflow: "hidden" ,
                                                            fontFamily: 'Helvetica,Arial,sans-serif'}}>
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
                                                    fontFamily: 'Helvetica,Arial,sans-serif',
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
                                                            fontFamily: 'Helvetica,Arial,sans-serif',
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
                                                            fontSize: ".9rem",
                                                            fontFamily: 'Helvetica,Arial,sans-serif'
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
                                                            fontFamily: 'Helvetica,Arial,sans-serif',
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
                                                            fontFamily: 'Helvetica,Arial,sans-serif',
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
                                                    <td style={{ paddingBottom: 20 ,
                                                            fontFamily: 'Helvetica,Arial,sans-serif'}}>
                                                        <p style={{ paddingTop: 15 ,
                                                            fontFamily: 'Helvetica,Arial,sans-serif'}} >
                                                        <strong
                                                            style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: 'Helvetica,Arial,sans-serif'
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
                                                            rel="noreferrer" 
                                                            data-saferedirecturl="https://www.google.com/url?hl=en&q=https://www.nyu.edu/nyureturns&source=gmail&ust=1652044721581000&usg=AOvVaw00jrNbhqpdZiUJWw42741e"
                                                            >
                                                            NYU Returns website
                                                            </a>
                                                        </li>
                                                        </ul>
                                                        <p>
                                                        <strong
                                                            style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: 'Helvetica,Arial,sans-serif'
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
                                                            rel="noreferrer" 
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