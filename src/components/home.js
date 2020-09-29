import React from 'react';
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return <div>
      <div className="home">
        <section className="welcome">
          <div className="htext">
            <h2 style={{fontWeight: `700`}}> <span style={{color: `#0A79DF`}}>"An Institute that endeavours to create</span> <br/> SELF ESTEEMED, SELF CONFIDENT <span style={{color: `#0A79DF`}}>Government Servants who can render</span> SELFLESS <span style={{color: `#0A79DF`}}>service to the humanity"</span></h2>
          </div>
          <div className="himage">
            <img 
            className="tagline" src="assets/wimage.png"/>
          </div>
        </section>
        <div style={{marginTop: `30px`}}>
          <h2 style={{textAlign: `center`,fontWeight: `700`}}>COURSES OFFERED</h2>
          <hr color="#0A79DF" width="15%"></hr>
          <div className="courses">
            <div className="mp">
              <p style={{fontWeight:`500`,color:`#8D8D8D`}}>GENERAL PREPARATORY COURSE</p>
              <h3 className="line"><span style={{color: `#0A79DF`,fontWeight: `700`}}>MISSION PERSEVERANCE 2020</span></h3>
              
              <div className="row1">
                <div className="col1">
                  <h6>Online video class through</h6>
                  <img style={{ height: `50px`, width: `50px`, marginTop: `10px`}} src="assets/suyamapplogo.png" alt="suyam app logo" />
                  <h6 style={{paddingTop: `20px`,fontWeight: `700`}}><span style={{color: `#0A79DF`}}>SUYAM</span> I.A.S App</h6>
                </div>
                <div className="col1">
                  <h6>Class commences on</h6>
                  <h2><span style={{color: `#0A79DF`,fontWeight: `700`}}>9th Sep</span></h2>
                  <h6><span style={{color: `#0A79DF`,fontWeight: `700`}}>2020</span></h6>
                  <vr color="black"></vr>
                </div>
                <div className="col2">
                  <h6>Course Fee</h6>
                  <h2><span style={{color: `#0A79DF`,fontWeight: `700`}}>Rs. 6000</span></h2>
                </div>
              </div>
              <div>
                <h6><span style={{color: `#0A79DF`}}>Suitable for</span></h6>
                <div style={{display:`flex`}}>
                  <p>Puducherry<br/>recruitments</p>
                  <h5 style={{paddingLeft:`30px`, paddingTop: `10px`}}>UDC | VAO | SI | LDC | VA | PC</h5>
                </div>
                <div style={{display:`flex`}}>
                  <p>Also For</p>
                  <h5 style={{paddingLeft:`60px`}}>TNPSC | SSC | RRB</h5>
                </div>
              </div>
              <p>and such other exams</p>
              <Link to="/MissionPerseverance2020">
                <Button className="btn btn-default" type="link" style={{fontWeight: `700`}}>MORE DETAILS</Button>
              </Link>
            </div>
            <div className="rk">
              <p style={{fontWeight: `500`,color:`#8D8D8D`}}>SPL. COACHING FOR POLICE CONSTABLE EXAM IN PUDUCHERRY</p>
              <h3 className="line"><span style={{color: `#0A79DF`,fontWeight:`700`}}>OPERATION RED KEPI 2020</span></h3>
              <div className="row1">
                <img style={{height: `100px`,width: `300px`}} src="assets/suyam_header_logo-02.png" alt="redkepi-logo"/>
              </div>
              <div className="row2">
                <div className="col1">
                  <h6>Online video class through</h6>
                  <img style={{ height: `50px`, width: `50px`, marginTop: `10px`}} src="assets/suyamapplogo.png" alt="suyam app logo" />
                  <h6 style={{paddingTop: `20px`,fontWeight: `700`}}><span style={{color: `#0A79DF`}}>SUYAM</span> I.A.S App</h6>
                </div>
                <div className="col1">
                  <h6>Class commences on</h6>
                  <h2><span style={{color: `#0A79DF`,fontWeight: `700`}}>9th Sep</span></h2>
                  <h6><span style={{color: `#0A79DF`,fontWeight: `700`}}>2020</span></h6>
                  <vr color="black"></vr>
                </div>
                <div className="col2">
                  <h6>Course Fee</h6>
                  <h2><span style={{color: `#0A79DF`,fontWeight: `700`}}>Rs. 6000</span></h2>
                </div>
              </div>
              <h5 style={{ paddingBottom: `10px`}}>Bilingual - <br />Both in Tamizh and English</h5>
              <Link to="/OperationRedKEPI2020">
                <Button className="btn btn-default" type="link" style={{fontWeight: `700`}}>MORE DETAILS</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="onvideo">
          <h2 style={{fontWeight: `700`}}>ONLINE VIDEO CLASSES: A TRAILER</h2>
          <p>
            Have A Glance Of This Video To Have A Glimpse Of Online Video Classes In The Suyam App.<br />Picture Abhi Bakhi Hai… <br />The Picture Isn’t Over Yet.
          </p>
        </div>
        <div className="team">
          <h2 className="jteam" style={{fontWeight: `700`}}>JOIN OUR TEAM</h2>
          <hr color="#0A79DF" width="15%"></hr>
          <div>
            <img className="hiring" src="assets/hiring.png"/>
          </div>
        </div>
        <div className="gservices">

          <div className="left">
            <h2 className="sixhundred">2</h2>
            <span className="text-light"> CIVIL SERVICES</span>
            <p className="text-light"> I.R.A.S/I.R.S </p>
          </div>
          <div className="right">
            <h2 className="sixhundred">600+</h2>
            <span className="text-light"> PUDUCHERRY GOVERNMENT SERVICES</span>
          </div>
          
        </div>
        <div className="curaffairs">
          <h2 className="cahead">CURRENT AFFAIRS</h2>
          <hr color="#0A79DF" width="15%"></hr>
          <div className="courses">
            <div className="mp">
              <p style={{color:`#8D8D8D`}}>NEWS BITS OF NATIONAL AND INTERNATIONAL IMPORTANCE</p>
              <h3 className="line"><span style={{color: `#0A79DF`,fontWeight:`700`}}>CURRENT AFFAIRS</span></h3>
              
              <div>
                <div className="row3">
                  <img className="dog" src="assets/dog.png" alt="redkepi-logo"/>
                </div>
                <div>
                <h4 className="line" style={{paddingBottom: `5px`}}><span style={{color: `#0A79DF`,fontWeight:`700`}}>Weekly Update</span></h4>
                <div style={{display:`flex`, marginTop: `20px`}}>
                  <div> 
                    <h5><span style={{color: `#0A79DF`,fontWeight:`700`}}>14th Sep</span></h5>
                    <p><span style={{color: `#0A79DF`,fontWeight:`700`}}>2020</span></p>
                  </div>
                  <div style={{paddingLeft: "20px", paddingRight: "20px",fontWeight:`700`}}>
                    <p>to</p>
                  </div>
                  <div>
                    <h5><span style={{color: `#0A79DF`,fontWeight:`700`}}>20th Sep</span></h5>
                    <p><span style={{color: `#0A79DF`,fontWeight:`700`}}>2020</span></p>
                  </div>
                </div>
              </div>
              </div>
              <Link to="/">
                <Button className="btn btn-default" type="link">DOWNLOAD PDF</Button>
              </Link>
            </div>
            <div className="rk">
              <p style={{color:`#8D8D8D`}}>SPL. COACHING FOR POLICE CONSTABLE EXAM IN PUDUCHERRY</p>
              <h3 className="line"><span style={{color: `#0A79DF`,fontWeight:`700`}}>OPERATION RED KEPI 2020</span></h3>
              <div className="row1">
                <img style={{height: `100px`,width: `300px`}} src="assets/suyam_header_logo-02.png" alt="redkepi-logo"/>
              </div>
              <div className="row2">
                <div className="col1">
                  <h6>Online video class through</h6>
                  <img style={{ height: `50px`, width: `50px`, marginTop: `10px`}} src="assets/suyamapplogo.png" alt="suyam app logo" />
                  <h6 style={{paddingTop: `20px`,fontWeight:`700`}}><span style={{color: `#0A79DF`}}>SUYAM</span> I.A.S App</h6>
                </div>
                <div className="col1">
                  <h6>Class commences on</h6>
                  <h2><span style={{color: `#0A79DF`,fontWeight:`700`}}>9th Sep</span></h2>
                  <h6><span style={{color: `#0A79DF`,fontWeight:`700`}}>2020</span></h6>
                  <vr color="black"></vr>
                </div>
                <div className="col2">
                  <h6>Course Fee</h6>
                  <h2><span style={{color: `#0A79DF`,fontWeight:`700`}}>Rs. 6000</span></h2>
                </div>
              </div>
              <h5 style={{ paddingBottom: `10px`}}>Bilingual - <br />Both in Tamizh and English</h5>
              <Link to="/OperationRedKEPI2020">
                <Button className="btn btn-default" type="link">MORE DETAILS</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
