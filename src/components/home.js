import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="proverb">
          <p style={{ marginBottom: `0px` }}>
            எண்ணென்ப ஏனை எழுத்தென்ப இவ்விரண்டும்
            <br />
            கண்ணென்ப வாழும் உயிர்க்கு.
            <br />
            <p
              style={{
                float: `right`,
                marginBottom: `0px`,
                fontStyle: 'italic',
              }}
            >
              {' '}
              ... குறள்
            </p>
          </p>
        </div>
        <div className="home">
          <div className="welcome">
            <div className="container mt3 welcome">
              <div className="htext">
                <h2 style={{ fontWeight: `700` }}>
                  {' '}
                  <span style={{ color: `#0A79DF` }}>
                    "An Institute that endeavours to create
                  </span>{' '}
                  <br /> SELF ESTEEMED, SELF CONFIDENT{' '}
                  <span style={{ color: `#0A79DF` }}>
                    Government Servants who can render
                  </span>{' '}
                  SELFLESS{' '}
                  <span style={{ color: `#0A79DF` }}>
                    service to the humanity"
                  </span>
                </h2>
              </div>
              <div className="himage">
                <img className="tagline" src="assets/wimage.png" />
              </div>
            </div>
          </div>
          <div className="courses-offered container ">
            <h2
              style={{
                marginTop: `20px`,
                textAlign: `center`,
                fontWeight: `700`,
              }}
            >
              COURSES OFFERED
            </h2>
            <div className="v2"></div>
            <div className="courses">
              <div class="img-holder">
                <img src="assets\Coursesi2.jpg" alt="image description" />
                <Link to="/OperationRedKEPI2020">
                  <Button
                    className="courcbtn"
                    style={{
                      margin: '0px',
                    }}
                    type="link"
                  >
                    MORE DETAILS
                  </Button>
                </Link>
              </div>

              <div class="img-holder">
                <img src="assets\Coursesi7.jpg" alt="image description" />
                
                <Link to="/MissionPerseverance2020">
                  <Button
                    className="courcbtn"
                    style={{
                      margin: '0px',
                    }}
                    type="link"
                  >
                    MORE DETAILS
                  </Button>
                </Link>
              </div>
              {/* <div className="rk">
                <p
                  style={{
                    fontWeight: `500`,
                    color: `#8D8D8D`,
                    marginBottom: `0px`,
                  }}
                >
                  SPECIAL PREPARATORY COURSE
                </p>
                <br />
                <h4 className="line">
                  <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                    MISSION PERSEVERANCE 2020
                  </span>
                </h4>

                <div className="row1">
                  <div className="col1">
                    <h6>Online video class through</h6>
                    <img
                      style={{
                        height: `50px`,
                        width: `50px`,
                        marginTop: `10px`,
                      }}
                      src="assets/suyamapplogo.png"
                      alt="suyam app logo"
                    />
                    <h6 style={{ paddingTop: `20px`, fontWeight: `700` }}>
                      <span style={{ color: `#0A79DF` }}>Suyam IAS</span> App
                    </h6>
                  </div>
                  <div className="__home_linee"></div>
                  <div className="col1">
                    <h6>Class commences on</h6>
                    <h2>
                      <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                        25th Oct
                      </span>
                    </h2>
                    <h6>
                      <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                        2020
                      </span>
                    </h6>
                    <vr color="black"></vr>
                  </div>
                  <div className="__home_linee"></div>
                  <div className="col2">
                    <h6>Course Fee</h6>
                    <h2>
                      <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                        Rs. 7500
                      </span>
                    </h2>
                  </div>
                </div>
                <div>
                  <h6>
                    <span style={{ color: `#0A79DF` }}>Suitable for</span>
                  </h6>
                  <div style={{ display: `flex` }}>
                    <p>
                      Puducherry
                      <br />
                      recruitments
                    </p>
                    <h5 style={{ paddingLeft: `30px`, paddingTop: `10px` }}>
                      UDC | VAO | SI | LDC | VA | DT
                    </h5>
                  </div>
                  <div style={{ display: `flex` }}>
                    <p>Also For</p>
                    <h5 style={{ paddingLeft: `60px` }}>TNPSC | SSC | RRB</h5>
                  </div>
                </div>
                <p>and such other exams</p>
                <div
                  style={{ display: `flex`, justifyContent: `space-between` }}
                >
                  <Link to="/MissionPerseverance2020">
                    <Button
                      className="btn btn-default"
                      height="50"
                      type="link"
                      style={{ fontWeight: `500`, marginTop: `124px` }}
                    >
                      MORE DETAILS
                    </Button>
                  </Link>
                  <img
                    src="assets/mpvector.png"
                    alt="rk-illustration"
                    style={{
                      height: `340px`,
                      width: `300px`,
                      marginTop: `-120px`,
                      objectFit: `contain`,
                      marginRight: `-20px`,
                    }}
                  />
                </div>
                  </div>*/}
              {/* <div className="rk">
                <p
                  style={{
                    fontWeight: `500`,
                    color: `#8D8D8D`,
                    marginBottom: `0px`,
                  }}
                >
                  SPECIAL COACHING FOR POLICE CONSTABLE EXAM IN PUDUCHERRY
                </p>
                &nbsp;
                <h4 className="line">
                  <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                    OPERATION RED KEPI 2020
                  </span>
                </h4>
                <div className="row1">
                  <img
                    style={{
                      height: `80px`,
                      width: `100px`,
                      objectFit: `contain`,
                    }}
                    src="assets/redkepilogo.png"
                    alt="redkepi-logo"
                  />
                </div>
                <div className="row2">
                  <div className="col1">
                    <h6>Online video class through</h6>
                    <img
                      style={{
                        height: `50px`,
                        width: `50px`,
                        marginTop: `10px`,
                      }}
                      src="assets/suyamapplogo.png"
                      alt="suyam app logo"
                    />
                    <h6 style={{ paddingTop: `20px`, fontWeight: `700` }}>
                      <span style={{ color: `#0A79DF` }}>Suyam IAS</span> App
                    </h6>
                  </div>
                  <div className="__home_linee2"></div>
                  <div className="col1">
                    <h6>Class commences shortly</h6>
                    <h2>
                      <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                        Date Will be
                      </span>
                    </h2>
                    <h6>
                      <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                        announced shortly
                      </span>
                    </h6>
                    <vr color="black"></vr>
                  </div>
                  <div className="__home_linee2"></div>
                  <div className="col2">
                    <h6>Course Fee</h6>
                    <h2>
                      <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                        Rs. 7500
                      </span>
                    </h2>
                  </div>
                </div>
                <h5>
                  Bilingual - <br />
                  Both in தமிழ் and English
                </h5>
                <div
                  style={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    marginTop: `20px`,
                  }}
                >
                  <Link to="/OperationRedKEPI2020">
                    <Button
                      className="btn btn-default"
                      type="link"
                      style={{ fontWeight: `500` }}
                    >
                      MORE DETAILS
                    </Button>
                  </Link>
                  <img
                    src="assets/rkvector.png"
                    alt="rk-illustration"
                    style={{
                      objectFit: `contain`,
                      height: `200px`,
                      width: `200px`,
                      marginTop: `-50px`,
                    }}
                  />
                </div>
              </div> */}
            </div>
          </div>

          <div className=" courses-offered container">
            <h2 className="cahead">CURRENT AFFAIRS</h2>
            <div className="v2"></div>
            <div className="courses">
              <div className="rk">
                <p style={{ color: `#8D8D8D` }}>
                  NEWS BITS OF NATIONAL AND INTERNATIONAL IMPORTANCE
                </p>
                <h3 className="line">
                  <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                    CURRENT AFFAIRS
                  </span>
                </h3>

                <div className="quizbanner">
                  <img
                    className="dog"
                    src="assets/dog.png"
                    alt="redkepi-logo"
                  />
                </div>
                <div>
                  <h4 className="line" style={{ paddingBottom: `5px` }}>
                    <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                      Weekly Update
                    </span>
                  </h4>
                  <div style={{ display: `flex`, marginTop: `20px` }}>
                    <div>
                      <h5>
                        <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                          28th Sep
                        </span>
                      </h5>
                      <p>
                        <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                          2020
                        </span>
                      </p>
                    </div>
                    <div
                      style={{
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        fontWeight: `700`,
                      }}
                    >
                      <p>to</p>
                    </div>
                    <div>
                      <h5>
                        <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                          4th Oct
                        </span>
                      </h5>
                      <p>
                        <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                          2020
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <Link to="/">
                  <Button
                    className="btn btn-default butre"
                    type="link"
                    style={{ margin: `0px` }}
                  >
                    DOWNLOAD PDF
                  </Button>
                </Link>
              </div>
              <div className="rk">
                <p style={{ color: `#8D8D8D` }}>
                  MULTIPLE CHOICE QUESTIONS WITH ANSWERS FOR QUICK REVISION
                </p>
                <h3 className="line">
                  <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                    CURRENT AFFAIRS QUIZ
                  </span>
                </h3>
                <div className="quizbanner">
                  <img
                    className="dog"
                    src="assets/quiztime.png"
                    alt="quiztime-pic"
                  />
                </div>
                <div>
                  <h4 className="line" style={{ paddingBottom: `5px` }}>
                    <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                      Weekly Update
                    </span>
                  </h4>
                  <div style={{ display: `flex`, marginTop: `20px` }}>
                    <div>
                      <h5>
                        <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                          28th Sep
                        </span>
                      </h5>
                      <p>
                        <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                          2020
                        </span>
                      </p>
                    </div>
                    <div
                      style={{
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        fontWeight: `700`,
                      }}
                    >
                      <p>to</p>
                    </div>
                    <div>
                      <h5>
                        <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                          4th Oct
                        </span>
                      </h5>
                      <p>
                        <span style={{ color: `#0A79DF`, fontWeight: `700` }}>
                          2020
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/">
                  <Button
                    className="btn btn-default butre"
                    type="link"
                    style={{ margin: `0px` }}
                  >
                    DOWNLOAD PDF
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="onvideo">
            <div className="onvideo-in container ">
              <div>
                <h2 style={{ fontWeight: `600` }}>
                  ONLINE VIDEO CLASSES: A TRAILER
                </h2>
                <p>
                  Have A Glance Of This Video To Have A Glimpse Of Online Video
                  Classes In The Suyam App.
                  <br />
                  <br />
                  Picture Abhi Bakhi Hai… <br />
                  The Picture Isn’t Over Yet.
                </p>
              </div>

              <video autoplay controls>
                <source
                  src="assets/Suyam Logo Animation.mp4"
                  type="video/mp4"
                  muted
                />
              </video>
            </div>
          </div>
          <div className="applive">
            <div className="applive-in">
              <div className="appimage">
                <img
                  src="assets/mobmockup.png"
                  alt="mobmockup"
                  style={{
                    width: `100%`,
                  }}
                />
              </div>
              <div className="appcont">
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    marginTop: `30px`,
                    marginBottom: `30px`,
                  }}
                >
                  <h1
                    style={{
                      fontWeight: `700`,
                      color: `white`,
                      marginBottom: `60px`,
                    }}
                  >
                    OUR APP IS LIVE!
                  </h1>
                  <div
                    style={{
                      display: `flex`,
                      alignItems: `center`,
                      flexDirection: 'column',
                      justifyContent: `space-between`,
                    }}
                  >
                    <div className="applive-log">
                      <div
                        style={{
                          display: `flex`,
                          flexDirection: `column`,
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}
                      >
                        <img src="assets/appsuyamlogo.png" alt="appsuyamlogo" />
                        <p style={{ color: `white`, fontWeight: `700` }}>
                          Suyam IAS
                        </p>
                      </div>
                      <a href="https://play.google.com/store/apps/details?id=in.testpress.suyamias">
                        <img
                          src="assets/playstore.png"
                          alt="playstore-button"
                        />
                      </a>
                    </div>
                    <div>
                      <Link to="/AppLive">
                        <Button
                          className="btn btn-default moredetbtn"
                          type="link"
                          style={{
                            fontWeight: `700`,
                            color: `#0a79df`,
                            backgroundColor: `white`,
                            marginTop: `-30px`,
                          }}
                        >
                          MORE DETAILS
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="team container mt3"
            style={{
              marginTop: `30px`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 className="jteam" style={{ fontWeight: `700` }}>
              JOIN OUR TEAM
            </h2>
            <div className="v2"></div>
            <div>
              <img className="hiring" src="assets/hiring.jpg" />
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: `30px`,
            marginBottom: `20px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 className="jteam" style={{ fontWeight: `700` }}>
            TESTIMONIAL
          </h2>
          <div className="v2"></div>
          <Carousel className="container mt3 hcarousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/cor1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/cor2.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/cor3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/cor4.jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 className="jteam" style={{ fontWeight: `700` }}>
            ACHIEVEMENTS
          </h2>
          <div className="v2" style={{}}></div>
        </div>
        <div className="gservices" style={{ marginTop: `20px` }}>
          <div className="container mt3 jteam1">
            <div
              className="left"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              <h2 className="sixhundred">2</h2>
              <span className="text-light"> CIVIL SERVICES</span>
              <p className="text-light"> I.R.A.S / I.R.S </p>
            </div>
            <div
              className="right"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 className="sixhundred">600+</h2>
              <span className="text-light">
                {' '}
                PUDUCHERRY GOVERNMENT SERVICES
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
