import React from 'react';
import { Button } from 'react-bootstrap';
import './SubmitApplication.css';
import ApplicantDataService from '../services/ApplicantDataService';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default class SubmitApplication extends React.Component {
  constructor(props) {
    super(props);

    this.saveApplication = this.saveApplication.bind(this);
    this.printDocument = this.printDocument.bind(this);
    this.pdfToHTML = this.pdfToHTML.bind(this);
  }

  pdfToHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // var source = $('#HTMLtoPDF')[0];
    const source = document.getElementById('applicationForm');

    var specialElementHandlers = {
      '#bypassme': function (element, renderer) {
        return true;
      },
    };

    var margins = {
      top: 50,
      left: 60,
      width: 545,
    };

    pdf.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top, // y coord
      {
        width: margins.width, // max width of content on PDF
        elementHandlers: specialElementHandlers,
      },
      function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        // this allow the insertion of new lines after html
        pdf.save('html2pdf.pdf');
      }
    );
  }
  saveApplication() {
    var data = {
      course: this.props.location.state.course,
      name: this.props.location.state.name,
      dob: this.props.location.state.dob,
      gender: this.props.location.state.gender,
      email: this.props.location.state.email,
      phone: this.props.location.state.phone,
      addressLine1: this.props.location.state.addressLine1,
      addressLine2: this.props.location.state.addressLine2,
      state: this.props.location.state.state,
      pincode: this.props.location.state.pincode,
      bloodGroup: this.props.location.state.bloodGroup,
      bloodDonorVolunteer: this.props.location.state.bloodDonorVolunteer,
      studied: this.props.location.state.studied,
      studying: this.props.location.state.studying,
      working: this.props.location.state.working,
      belongTo: this.props.location.state.belongTo,
      verticalReservation: this.props.location.state.verticalReservation,
      horizontalReservation: this.props.location.state.horizontalReservation,
      photoPath: this.props.location.photoPath,
    };

    console.log(data);

    ApplicantDataService.registerApplicant(data)
      .then((data) => {
        this.setState({
          submitted: true,
        });

        // const page = document.getElementById('applicationForm');
        // html2PDF(page, {
        //   jsPDF: {
        //     format: 'a4',
        //   },
        //   imageType: 'image/jpeg',
        //   output: './pdf/generate.pdf',
        // });
        // this.printDocument();
        this.pdfToHTML();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  printDocument() {
    const input = document.getElementById('applicationForm');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save('download.pdf');
    });
  }

  render() {
    return (
      <div id="HTMLtoPDF">
        <div className="container mt3" id="applicationForm">
          <h1 style={{ color: `#0A79DF`, fontWeight: `700` }}>
            My Profile & Application
          </h1>
          <div className="sa__imagecon"></div>
          <div className="sa__table">
            <table>
              <tr>
                <td>Selected Course</td>
                <td>{this.props.location.state.course}</td>
              </tr>
              <tr>
                <td>My Name is</td>
                <td>{this.props.location.state.name}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{this.props.location.state.dob}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.props.location.state.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{this.props.location.state.phone}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  {this.props.location.state.addressLine1},{' '}
                  {this.props.location.state.addressLine2},{' '}
                  {this.props.location.state.city}
                </td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td>{this.props.location.state.bloodGroup}</td>
              </tr>
              <tr>
                <td>Volunteering Blood Donor</td>
                <td>{this.props.location.state.bloodDonorVolunteer}</td>
              </tr>
              <tr>
                <td>I studied</td>
                <td>{this.props.location.state.studied}</td>
              </tr>
              <tr>
                <td>I am now Studying</td>
                <td>{this.props.location.state.studying}</td>
              </tr>
              <tr>
                <td>I am working as</td>
                <td>{this.props.location.state.working}</td>
              </tr>
              <tr>
                <td>I belong to</td>
                <td>{this.props.location.state.verticalReservation}</td>
              </tr>
              <tr>
                <td>I am an</td>
                <td>{this.props.location.state.horizontalReservation}</td>
              </tr>
            </table>
            <Button
              className="btn btn-default"
              type="submit"
              onClick={this.saveApplication}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
