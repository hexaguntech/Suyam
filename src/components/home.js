import React from 'react';
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return <div>
      <div className="home">
        <section className="wimage">
          <img 
            className="tagline" src="assets/welcome_image-08.png"/>
        </section>

        <div className="coffered">
          <h2 className="offered">COURSES OFFERED</h2>
          <hr color="#0A79DF" width="15%"></hr>
          <div className="courses">
            <img className="banner1"src="assets/course_offered_banner01-04.png"/>
            <img  className="banner2"src="assets/course_offered_banner02-05.png"/>
          </div>
        </div>
        <div className="onvideo">
          <h2>ONLINE VIDEO CLASSES: A TRAILER</h2>
          <p>
            Have A Glance Of This Video To Have A Glimpse Of Online Video Classes In The Suyam App.<br />Picture Abhi Bakhi Hai… <br />The Picture Isn’t Over Yet.
          </p>
        </div>
        <div className="team">
          <h2 className="jteam">JOIN OUR TEAM</h2>
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
          <div className="caffairs">
            <img className="cbanner1" src="assets/current_affairsbanner02-06.png"/>
            <img  className="cbanner2" src="assets/course_offered_banner02-05.png"/>
          </div>
        </div>
      </div>
    </div>;
  }
}
