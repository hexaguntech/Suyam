// import React, { Component } from 'react';
// import './Registration.css';
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   Image,
//   PDFViewer,
// } from '@react-pdf/renderer';

// // import ReactDOM from 'react-dom';
// // import { PDFViewer } from '@react-pdf/renderer';

// // const App = () => (
// //   <PDFViewer>
// //     <MyDocument />
// //   </PDFViewer>
// // );

// // ReactDOM.render(<App />, document.getElementById('root'));

// export default class DownloadPdf extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4',
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//   });

//   MyDocument = () => (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Section #1</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>
//             {' '}
//             <div>
//               <p>I opted for the course {this.props.location.state.course}</p>
//               <p>My name is {this.props.location.state.name}</p>
//               <p>Gender: {this.props.location.state.gender}</p>
//               <p>
//                 My Address is {this.props.location.state.addressLine1},{' '}
//                 {this.props.location.state.addressLine2},{' '}
//                 {this.props.location.state.city}
//                 {this.props.location.state.state},{' '}
//                 {this.props.location.state.pincode}.
//               </p>
//               <p>My Mobile No. is {this.props.location.state.phone}</p>
//               <br />
//               <p>My E-mail ID is {this.props.location.state.email}</p>
//               <br />
//               <p>My Blood Group {this.props.location.state.bloodGroup}</p>
//               <br />
//               <p>I studied {this.props.location.state.studied}</p>
//               <br />
//               <p>
//                 My Additional qualifications are{' '}
//                 {this.props.location.state.additionalQualification}
//               </p>
//               <br />
//               <p>I am now Studying {this.props.location.state.studying}</p>
//               <br />
//               <p>I am now working {this.props.location.state.working}</p>
//               <br />
//               <p>
//                 I belong to (category for Vertical Reservation){' '}
//                 {this.props.location.state.verticalReservation}
//               </p>
//               <br />
//               <p>
//                 I am a / an (category for Horizontal Reservation){' '}
//                 {this.props.location.state.horizontalReservation}
//               </p>
//               <br />
//               <p>
//                 I assure that I will put in utmost perseverance, preparation and
//                 performance while looking forward to intellectual, academic,
//                 material and moral support from the organizers/ faculty of the
//                 Coaching Programme. I clearly understand that only upon payment
//                 of course fee, my admission will be confirmed. I clearly
//                 understand that fees once paid will not be refunded under any
//                 circumstances.
//               </p>
//               <br />
//               <p>
//                 I clearly understand that only upon payment of course fee, my
//                 admission will be confirmed.
//               </p>
//               <br />
//               <p>
//                 I clearly understand that fees once paid will not be refunded
//                 under any circumstances.
//               </p>
//               <br />
//             </div>
//           </Text>
//         </View>
//       </Page>
//     </Document>
//   );
//   render() {
//     return (
//       <PDFViewer>
//         <MyDocument />
//       </PDFViewer>
//     );
//   }
// }

import React from 'react';
import ReactToPrint from 'react-to-print';
import { Form, Button, Modal, Table } from 'react-bootstrap';

class DownloadPdf extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Table bordered size="sm" width="60%">
        <tbody>
          <tr>
            <th>Selected Course</th>
            <td>{this.props.location.state.course}</td>
          </tr>
          <tr>
            <th>My Name is</th>
            <td>{this.props.location.state.name}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>{this.props.location.state.dob}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{this.props.location.state.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{this.props.location.state.phone}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              {this.props.location.state.addressLine1},{' '}
              {this.props.location.state.addressLine2},{' '}
              {this.props.location.state.city},{' '}
              {this.props.location.state.state},{' '}
              {this.props.location.state.pincode}.
            </td>
          </tr>
          <tr>
            <th>Blood Group</th>
            <td>{this.props.location.state.bloodGroup}</td>
          </tr>
          <tr>
            <th>Volunteering Blood Donor</th>
            {this.props.location.state.bloodDonorVolunteer == true ? (
              <td>Yes</td>
            ) : (
              <td>No</td>
            )}
          </tr>
          <tr>
            <th>I studied</th>
            <td>{this.props.location.state.studied}</td>
          </tr>
          <tr>
            <th>I am now Studying</th>
            <td>{this.props.location.state.studying}</td>
          </tr>
          <tr>
            <th>I am working as</th>
            <td>{this.props.location.state.working}</td>
          </tr>
          <tr>
            <th>I belong to (Vertical Reservation)</th>
            <td>{this.props.location.state.verticalReservation}</td>
          </tr>
          <tr>
            <th>I am an (Horizontal Reservation)</th>
            <td>{this.props.location.state.horizontalReservation}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default class PdfBt extends React.Component {
  constructor(props) {
    super(props);
  }
  ju;
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <div ref={(el) => (this.componentRef = el)}>
          <Table bordered size="sm" width="60%">
            <tbody>
              <tr>
                <th>Selected Course</th>
                {/* <td>{this.props.location.state.course}</td> */}
              </tr>
              <tr>
                <th>My Name is</th>
                {/* <td>{this.props.location.state.name}</td> */}
              </tr>
              <tr>
                <th>Date of Birth</th>
                {/* <td>{this.props.location.state.dob}</td> */}
              </tr>
              <tr>
                <th>Email</th>
                {/* <td>{this.props.location.state.email}</td> */}
              </tr>
              <tr>
                <th>Phone</th>
                {/* <td>{this.props.location.state.phone}</td> */}
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  {/* {this.props.location.state.addressLine1},{' '}
              {this.props.location.state.addressLine2},{' '}
              {this.props.location.state.city},{' '}
              {this.props.location.state.state},{' '}
              {this.props.location.state.pincode}. */}
                </td>
              </tr>
              <tr>
                <th>Blood Group</th>
                {/* <td>{this.props.location.state.bloodGroup}</td> */}
              </tr>
              <tr>
                <th>Volunteering Blood Donor</th>
                {/* {this.props.location.state.bloodDonorVolunteer == true ? (
              <td>Yes</td>
            ) : (
              <td>No</td> */}
                {/* )} */}
              </tr>
              <tr>
                <th>I studied</th>
                {/* <td>{this.props.location.state.studied}</td> */}
              </tr>
              <tr>
                <th>I am now Studying</th>
                {/* <td>{this.props.location.state.studying}</td> */}
              </tr>
              <tr>
                <th>I am working as</th>
                {/* <td>{this.props.location.state.working}</td> */}
              </tr>
              <tr>
                <th>I belong to (Vertical Reservation)</th>
                {/* <td>{this.props.location.state.verticalReservation}</td> */}
              </tr>
              <tr>
                <th>I am an (Horizontal Reservation)</th>
                {/* <td>{this.props.location.state.horizontalReservation}</td> */}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
