import React from 'react';
import './AppLive.css';

export default class Payment extends React.Component {
  render() {
    return (
      <div className="__applive">
        <div className="applive__header">
          <div className="container mt3">
            <img
              src="assets/applive.png"
              alt="applive-pic"
              style={{
                height: `400px`,
                width: `350px`,
                marginBottom: `-100px`,
                marginTop: `60px`,
              }}
            />
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `space-evenly`,
              }}
            >
              <div style={{ display: `flex`, justifyContent: `space-between` }}>
                <h1 style={{ fontWeight: `700`, color: `white` }}>
                  OUR APP IS LIVE!
                </h1>
                <img
                  src="assets/appsuyamlogo.png"
                  style={{ height: `100px`, width: `100px` }}
                />
              </div>
              <a href="https://play.google.com/store/apps/details?id=in.testpress.suyamias">
                <img
                  src="assets/playstore.png"
                  alt="playstore-button"
                  style={{ width: `200px`, marginTop: `20px` }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="container mt3"
          style={{ marginTop: `150px`, textAlign: `justify` }}
        >
          <p style={{ fontWeight: `500` }}>
            Suyam I.A.S. Coaching Institute adds another feather to its cap now
            with this Mobile App, “SUYAM I.A.S.”.
            <br />
            <br />
            “SUYAM I.A.S.” Mobile App will be a great boon to those aspirants
            who have compelling reasons that limit them from having a tryst with
            the most effective conventional chalkboard classroom of Suyam
            Institute. Working people, pregnant women, college-going students,
            physically challenged persons and the like can make use of this
            digital platform. <br />
            <br />
            You can find well delivered Video Classes, meticulously crafted
            notes, and carefully prepared daily tests and Weekly Tests in this
            Mobile App. Subjects required for competitive exams like Indian
            History, Geography, Indian Polity, Indian Economy, General Science,
            Quantitative Aptitude, Reasoning, General English, General Knowledge
            and Current Affairs are dealt with. <br />
            <br />
            The Institute has committed to pave an easy track for the aspirants
            by giving them effective coaching. <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}
