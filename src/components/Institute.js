import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Institute.css';

export default class Institute extends React.Component {
  render() {
    return (
      <div className="institute">
        <div className="proverb">
          <p style={{ marginBottom: `0px` }}>
            கற்க கசடறக் கற்பவை கற்றபின் <br /> நிற்க அதற்குத் தக.
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
        <div className="about ">
          <div className="abt2  container mt3">
            <div className="ip__left">
              <h1 style={{ fontWeight: `700` }}>ABOUT SUYAM</h1>
              <div className="foundername">
                <p className="f">நிறுவுநர்</p>
                <p className="t">தமிழ்மாமணி, கலைமாமணி</p>
                <h5 className="k">கல்லாடன்</h5>
              </div>
              <div className="foundername">
                <p className="f">Founder</p>
                <p className="t">Tamil Maamani, Kalai Maamani</p>
                <h5 className="k">KALLADAN</h5>
              </div>
            </div>
            <div className="ip__right">
              <img src="assets/founder.png" />
            </div>
          </div>
        </div>
        <div>
          <div className="content1 container mt3">
            <p className="p1">
              As a matter of concern, our UT of Puducherry has not seen
              appreciable number of Civil Service Officers and there is no
              single Puducherry Civil Service (PCS) Officer or Puducherry Police
              Service Officer (PPS) directly recruited through Civil Services
              Examinations from this soil. This is quite discouraging inspite of
              the good education and healthy environment prevailing in this
              Union Territory.
              <br />
              <br />
              Very much conscious of this situation and to work towards creating
              a platform to inspire the young minds of Puducherry towards this
              laudable career which manages the whole administrative affairs of
              our nation,{' '}
              <b>
                Suyam I.A.S. Coaching Institute was established in October 2006
              </b>
              . This Institute is doing its best to create a sense of awareness
              among the youth of Puducherry to take up Civil Services as a
              career by organising I.A.S. Awareness Camps, publicizing through
              media and by conducting coaching programmes for the aspirants.
            </p>
            <img />
          </div>
          <div className="content2 container mt3">
            <div>
              <p className="balanpara">
                To be frank, the Institute had achieved only a small proportion
                of its dream on the Civil Services front in this tiny town,
                grooming only one aspirant as a{' '}
                <b>
                  Civil Servant who himself selected as I.R.A.S. once and as
                  I.R.S.
                </b>{' '}
                the subsequent year, a few Civil Services Preliminary Exam
                Pass-outs and a very few Interview candidates.
              </p>
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
              }}
            >
              <img
                style={{ height: `300px`, width: `300px` }}
                src="assets/ips.png"
              />
              <b>P. Suthandira Balan, IRS.</b>
              <p style={{ color: `#0a79df`, textAlign: `center` }}>
                Assistant Commissioner of Income Tax, Bengaluru
              </p>
            </div>
          </div>
          <div className="content3">
            <div className="container mt3">
              <p>
                In 2009, joining hands with Pondicherry Institute of
                Development, Research and Action (founded by renowned Economist
                and Politician, Professor M. RAMADASS), Suyam I.A.S. Coaching
                Institute trained needy aspirants for the recruitment exams for
                the posts of Village Administrative Officer (VAO) and Village
                Assistant (VA) for a meagre fee to run the show. Out of the 30
                aspirants, the most needy 10 had cried in happiness when they
                knew that they became bread winners for their families.
                <br />
                <br />
                Since then, the Institute has preferred creating bread winners
                to achieving its dream. Till this date, the Institute has bred
                more than 600 breadwinners in various positions like Deputy
                Tahsildar, Village Administrative Officer, Village Assistant,
                Upper Division Clerk, Lower Division Clerk, Sub Inspector of
                Police, Police Constable (Men / Women / IRBn), Jail Warder,
                Fireman, Home Guard, Welfare Inspector, Assistant Commercial Tax
                Officer in the Government of Puducherry. That at-least a fourth
                in every Selection List will be Suyamites is not uncommon since
                2009.
              </p>
              <p
                style={{
                  color: '#0a79df',
                  fontWeight: `800`,
                  marginBottom: `0px`,
                }}
              >
                Name a Department in Puducherry; you can find tens of Suyamites
                there.{' '}
              </p>
            </div>
          </div>
          <div className="content4 container mt3">
            <p>
              Suyam Institute is not only preparing Suyamites to be
              breadwinners, but also as socially responsible and humanitarian
              Samaritans. Suyamites have shown, ever and anon, their compassion
              in serving the humanity. To quote a few —
            </p>
          </div>
          <div>
            <Carousel className="container mt3 icarousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/the_institute-35.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/the_institute-36.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/the_institute-37.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/the_institute-38.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/the_institute-39.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/the_institute-40.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="content6 container mt3">
            <p>
              Suyam is not a mere institute, it is a <b>“movement”</b>.<br />
              <br />
              Suyam I.A.S. coaching institute adds another feather to its cap
              now with this website,
              <br /> <b>www.suyamias.com</b> and a mobile application,{' '}
              <b>SUYAM I.A.S. App</b> <br />
              <br />
              Necessitated by the Corona pandemic situation and concerned very
              much about the Suyamites who enrolled in the Mission Perseverance
              2020 batch, the then General Preparatory Course which was started
              just a month before the COVID-19 lockdowns, the Institute, despite
              its ardent belief in the efficiency of traditional classroom
              method of teaching, founded the mobile application, “SUYAM I.A.S.”
              to train them and keep them abreast to crack the anticipated
              Competitive Examinations for recruitment for various posts in
              Puducherry as well as for TNPSC and Central Government posts. The
              Institute is endeavouring to come up with many courses and test
              batches, tailored to match the needs of various competitive
              examinations, in the near sooner, through this Mobile Application.{' '}
              <b>All the aspirants are welcome.</b> In the future, this digital
              tool will supplement the popular regular classes of Suyam
              Institute.
              <br />
              <br />
              “SUYAM I.A.S.” Mobile App will be a great boon to those aspirants
              who have compelling reasons that limit them from having a tryst
              with the most effective conventional chalkboard classroom of Suyam
              Institute. Working people, pregnant women, college-going students,
              physically challenged persons and the like can make use of this
              digital facility. <br />
              <br />
              The institute has committed to pave an easy track for the
              aspirants by giving them an effective coaching. <br />
              <br />
              and, the time is not too far off when suyam i.a.s. coaching
              institute shall realise its dream of fostering civil servants in
              large numbers. <br />
              <br />
              <span>
                <b>
                  If you have the will to achieve,
                  <br />
                  We are here to show you the way.
                </b>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
